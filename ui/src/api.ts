import axios, {AxiosResponse} from 'axios';

const paths = {
    postFormData: "/form/postData"
}

const root = "http://localhost:8080"


export type FormData = {
    firstName: string,
    middleName: string,
    lastName: string,
    mobile: string,
    email: string,
    relationshipStatus: string,
    afterTaxIncome: number,
    payFrequency: string,
    occupation: string,
    employer: string,
    currentEmploymentYear: number,
    currentEmploymentMonth: number,
    haveDepandants:number,
    haveOtherIncome: boolean
}

export const initFormData = {
    firstName: "",
    middleName: "",
    lastName: "",
    mobile: "",
    email: "",
    relationshipStatus: "",
    afterTaxIncome: undefined,
    payFrequency: "",
    occupation: "",
    employer: "",
    currentEmploymentYear: undefined,
    currentEmploymentMonth: undefined,
    haveDepandants: undefined,
    haveOtherIncome: false
}

export async function postForm(formData: Partial<FormData>): Promise<any>{
    try{
        const response: AxiosResponse<any> = await axios({
            url: root + paths.postFormData,
            method: 'POST',
            data: {
                formData
            }
        });

        return response.data;
    }
    catch (e) {
        throw e
    }
}