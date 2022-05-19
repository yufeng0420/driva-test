import * as express from "express";
import * as validator from "class-validator"
import {plainToClass} from 'class-transformer'
import { Form } from "../model/form"

const db = require("../config/db")
const router = express.Router();

const formRouter = () => {
    router.post('/postData', postForm)

    return router
}


type postFormReq = {
    body:{
        formData: Form
    }
}

const postForm = async (req: postFormReq, res, next) =>{
   
    const formData = plainToClass(Form, req.body.formData)

    const validationErrors = await validator.validate(formData, {skipMissingProperties: false, forbidUnknownValues: true, whitelist: true});
    if(validationErrors.length){
        return res.status(400).send({ message: "An issue happened with saving form data", error: validationErrors })
    }

    // save data to database
    // let d = new Date()
    // let yyyy = d.getFullYear()
    // let mm = d.getMonth() + 1
    // let dd = d.getDate()

    // let createAtDate = `${yyyy}-${mm}-${dd}`;
    // const haveOtherIncome = formData.haveOtherIncome ? 1 : 0

    // create table if not exists
    // let createSql = `CREATE TABLE IF NOT EXISTS customers (
    //         id int primary key AUTO_INCREMENT, 
    //         firstName VARCHAR(100) NOT NULL, 
    //         middleName VARCHAR(100), 
    //         lastName VARCHAR(100) NOT NULL, 
    //         mobile VARCHAR(100) NOT NULL, 
    //         email VARCHAR(100) NOT NULL, 
    //         payFrequency VARCHAR(100) NOT NULL, 
    //         occupation VARCHAR(100) NOT NULL, 
    //         employer VARCHAR(100) NOT NULL, 
    //         currentEmploymentYear INT NOT NULL, 
    //         currentEmploymentMonth INT NOT NULL, 
    //         haveDependents INT NOT NULL, 
    //         relationshipStatus VARCHAR(100) NOT NULL, 
    //         haveOtherIncome BOOLEAN NOT NULL, 
    //         afterTaxIncome DOUBLE NOT NULL, 
    //         createdAt VARCHAR(100) NOT NULL
    //     )`

    //     try {
    //         await db.execute(createSql)
    //     } catch(e){
    //         return res.status(400).send(e)
    //     }

    // Save data in table 
    //  let sql = `
    //     INSERT INTO customers(
    //         firstName,
    //         middleName,
    //         lastName,
    //         mobile,
    //         email,
    //         relationshipStatus,
    //         afterTaxIncome,
    //         payFrequency,
    //         occupation,
    //         employer,
    //         currentEmploymentYear,
    //         currentEmploymentMonth,
    //         haveDependents,
    //         haveOtherIncome,
    //         createdAt
    //     )
    //     VALUES(
    //         '${formData.firstName}',
    //         '${formData.middleName}',
    //         '${formData.lastName}',
    //         '${formData.mobile}',
    //         '${formData.email}',
    //         '${formData.relationshipStatus}',
    //         '${formData.afterTaxIncome}',
    //         '${formData.payFrequency}',
    //         '${formData.occupation}',
    //         '${formData.employer}',
    //         '${formData.currentEmploymentYear}',
    //         '${formData.currentEmploymentMonth}',
    //         '${formData.haveDependents}',
    //         '${haveOtherIncome}',
    //         '${createAtDate}'
    //     )`

        try{
            // await db.execute(sql)
            return res.status(200).send({"dataSaved": true})
            
        }catch(e){
            return res.status(400).send({message: "An issue happened with saving data to database", error: e})
        }
}

export default formRouter