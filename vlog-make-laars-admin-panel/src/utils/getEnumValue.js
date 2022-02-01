const getEnumValue = (value, type) => {
  let title;
  switch (type) {
    case 'STATUS_TYPE':
      title = value === 0 ? 'Actief' : 'Niet Actief';
      break;
    case 'PROFESSION_TYPE':
      let profession_type = ['Student', 'Ondernemer', 'Loondienst'];
      title = profession_type[value];
      break;
    case 'ROLE_TYPE':
      let role_type = ['Eigenaar', 'Makelaar', 'Huurder'];
      title = role_type[value];
      break;
  }

  return title;
};

export default getEnumValue;
