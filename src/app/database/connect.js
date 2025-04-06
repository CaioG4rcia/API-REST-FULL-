import mysql from 'mysql'

const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3306',
    password:'',
    database:'users'
})

export const base = (sql, val = '', erroMessage)=>{
    return new Promise ((resolve, reject)=>{
        conexao.query(sql, val, (error, result)=>{
            if(error){
                return reject(erroMessage)
            }
            else{
                return resolve(result)
            }
        })
    })
}
export default conexao