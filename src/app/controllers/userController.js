import userRepository from "../repository/userRepository.js"

class userController{
    async create(req, res) {
        try {
            const nome = req.body.nome;
            const email = req.body.email;
            const senha = req.body.senha;
            const line = [nome, email, senha];
    
            const resAwaiting = await userRepository.criar(line);
    
            // Se o banco retornar um resultado
            res.json(resAwaiting);
        } catch (error) {
            console.error("Erro ao criar o usuário:", error);
            res.status(500).json({ message: 'Erro ao criar o usuário', error: error.message });
        }

    }
    
    async read    (req, res){
        const resAwaiting = await userRepository.ler
        res.json(resAwaiting)
    }
    async update  (req, res){
        const line = req.body
        const id = req.params.id
        const resAwaiting = await userRepository.atualizar(line, id)
        res.json(resAwaiting)
    }
    async delete  (req, res){
        const id = req.params.id
        const resAwaiting = await userRepository.deletar(id)
        res.json(resAwaiting)
    }
    async readByID(req, res){
        const id = req.params.id
        const resAwaiting = await userRepository.lerPorId(id)
        res.json(resAwaiting)
    }
    async FindByEmail(req, res) {
        try {
            const { email, senha } = req.body;
    
            if (!email || !senha) {
                return res.status(403).json({ message: 'E-mail e senha são obrigatórios.' });
            }
    
            const emailOjt = await userRepository.acharPorEmail(email);
    
            if (!emailOjt || emailOjt.length === 0) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }
    
            if (emailOjt[0].senha === senha) {
                return res.status(201).json({ message: 'Senha Correta!' });
            } 
            
            if (emailOjt[0].senha !== senha) {
                return res.status(500).json({ message: 'Senha Incorreta!' });
            }
        } catch (error) {
            console.error('Erro ao buscar usuário por e-mail:', error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
    
}
export default new userController