import * as mongoose from 'mongoose';

const DocumentTypeEnum = [
    'nationalCard',
    'payslip',
    'salarySlip',
    'annualStatement',
    'employmentStatement',
    'employerStatement',
    'landlordStatement',
    'tenantStatement',
    'chamberCommerRegistration',
    'bankstatement',
    'landLordLetter',
    'tenantStatement',
    'trainingRegistration',
    'financeOverview',
    'sideJobSalarySlip',
    'guarantorPartnershipNationalCard',
    'gNationalCard',
    'warant',
]



export const DocumentsTypeSchema =new mongoose.Schema({
   documentType: {
       type: String
   }
})


