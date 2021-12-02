// require the dependencies from package.json
const passwordHash = require('password-hash');
const mySql = require('mysql');
const fs = require('fs');

//declare con to know if there is connection or not 
let con = null;
// connect function 
function connect(){
    return new Promise((resolve,reject)=>{
        if(con){
            if(con .state ==='disconnected'){
                con.connect(error =>{
                    if(error){
                        reject(error)
                    }else{
                        resolve()
                    };
                });
            }else{
                resolve()
            }
        }else{
            con = mySql.createConnection({
                multipleStatements: true,
                host: 'localhost',
                port: 3306,
                user: 'root',
                password: '',
                database: 'quiz'
            });
            con.connect(error => {
                if (error) {
                    reject(error)
                } else {
                    resolve()
                };
            });
        };
    });
};
//creat the Query function
function runQuery(queryString){
    return new Promise((resolve,reject)=>{
        connect().then(()=>{
            con.query(queryString,(error,result,fields)=>{
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            });
        }).catch((error)=>{
            reject(error)
        });
    })
}
// ===================================================//
// get all subjects because i need it in registerPage
function getAllSubjects(){
    return new Promise((resolve,reject)=>{
        runQuery('SELECT * FROM subjekts ').then((results)=>{
            if(results.length>0){
              resolve(results)  
            }else{
                reject(error)
            }
        }).catch((error)=>{
            reject(error)
        })
    })
};

module.exports = {
    getAllSubjects 
}





