const pool = require('../../config/database');
module.exports = {
    create: (data,callBack) => {
        console.log('data-----',data);
        pool.query(`INSERT INTO registration (firstName,lastName,gender,email,password,number) 
        values (?,?,?,?,?,?)`, 
        [
            data.firstName, 
            data.lastName, 
            data.gender, 
            data.email, 
            data.password, 
            data.number
        ],(error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results);
        });
    },
    getUsers : callBack =>{
        pool.query(`SELECT * FROM registration`,[],(error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results)
        })
    },
    getUserByUserId : (id, callBack) =>{
        pool.query(`SELECT * FROM registration WHERE id= ?`,[id],(error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results[0])
        })
    },
    updateUser: (data,callBack) => {
        console.log('data-----',data);
        pool.query(`UPDATE registration SET firstName =?,lastName=?,gender=?,email=?,number=? WHERE id = ?`, 
        [
            data.firstName, 
            data.lastName, 
            data.gender, 
            data.email, 
            data.number,
            data.id
        ],(error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results);
        });
    },
    deleteUser : (data, callBack) =>{
        pool.query(`DELETE FROM registration WHERE id= ?`,[data.id],(error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results[0])
        })
    },
    getUserByUserEmail : (email, callBack) =>{
        console.log('email--',email)
        pool.query(`SELECT * FROM registration WHERE email= ?`,[email],(error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results[0])
        })
    } 
}