export const ConfigurationFile = { 
    "APPLICATION" : {
        "STATUS_TYPE" : {
            "Viewing" : "0", 
            "InProgress" : "1", 
            "Complete" : "2", 
            "Rented" : "3"
        }, 
        "APPLICATION_ATTACH_TYPE" : {
            "document" : "0", 
            "vlog" : "1"
        }
    }, 
    "FIELDS" : {
        "TOKEN" : "Token", 
        "DOCUMENT" : "Document", 
        "VLOG" : "Vlog", 
        "APPLICATION_ATTACHMENT_TYPE" : "Application Attachment Type", 
        "STATUS_TYPE" : "Status Type", 
        "DATA" : "Data"
    }, 
    "RESPONSES" : {
        "ERROR" : {
            "APPLICATION_ERROR" : {
                "DocumentType" : "Document Type Enum is Invalid", 
                "VlogType" : "Vlog Type Enum is invalid", 
                "ApplicantStatusType" : "Status Type Enum is Invalid"
            }, 
            "INVALID_FIELD" : "XXXX has invalid value.", 
            "NOT_FOUND" : "XXXX not found", 
            "FORBIDDEN" : "forbidden", 
            "ERROR_VALUE" : "error", 
            "NOT_PROVIDED" : "XXXX is not provided",
            "ALREADY_EXIST": "XXXX already exist",
            "NOT_UPLOADED":"XXXX didn't uploaded"
        }, 
        "SUCCESS" : {
            "SUCCESSFULL" : "Successfull"
        }
    }, 
    "USERS" : {
        "DOCUMENT_TYPE" : {
            "National card" : "0", 
            "Pay slip" : "1", 
            "Salary slip" : "2", 
            "Annual statement" : "3", 
            "Employment statement" : "4", 
            "employer statement" : "5", 
            "Land lord Statement" : "6", 
            "Tenant statement" : "7", 
            "Chamber commer registration" : "8", 
            "Bank statement" : "9", 
            "Land lord Letter" : "10", 
            "Training registration" : "11", 
            "Finance overview" : "12", 
            "Side job salary slip" : "13", 
            "Guarantor partner ship national card" : "14", 
            "G national card" : "15", 
            "Warant" : "16"
        }
    }
}