const cep = document.getElementById('cep') as HTMLInputElement;
const logradouro = document.getElementById('logradouro') as HTMLInputElement;
const cidade = document.getElementById('cidade') as HTMLInputElement;
const estado = document.getElementById('estado') as HTMLInputElement;
const labelCep = document.getElementById('labelCep') as HTMLLabelElement;

cep.addEventListener('blur', () => {
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(resposta => resposta.json())
    .then(endereco => {
        logradouro.value = endereco.logradouro === undefined ? '' : endereco.logradouro;
        cidade.value = endereco.localidade === undefined ? '' : endereco.localidade;
        estado.value = endereco.uf === undefined ? '' : endereco.uf

        if(endereco.logradouro === undefined || endereco.localidade === undefined || endereco.uf === undefined) {
            labelCep.innerText = 'CEP Inválido';
            labelCep.style.color = 'red';
       
        }else{
            labelCep.innerText = 'CEP';
            labelCep.style.color = '#4e515a';
        }
    })
    .catch(erro => console.log(erro))
})



