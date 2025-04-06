class styleVefif{
    styleError(){
        const passwordStyle = document.querySelector('.password')
        const confirmpasswordStyle = document.querySelector('.ConfirmPassword')
        const textAlert = document.querySelector('.message')
        textAlert.innerHTML = 'As senhas não coincidem!'
        const alert = document.querySelector('.alert')
        alert.style.display = 'flex'

        passwordStyle.style.boxShadow ='0px 0px 0px 2px red inset'
        passwordStyle.style.color ='red'
        confirmpasswordStyle.style.boxShadow ='0px 0px 0px 2px red inset'
        confirmpasswordStyle.style.color ='red'

        setTimeout(() => {
            alert.style.display = 'none'
        }, 1500);
    }
    styleSucess(){ 
        const passwordStyle = document.querySelector('.password')
        const confirmpasswordStyle = document.querySelector('.ConfirmPassword')
        const alert = document.querySelector('.alert')
        alert.style.display = 'flex'
        const textAlert = document.querySelector('.message')
        textAlert.innerHTML = 'Conta Criada com Sucesso!'
        passwordStyle.style.boxShadow =''
        passwordStyle.style.color =''
        confirmpasswordStyle.style.boxShadow =''
        confirmpasswordStyle.style.color =''
    }
}
document.addEventListener('submit', async(event)=>{
    event.preventDefault()

    const name = document.querySelector('.name').value
    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value.trim()
    const confirmpassword = document.querySelector('.ConfirmPassword').value.trim()


    if(password != confirmpassword){
        const StyleV = new styleVefif()
        StyleV.styleError() 
        return
    }
    try {
        const res = await fetch('http://localhost:4148/users',({
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                nome: name,
                email: email,
                senha: password,

            })
        }))
        
        if(res.ok){
            const StyleV = new styleVefif()
            StyleV.styleSucess()
            setTimeout(() => {
                location.href = '../html/login.html'
            }, 1000);
        }
        else{
            alert('Erro ao cadastrar Usuário')
        }
        
    } catch (error) {
        console.log('Erro na requisição', error)
    }
})