import { base } from "../database/connect.js"

class userRepositories{ 
    criar(line) {
        const sql = 'INSERT INTO accounts (nome, gmail, senha) VALUES (?, ?, ?)';
        return base(sql, line, 'Failed Create!');
    }
       
    ler()       {
        const sql = 'SELECT * FROM users'
        return base(sql, 'Failed Read!')
    }
    lerPorId(id)  {
        const sql = 'SELECT * FROM users WHERE ID = ?'
        return base(sql, id, 'Failed Ready By ID!')
    }
    atualizar(line,id) {
        const sql = 'UPDATE TABLE users SET ? WHERE ID = ?'
        return base(sql, [line, id], 'Failed Update!')
    }
    deletar(id)   {
        const sql = 'DELETE FROM users WHERE ID = ?'
        return base(sql, id, 'Failed Delete!')
    }    
    acharPorEmail(email){
        const sql = 'SELECT * FROM accounts WHERE gmail = ?'
        return base(sql, email)
    }
}

export default new userRepositories