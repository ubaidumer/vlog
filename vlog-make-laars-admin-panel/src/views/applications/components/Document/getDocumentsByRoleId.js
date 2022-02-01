const getDocumentsByRoleId = roleId => {
  let documents = [];
  switch (roleId) {
    case 0:
      documents = [
        {
          key: '21',
          title: 'Een kopie geldig identiteitsbewijs.',
          required: true,
        },
        {
          key: '14',
          title: 'Registratie/inschrijving van uw opleiding (DUO).',
          required: true,
        },
        {
          key: '15',
          title:
            'Een overzicht van de hoogte van uw studiefinanciering.',
            required: true,
        },
        {
          key: '16',
          title:
            'Bankafschriften waarop te zien is dat uw studiefinanciering wordt gestort.',
            required: true,
        },
        {
          key: '29',
          title: 'Een kopie van loonstrook 1.',
          required: true,
        },
        {
          key: '30',
          title: 'Een kopie van loonstrook 2.',
          required: true,
        },
        {
          key: '31',
          title: 'Een kopie van loonstrook 3.',
          required: true,
        },
        {
          key: '18',
          title:
            'Bankafschriften waarop te zien is dat uw salaris wordt gestort.',
            required: true,
        },
        {
          key: '19',
          title:
            'Een begeleidend schrijven, waarin u uw zelf voorstelt aan de verhuurder.',
            required: false,
        },
        {
          key: '20',
          title: 'Indien mogelijk een goed huurdersverklaring.',
          required: false,
        },
        {
          key: '13',
          title: 'Een kopie van de voorkant van een geldig indentiteitsbewijs.',
          required: true,
          // subTitle:
          //   '(indien uw garantsteller een geregistreerd partnerschapheeft, dienen beide personen een kopie identiteitsbewijs aan te leveren'
        },
        {
          key: '32',
          title: 'Een kopie van de achterkant van een geldig indentiteitsbewijs.',
          required: true,
        },
        {
          key: '22',
          title: 'Een kopie van loonstrook 1.',
          required: true,
        },
        {
          key: '27',
          title: 'Een kopie van loonstrook 2.',
          required: true,
        },
        {
          key: '28',
          title: 'Een kopie van loonstrook 3.',
          required: true,
        },
        {
          key: '23',
          title: 'Akte van garantstelling',
          subTitle:
            '(indien uw garantsteller een geregistreerd partnerschap heeft,houdt u er dan rekening mee, dat beide personen de akte dienen te ondertekenen) Het kopje verhuurder kunt u leeg laten.',
          required: true,
        }
      ];
      break;

    case 1:
      documents = [
        {
          key: '0',
          title: 'Een kopie van de voorkant van een geldig indentiteitsbewijs.',
          required: true,
        },
        {
          key: '24',
          title: 'Een kopie van de achterkant van een geldig indentiteitsbewijs.',
          required: true,
        },
        {
          key: '1',
          title: 'Een kopie van loonstrook 1.',
          required: true,
        },
        {
          key: '25',
          title: 'Een kopie van loonstrook 2.',
          required: true,
        },
        {
          key: '26',
          title: 'Een kopie van loonstrook 3.',
          required: true,
        },
        {
          key: '2',
          title:
            'Bankafschriften waarop te zien is dat uw salaris wordt gestort.',
            required: true,
        },
        {
          key: '3',
          title: 'Een kopie van uw meest recente jaaropgave',
          required: true,
        },
        {
          key: '4',
          title: 'Een kopie van uw arbeidsovereenkomst.',
          required: true,
        },
        {
          key: '5',
          title: 'Een werkgeversverklaring (niet ouder dan een maand).',
          required: true,
        },
        {
          key: '33',
          title:
            'Een begeleidend schrijven, waarin u uw zelf voorstelt aan de verhuurder.',
            required: false,
        },
        {
          key: '34',
          title: 'Indien mogelijk een goed huurdersverklaring.',
          required: false,
        },
      ];
      break;

    case 2:
      documents = [
        {
          key: '8',
          title: 'Een kopie van de voorkant van een geldig indentiteitsbewijs',
          required: true,
        },
        {
          key: '35',
          title: 'Een kopie van de achterkant van een geldig indentiteitsbewijs.',
          required: true,
        },
        {
          key: '9',
          title: 'Een kopie inschrijving kamer van koophandel. (niet ouder dan 1 maand)',
          required: true,
        },
        {
          key: '10',
          title: 'Een kopie van uw winst verlies rekening afgelopen boekjaar.',
          required: true,
        },
        {
          key: '36',
          title:
            'Een begeleidend schrijven, waarin u uw zelf voorstelt aan de verhuurder.',
            required: false,
        },
        {
          key: '37',
          title: 'Indien mogelijk een goed huurdersverklaring.',
          required: false,
        },
      ];
      break;
  }

  return documents;
};

export default getDocumentsByRoleId;
