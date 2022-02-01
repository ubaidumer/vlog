const capitalize = text => {
  return text.toLowerCase().replace(/\b[a-z]/g, function(text) {
    return text.toUpperCase();
  });
};

export default capitalize;
