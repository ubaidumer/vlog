export const ResponsesConfig = {
    "RESPONSES": {
        "ERROR": {
            "KEYCLOAK_ERROR":{
                "USERNAME":"User exists with same username",
                "EMAIL":"User exists with same email"
            },
            "APPLICATION_ERROR": {
                "DocumentType": "Document Type Enum is Invalid",
                "VlogType": "Vlog Type Enum is invalid",
                "ApplicantStatusType": "Status Type Enum is Invalid"
            },
            "INVALID_FIELD": "XXXX has invalid value.",
            "NOT_FOUND": "XXXX not found",
            "FORBIDDEN": "forbidden",
            "ERROR_VALUE": "error",
            "NOT_PROVIDED": "XXXX is not provided",
            "ALREADY_EXIST": "XXXX already exist",
            "NOT_UPLOADED": "XXXX didn't uploaded",
            "VLOG_CANT_FIND_USER":"Please insert accurate userId",
            "BLOB_ID_NOT_FOUND":"File id not found",
            "BLOB_NOT_FOUND":"File not found",
            "RECORD_NOT_FOUND":"Record not found",
            "SUCCESSFULLY_DELETED_BLOB":"Successfully Deleted Blob",
            "FAILED_TO_DELETE_BLOB":"Failed to Delete Blob",
            "OLD_PASSWORD_INCORRECT":"Old password is incorrect",
            "ADD_CURRENT_PASSWORD":"Please enter current password to verify the password"
        },
        "VALIDATION":{
            "MUST_BE_AT_CHARACTER": "XXXX must be atleast CHAR_XXXX characters",
            "MUST_HAVE_AT_CHARACTER": "XXXX must have atleast CHAR_XXXX characters",
            "MAXIMIUM_LENGTH":"XXXX must have at most CHAR_XXXX characters",
            "SIZE_LIMIT":"XXXX must be a CHAR_XXXX number"
        },
        "SUCCESS": {
            "SUCCESSFULL": "Successfull",
            "SUCCESSFULLY_CREATED_USER_WITH_ROLES":"User has created successfully with roles assigned",
            "SUCCESSFULLY_CREATE_USER_WITHOUT_ROLES":"User created successfully but roles are not assigned"
        }
    },
}