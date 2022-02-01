import React, { createContext, useEffect, useReducer } from 'react';
import jwtDecode from 'jwt-decode';
import SplashScreen from 'src/components/SplashScreen';
import axios from 'src/utils/axios';
import parse from 'src/utils/parse';
import { GraphQLClient, gql } from 'graphql-request';
import moment from 'moment';

const initialAuthState = {
  isAuthenticated: false,
  isInitialised: false,
  user: null
};

const isValidToken = accessToken => {
  if (!accessToken) {
    return false;
  }

  const currentTime = Date.now() / 1000;

  const decoded = jwtDecode(accessToken);

  if (!decoded?.realm_access?.roles?.includes('admin')) { 
    localStorage.clear();
    window.location.href = '/login';
  }

  return decoded.exp > currentTime;
};

const isValidSASToken = sasToken => {
  if (!sasToken) {
    return false;
  }

  // Added an extra hour to avoid the case if use doesn't refresh the page for 1 hour
  const extraHour = 60 * 1000;
  const currentTime = Date.now() / 1000;

  return moment(currentTime + extraHour).isAfter(
    parseInt(localStorage.getItem('sasTokenExpiryDate'))
  );
};

const setSession = data => {
  if (!data) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  } else {
    const { access_token, expires_in, refresh_token } = data;
    if (access_token || expires_in || refresh_token) {
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('refreshToken', refresh_token);
    }
  }
};

const refreshSession = async () => {
  const graphQLClient = new GraphQLClient(process.env.REACT_APP_ADMIN_URL);
  const refreshToken = localStorage.getItem('refreshToken');
  const query = gql`
      mutation {
        refreshTokenLogin(refreshToken:{
          refresh_token:"${refreshToken}"
          client_id:"${process.env.REACT_APP_KEYCLOAK_CLIENT}"
          client_secret:"${process.env.REACT_APP_KEYCLOAK_SECRET}"
          grant_type:"refresh_token"
        }){
          access_token   
          expires_in
          refresh_token
        }
      }
    `;

  try {
    const response = await graphQLClient.request(query);

    const refreshTokenData = parse(response);
    setSession(refreshTokenData.refreshTokenLogin);
    // window.location.href = '/admin';
  } catch (err) {
    throw new Error('Token Refresh Event Failed!');
  }
};

const getSASToken = () => {
  (async () => {
    // Prepare Headers and Client
    const graphQLClient = new GraphQLClient(
      `${process.env.REACT_APP_USERS_URL}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          languages: 'eng'
        }
      }
    );

    const query = gql`
      {
        getSaSToken {
          accessToken
          expiryDate
        }
      }
    `;

    await graphQLClient.request(query).then(data => {
      const { accessToken, expiryDate } = data?.getSaSToken;
      localStorage.setItem('sasToken', accessToken);
      localStorage.setItem('sasTokenExpiryDate', expiryDate);
    });
  })().catch(err => {
    //console.error(err);
  });
};

const checkSASToken = async () => {
  try {
    // const sasToken = localStorage.getItem('sasToken');
    // if (!sasToken || !isValidSASToken(sasToken)) {
      getSASToken();
    // }
  } catch (err) {
    //console.error(err);
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIALISE': {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        user
      };
    }
    case 'LOGIN': {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    }
    case 'REGISTER': {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...initialAuthState,
  method: 'JWT',
  login: () => Promise.resolve(),
  logout: () => {},
  register: () => Promise.resolve()
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const login = async (email, password) => {
    const graphQLClient = new GraphQLClient(process.env.REACT_APP_ADMIN_URL);
    const query = gql`
      mutation {
        login(
          Login: {
            username: "${email}"
            password: "${password}"
            client_id: "${process.env.REACT_APP_KEYCLOAK_CLIENT}"
            client_secret: "${process.env.REACT_APP_KEYCLOAK_SECRET}"
            grant_type: "password"
          }
        ) {
          access_token
          expires_in
          refresh_token
          session_state
        }
      }
    `;

    try {
      const response = await graphQLClient.request(query);

      const loginData = parse(response);

      const decoded = jwtDecode(loginData?.login?.access_token);

      if (decoded?.realm_access?.roles?.includes('admin')) { 
        setSession(loginData.login);
      }
      else {
        throw new Error('Geef geldige referenties op');
      }
    } catch (err) {
      throw new Error('Geef geldige referenties op');
    }
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  const register = async (email, name, password) => {
    const response = await axios.post('/api/account/register', {
      email,
      name,
      password
    });
    const { accessToken, user } = response.data;

    localStorage.setItem('accessToken', accessToken);

    dispatch({
      type: 'REGISTER',
      payload: {
        user
      }
    });
  };

  const checkAuthToken = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (
        window.location.pathname === '/login' &&
        accessToken &&
        isValidToken(accessToken)
      ) {
        window.location.href = '/admin/dashboard';
      }
      else if (window.location.pathname === '/forgot-password' || window.location.pathname?.indexOf('reset-password') !== -1) {
      }
      else if (window.location.pathname !== '/login' && !accessToken) {
        window.location.href = '/login';
      } else if (refreshToken && !isValidToken(accessToken)) {
        refreshSession();
      }

      dispatch({
        type: 'INITIALISE',
        payload: {
          isAuthenticated: window.location.pathname !== '/login' || window.location.pathname === '/forgot-password',
          user: null
        }
      });
    } catch (err) {
      //console.error(err);
      dispatch({
        type: 'INITIALISE',
        payload: {
          isAuthenticated: false,
          user: null
        }
      });
    }
  };

  useEffect(() => {
    checkAuthToken();
    checkSASToken();
  }, []);

  if (!state.isInitialised) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'JWT',
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
