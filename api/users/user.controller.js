const {
    create, 
    getUsers, 
    getUserByUserId, 
    deleteUser, 
    updateUser, 
    getUserByUserEmail
} = require('./user.service');
const {genSaltSync, hashSync, compareSync} = require('bcrypt');
const {sign} = require('jsonwebtoken')
const {} = require('../../auth/token_validation')
module.exports = {
    createUser: (req,res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body,(err,results)=>{
            if(err){ 
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message: 'Database connection error'
                }) 
            }
            return res.status(200).json({
                success:1,
                data: results
            })
        })
    },
    getUserByUserId: (req,res)=>{
        let id = req.params.id;
        getUserByUserId(id,(error,results)=>{
            if(error){
                console.log(error);
                return;
            }
            if(!results){
                return res.json({ 
                    success : 0, 
                    message : 'Record not found'
                })
            }
            return res.json({
                success : 1, 
                data : results
            })

        })
    },
    getUsers: (req,res)=>{
        getUsers((error,results)=>{
            if(error){
                console.log(error);
                return;
            }
            if(!results){
                return res.json({ 
                    success : 0, 
                    message : 'Record not found'
                })
            }
            return res.json({
                success : 1, 
                data : results
            })

        })
    },
    updateUser: (req,res) =>{
        const body = req.body;
        //const salt = genSaltSync(10);
        //body.password = hashSync(body.password, salt);
        updateUser(body,(err,results)=>{
            if(err){ 
                console.log(err);
                return res.status(500).json({
                    success : 0,
                    message : 'Error to update record'
                }) 
            }
            if(!results){
                return res.status(500).json({
                    success : 0,
                    message : 'Failed to update user'
                })
            }
            return res.status(200).json({
                success : 1,
                data : results
            })
        })
    },
    deleteUser: (req,res)=>{
        let id = req.body;
        deleteUser(id,(error,results)=>{
            if(error){
                console.log(error);
                return;
            }
            if(!results){
                return res.json({ 
                    success : 0, 
                    message : 'Record not found'
                })
            }
            return res.json({
                success : 1, 
                message : 'User deleted successfully'
            })

        })
    },
    login : (req,res) =>{
        const body=req.body;
        getUserByUserEmail(body.email,(err,results)=>{
            if(err){
                console.log(err);
            }
            if(!results){
                return res.json({
                    success :0,
                    message : "invalid email or password"
                })
            }
            //console.log(body.password, results.password);
            //return;
            const result = compareSync(body.password, results.password);
            if(result){
                results.password = undefined;
                const jsontoken = sign({result:results},'asdfg', {expiresIn: '1h'})
                return res.json({
                    success:1,
                    message: 'Login successful',
                    token: jsontoken
                });
            } else{
                return res.json({
                    success:0, 
                    message : 'invalid email or password'
                })
            }
        });

    }
}