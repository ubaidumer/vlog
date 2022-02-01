export default {
    control: {
      backgroundColor: '#fff',
      fontSize: 14,
      fontWeight: 'normal',
      height: '250px',
    },
  
    '&multiLine': {
      control: {
        fontFamily: 'monospace',
        minHeight: 250,
      },
      highlighter: {
        padding: 9,
     
      },
      input: {
        padding: 9,
    
      },
      
    },
  
    '&singleLine': {
      display: 'inline-block',
      width: 180,
  
      highlighter: {
        padding: 1,
      
      },
      input: {
        padding: 1,
   
  
      },
    },
  
    suggestions: {
      list: {
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.15)',
        fontSize: 14,
      },
      item: {
        padding: '5px 15px',
        borderBottom: '1px solid rgba(0,0,0,0.15)',
        '&focused': {
          backgroundColor: '#cee4e5',
        },
      },
    },
  }