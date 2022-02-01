import React from 'react';

const Logo = props => {
  return (
    <div
      style={{
        background:
          "url('https://assets.it22.nl/vlog-make-laars/admin/logo.png')",
        width: '200px',
        height: '60px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        backgroundSize: 'contain',
        position: 'relative',
        left: '-10px'
      }}
    ></div>
  );
};

export default Logo;
