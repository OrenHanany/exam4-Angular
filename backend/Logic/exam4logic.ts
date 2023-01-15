import dal from "../Utils/dal_mysql"
import { OkPacket } from "mysql";
import User from "../Models/User";
import Accountoperations from "../Models/Accountoperations";
//add User
const addUser = async (user: User): Promise<User> => {
    const sql = `
    INSERT INTO bankaccounts.useraccount (name, lastname) 
    VALUES ('${user.name}','${user.last_name}' )`;

    const response: OkPacket = await dal.execute(sql);
    user.id = response.insertId;
    return user;
}

const addOperation = async (accountoperations: Accountoperations): Promise<Accountoperations> => {
    // addOperation
    const sql = `
    INSERT INTO bankaccounts.accountoperations (accountnumber, type, sum, date, interest, payments) VALUES
    ('${accountoperations.accountnumber}', 
    '${accountoperations.type}', 
    '${accountoperations.sum}', 
    '${accountoperations.date}', 
    '${accountoperations.interest}', 
    '${accountoperations.payments}')`;


    const response: OkPacket = await dal.execute(sql);
    accountoperations.id = response.insertId;
    return accountoperations;
}

//all students
const getAllOperationsByAccount= async (accountnumber:number): Promise<Accountoperations[]> => {
    // command line for the DB
    const sql = `SELECT * FROM bankaccounts.accountoperations Where bankaccounts.accountoperations.accountnumber=${accountnumber}`;
    // a promise function that connects us to the database with the command line
    const arry = await dal.execute(sql);
    return arry;
}

const getAllOperations = async (): Promise<Accountoperations[]> => {
    // command line for the DB
    const sql = `SELECT * FROM bankaccounts.accountoperations`;
    // a promise function that connects us to the database with the command line
    const arry = await dal.execute(sql);
    return arry;
}


export default{
    addUser,
    addOperation,
    getAllOperationsByAccount,
    getAllOperations
}
