export const Enum = {
    "APPLICATION" : {
        "STATUS_TYPE" : {
            "Bezichtiging" : 0, 
            "Wordt verwerkt" : 1, 
            "Afgerond" : 2, 
            "Verhuurd" : 3
        }, 
        "APPLICATION_ATTACH_TYPE" : {
            "Document" : 0, 
            "Vlog" : 1
        }
    }, 

    "USERS" : {
        ///New Start Here ///
        "IS_DELETED_ENUM":{
            0:"IN_ACTIVE",
            1:"ACTIVE",
        },
        "EMPOLOYEE_DOC_ENUM":{
            0:"Een kopie van de voorkant van een geldig indentiteitsbewijs",
            1:"Een kopie van loonstrook 1",
            2:"Bankafschriften waarop te zien is dat uw salaris wordt gestort",
            3:"Een kopie van uw meest recente jaaropgave",
            4:"Een kopie van uw arbeidsovereenkomst",
            5:"Een werkgeversverklaring (niet ouder dan een maand",
            6:"Een begeleidend schrijven, waarin u uw zelf voorstelt aan de verhuurder",
            7:"Indien mogelijk een goed huurdersverklaring",
            8:"Een kopie van loonstrook 2",
            9:"Een kopie van loonstroon 3",
        },
        "OWNER_DOC_ENUM":{
            8:"Een kopie geldig identiteitsbewijs",
            9:"Een kopie inschrijving kamer van koophandel",
            10:"Een kopie van uw winst verlies rekening",
            11:"Een begeleidend schrijven, waarin u uw zelf voorstelt aan de verhuurder",
            12:"Indien mogelijk een goed huurdersverklaring",
        },
        "STUDENT_DOC_ENUM":{
            13:"Een kopie geldig identiteitsbewijs",
            14:"Registratie/inschrijving van uw opleiding (DUO)",
            15:"Een overzicht van de hoogte van uw studiefinanciering",
            16:"Bankafschriften waarop te zien is dat uw studiefinanciering word gestort",
            17:"Eventuele gegevens van uw eigen inkomen uit bijbaan (3 recente loonstroken), financiëlebijdrage ouders",
            18:"Bankafschriften waarop te zien is dat uw salaris wordt gestort",
            19:"Een begeleidend schrijven, waarin u uw zelf voorstelt aan de verhuurder",
            20:"Indien mogelijk een goed huurdersverklaring",
            "Van_uw_garantsteller":{
                "Een_kopie_geldig_identiteitsbewijs":{
                   "describe": "( indien uw garantsteller een geregistreerd partnerschapvvvvheeft, dienen beide personen een kopie identiteitsbewijs aan te leveren"
                },
                "Een_kopie_geldig_identiteitsbewijs ":{
                    "describe": null
                },
                "Akte_van_garantstelling":{
                    "describe": "( indien uw garantsteller een geregistreerd partnerschap heeft,houdt u er dan rekening mee, dat beide personen de akte dienen te ondertekenen ). Hetkopje verhuurder kunt u leeg laten"
                }
            }
        },
        "STATUS_TYPE":{
            "IN-ACTIVE": 0,
            "ACTIVE": 1
         },
         "PROFESSION_TYPE":{
             "STUDENT": 0,
             "EMPLOYEER": 1,
             "OWNER": 2
         },
         "ROLE_TYPE":{
            "OWNER": 0,
            "MAKELAAR": 1,
            "ENDUSER": 2,
            "ADMIN":3,
        },
         ///New END Here ///
        "DOCUMENT_TYPE" : {
            "ID bewijs" : 0, 
            "Salaris strook" : 1, 
            "Salarisstrook" : 2, 
            "Jaar opgave" : 3, 
            "Werkgevers verklaring" : 4, 
            "employer statement" : 5, 
            "Verhuurdersverklaring" : 6, 
            "Tenant statement" : 7, 
            "KvK uitreksel" : 8, 
            "Bank afschrift" :9, 
            "Land lord letter" : 10, 
            "Training registration" : 11, 
            "Finance overview" : 12, 
            "Side job salary slip" :13, 
            "Guarantor partner ship national card" : 14, 
            "G national card" : 15, 
            "Warrant" : 16
        },
        "DOCUMENT_TYPE_LIST": {
            0:"Een kopie van de voorkant van een geldig indentiteitsbewijs",
            1:"Een kopie van loonstrook 1",
            2:"Bankafschriften waarop te zien is dat uw salaris wordt gestort",
            3:"Een kopie van uw meest recente jaaropgave",
            4:"Een kopie van uw arbeidsovereenkomst",
            5:"Een werkgeversverklaring (niet ouder dan een maand",
            6:"Een begeleidend schrijven, waarin u uw zelf voorstelt aan de verhuurder",
            7:"Indien mogelijk een goed huurdersverklaring",
            8:"Een kopie geldig identiteitsbewijs",
            9:"Een kopie inschrijving kamer van koophandel",
            10:"Een kopie van uw winst verlies rekening",
            11:"Een begeleidend schrijven, waarin u uw zelf voorstelt aan de verhuurder",
            12:"Indien mogelijk een goed huurdersverklaring",
            13:"Een kopie geldig identiteitsbewijs",
            14:"Registratie/inschrijving van uw opleiding (DUO)",
            15:"Een overzicht van de hoogte van uw studiefinanciering",
            16:"Bankafschriften waarop te zien is dat uw studiefinanciering word gestort",
            17:"Eventuele gegevens van uw eigen inkomen uit bijbaan (3 recente loonstroken), financiëlebijdrage ouders",
            18:"Bankafschriften waarop te zien is dat uw salaris wordt gestort",
            19:"Een begeleidend schrijven, waarin u uw zelf voorstelt aan de verhuurder",
            20:"Indien mogelijk een goed huurdersverklaring",
            21:"Een kopie geldig identiteitsbewijs",
            22:"Een kopie van de recente loonstrook 1.",
            23:"Akte van garantstelling",
            24:"Een kopie van de achterkant van een geldig indentiteitsbewijs",
            25:"Een kopie van loonstrook 2",
            26:"Een kopie van loonstroon 3",
            27:"Een kopie van de recente loonstrook 2.",
            28: "Een kopie van de recente loonstrook 3.",
            29:'Loonstrook 1.',
            30:'Loonstrook 2.',
            31:'Loonstrook 3.',
            32:'',
            33:'',
            34:'',
            35:'',
            36:'',
            37:'',
            38:'',
            39:'',
            40:'',
            41:'',
            42:'',
            43:'',
            44:'',
            45:'',
        }
    }

}