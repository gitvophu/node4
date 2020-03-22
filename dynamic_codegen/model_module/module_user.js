//knex kết nối
const {knex} = require('../db_module/knex_connection');
const {APP_KEY} = require('../constant/app_const');
const jwt = require('jsonwebtoken');

const User = function(){
    this.getUserByFLPNo = function(FLPNo = ''){
        return new Promise(function(resolve,reject){
            knex.select().from('users').where("FLPNo","=",FLPNo).first().then((user)=>{
                resolve(user);
            });
        })
    }
    this.generateToken = function(data){
        const PRIVATE_KEY = APP_KEY;
        return new Promise((resolve,reject)=>{
            jwt.sign(data,PRIVATE_KEY,{algorithm:"HS256",expiresIn:30*60},function(err,token){
                if(err) reject(err);
                resolve(token);
            })
        })
    }
    this.verifyToken = function(token){
        const PRIVATE_KEY = APP_KEY;
        return new Promise((resolve,reject)=>{
            jwt.verify(token,PRIVATE_KEY,function(err,data){
                if(err) {
                    return reject(err)
                }
                return resolve(data);
            })
        });
    }
    

}
module.exports.user_obj = new User();