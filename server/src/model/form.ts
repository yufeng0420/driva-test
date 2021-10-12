import * as validator from "class-validator"


export class Form {
    
    @validator.MinLength(1)
    firstName: string;

    @validator.IsEmail()
    email: string;

    @validator.IsOptional()
    middleName:string;

    @validator.IsString()
    lastName: string;

    @validator.IsMobilePhone()
    mobile: string;

    @validator.IsString()
    relationshipStatus: string;

    @validator.IsNumber()
    afterTaxIncome: number;

    @validator.MinLength(1)
    payFrequency: string;

    @validator.MinLength(1)
    occupation: string;

    @validator.MinLength(1)
    employer: string;

    @validator.IsNumber()
    currentEmploymentYear: number;

    @validator.IsNumber()
    currentEmploymentMonth: number;

    @validator.IsNumber()
    haveDepandants:string;

    @validator.IsBoolean()
    haveOtherIncome: boolean

}