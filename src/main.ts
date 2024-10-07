const inputNome = document.querySelector<HTMLInputElement>('#inputNome');
const inputCPF = document.querySelector<HTMLInputElement>('#inputCPF');
const inputTelefone = document.querySelector<HTMLInputElement>('#inputTelefone');
const inputSenha = document.querySelector<HTMLInputElement>('#inputSenha');

const labelNome = document.querySelector<HTMLLabelElement>('#labelNome');
const labelCPF = document.querySelector<HTMLLabelElement>('#labelCPF');
const labelTelefone = document.querySelector<HTMLLabelElement>('#labelTelefone');
const labelSenha = document.querySelector<HTMLLabelElement>('#labelSenha');

inputNome?.addEventListener('blur', validarNome);

inputCPF?.addEventListener('input', formatarCPF);
inputCPF?.addEventListener('blur', validarCPF);

inputTelefone?.addEventListener('input', formatarTelefone);
inputTelefone?.addEventListener('blur', validarTelefone);

inputSenha?.addEventListener('blur', validarSenha);

function validarNome() {

    const nome = inputNome?.value;

    if(!nome || /[0-9]/.test(nome)) {
        labelNome!.innerHTML = 'Digite um nome valido*';
        labelNome!.style.color = 'red';
    }else{
        labelNome!.innerHTML = 'Nome<span>*</span>';
        labelNome!.style.color = 'black';
    }
}

function formatarCPF() {
    if (!inputCPF) {
        console.error("inputCPF é null");
        return;
    }

    let cpf = inputCPF.value.replace(/\D/g, '');

    if (cpf.length > 3) {
        cpf = cpf.slice(0, 3) + '.' + cpf.slice(3);
    }

    if (cpf.length > 7) {
        cpf = cpf.slice(0, 7) + '.' + cpf.slice(7);
    }

    if (cpf.length > 11) {
        cpf = cpf.slice(0, 11) + '-' + cpf.slice(11);
    }

    if (cpf.length > 14) {
        cpf = cpf.slice(0, 14);
    }


    inputCPF.value = cpf;
}

function validarCPF() {
    if(inputCPF && inputCPF.value.length < 14) {
        labelCPF!.innerHTML = 'Digite um CPF valido*';
        labelCPF!.style.color = 'red'
    }else {
        labelCPF!.innerHTML = 'CPF<span>*</span>';
        labelCPF!.style.color = 'black'
    }
}

function formatarTelefone() {
    if (!inputTelefone) {
        console.error("inputTelefone é null");
        return;
    }

    let telefone = inputTelefone.value.replace(/\D/g, '');

    if (telefone.length > 0) {
        telefone = '(' + telefone;
    }

    if (telefone.length > 3) {
        telefone = telefone.slice(0, 3) + ') ' + telefone.slice(3);
    }

    if (telefone.length > 10) {
        telefone = telefone.slice(0, 10) + '-' + telefone.slice(10);
    }

    if (telefone.length > 15) {
        telefone = telefone.slice(0, 15);
    }


    inputTelefone.value = telefone;
}

function validarTelefone() {
    if(inputTelefone && inputTelefone.value.length < 15) {
        labelTelefone!.innerHTML = 'Digite um telefone valido*';
        labelTelefone!.style.color = 'red'
    }else {
        labelTelefone!.innerHTML = 'Telefone<span>*</span>';
        labelTelefone!.style.color = 'black'
    }
}

function validarSenha() {
    const senha = inputSenha?.value;
    const regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/~`\\|-]).+$/;

    if (!senha) {
        labelSenha!.innerHTML = 'Digite uma senha valida*';
        labelSenha!.style.color = 'red';
        return;
    }

    if(!senha || regex.test(senha)) {
        labelSenha!.innerHTML = 'Senha<span>*</span>';
        labelSenha!.style.color = 'black';
    }else {
        labelSenha!.innerHTML = 'A senha deve conter pelo menos um número, uma letra maiúscula e um caractere especial*';
        labelSenha!.style.color = 'red';
        return;   
    }

    if(senha.length < 8) {
        labelSenha!.innerHTML = 'A senha deve conter pelo menos 8 caracteres*';
        labelSenha!.style.color = 'red';  
    }else {
        labelSenha!.innerHTML = 'Senha<span>*</span>';
        labelSenha!.style.color = 'black';
    }
}
