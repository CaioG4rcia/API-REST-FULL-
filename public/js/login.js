class styleVefif{
    styleCorrect(){
        const textAlert = document.querySelector('.message')
        textAlert.innerHTML = 'Bem vindo de volta!'
        const alert = document.querySelector('.alert')
        alert.style.display = 'flex'

        setTimeout(() => {
            alert.style.display = 'none'
            location.href = '../html/index.html'
        }, 2300);
    }
    styleIncorrect(){ 
        const alert = document.querySelector('.alert')
        alert.style.display = 'flex'
        const textAlert = document.querySelector('.message')
        textAlert.innerHTML = 'Senha Incorreta!'

        setTimeout(() => {
            alert.style.display = 'none'
        }, 2300);
    }
    styleUnknowm(){
        const alert = document.querySelector('.alert')
        alert.style.display = 'flex'
        const textAlert = document.querySelector('.message')
        textAlert.innerHTML = 'Usuário Não Encontrado!'

        setTimeout(() => {
            alert.style.display = 'none'
        }, 2300);
    }
}
document.addEventListener('submit', async(event)=>{
    event.preventDefault()

    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value

    console.log('Dados enviados:', { email, password }); // Verificar os dados

    try {
        const res = await fetch('http://localhost:4148/users/login',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email: email,
                senha: password
            })
        })
        console.log('Status retornado:', res.status);

        if (res.status === 404) {
            const StyleV = new styleVefif()
            StyleV.styleUnknowm()
        
        } else if (res.status === 201) {
            const StyleV = new styleVefif()
            StyleV.styleCorrect()

        } else if (res.status === 500) {
            const StyleV = new styleVefif()
            StyleV.styleIncorrect()       

        } else {
            console.error('Status inesperado:', res.status);
        }
    } catch (error) {
        console.log(error)
    }
})