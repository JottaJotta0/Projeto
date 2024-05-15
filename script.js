const usuarioCorreto = "JottaJotta"
const emailCorreto = "jottabatata@gmail.com"
const senhaCorreta = "joao123456"

function clicar(){
    let usuario = document.getElementById('txtusuario').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    
    let msgErroUsuario = document.getElementById('msgErroUsuario')
    let msgErroEmail = document.getElementById('msgErroEmail')
    let msgErroSenha = document.getElementById('msgErroSenha')

    //USUÁRIO
    if (usuario === ''){
        msgErroUsuario.textContent = 'Por favor, insira seu Usuário.'
    } else if (usuario != usuarioCorreto) {
        msgErroUsuario.textContent = 'Usuário incorreto, tente novamente.'
    } else {
        msgErroUsuario.textContent = ''
    }

    //EMAIL
    if (email === ''){
        msgErroEmail.textContent = 'Por favor, insira seu Email'
    } else if (email != emailCorreto){
        msgErroEmail.textContent = 'Email incorreto, tente novamente.'
    } else {
        msgErroEmail.textContent = ''
    }

    //SENHA
    if (senha === ''){
        msgErroSenha.textContent = 'Por favor, insira sua Senha'
    } else if (senha != senhaCorreta) {
        msgErroSenha.textContent = 'Senha incorreta, tente novamente'
    } else {
        msgErroSenha.textContent = ''
    }

    if (usuario == usuarioCorreto && email == emailCorreto && senha == senhaCorreta){
        const modal = document.getElementById('janela-modal')
        modal.classList.add('abrir')

        modal.addEventListener('click', (e) => {
            if (e.target.id == 'fechar' || e.target.id == 'janela-modal'){
                modal.classList.remove('abrir')
            }
        })
    }
    
}