
//  EMAIL VALIDATION //

function confirmEmail() {
    
    var email = document.getElementById("email").value
    var confemail = document.getElementById("confemail").value
    
    if(email != confemail) {
        alert('Verifique se o endereço de e-mail está correto');
        
    }
   
}

// PASSWORD VALIDATION

function confirmPassword() {
    
    var email = document.getElementById("password").value
    var confemail = document.getElementById("confpassword").value
    
    if(email != confemail) {
        alert('Verifique se repetiu a senha corretamente');
        
    }
   
}

// TELEFONE FORMAT MASK //
const tel = document.getElementById('tel') // Seletor do campo de telefone

tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
}


