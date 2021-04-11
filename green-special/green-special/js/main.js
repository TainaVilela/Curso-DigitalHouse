/**!

console.log("Hello word");

let nome = prompt (' Digite seu nome no campo abaixo')
console.log('Nome: ' + nome);

let maiorDeIdade = confirm('Você confirma ter mais de 18 anos?');

if(!maiorDeIdade){
    window.location.reload()
}
**/

let logo = document.querySelector('.logo');

logo.addEventListener('mouseover', ()=>{
    logo.style.transform = 'rotate(180deg)';
});

logo.onmouseout = () => {
    logo.style.transform = 'rotate(0)';
};

const header = document.querySelector('#mainNav'); 

window.onscroll = () => { //ACESSANDO O EVENTO DE SCROLL DO WINDOW
  if (window.pageYOffset == 0) { //VERIFICANDO SE O TOPO DA JANELA ESTÁ ALINHADO COM O TOPO DA PÁGINA
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'; // ADICIONANDO UMA COR TRANSPARENTE DE FUNDO NO HEADER
  } else {  //QUANDO DER SCROLL PARA BAIXO
    header.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // MUDANDO A COR DE FUNDO PARA BRANCO SEM TRANSPARÊNCIA
  }
  
};

const imagensDosCards = document.querySelectorAll('.ser-icon .img-fluid'); // BUSCANDO TODAS AS IMAGENS

imagensDosCards.forEach((imagem) => { // CRIANDO UM LOOP PARA ADICIONAR O EVENTO POR CADA IMAGEM DO ARRAY

  imagem.addEventListener('mouseover', function(){ // ADICIONANDO O EVENTO DE MOUSEOVER
    this.classList.toggle('grow'); // ADICIONANDO A CLASSE "grow" NA IMAGEM
  });

  imagem.addEventListener('mouseout', function(){ //ADICIONANDO O EVENTO DE MOUSEOUT
    this.classList.toggle('grow'); // REMOVENDO A CLASSE "grow" DA IMAGEM
  });

});

const formFields = document.querySelectorAll('#contactForm .form-control'); // Buscando todos os inputs de dentro do form

formFields.forEach(function (input) { // Passando por cada input do form
  input.addEventListener('focus', function () {
    this.classList.add('focus'); // Adicionando a classe focus quando o input receber foco
  });

  input.addEventListener('blur', function () {
    this.classList.remove('focus'); // Removendo a classe focus quando o input receber blur
  })
});

const form = document.querySelector('#contactForm'); // Capturando o form

// Buscando cada input
const nameInput = formFields[0];
const emailInput = formFields[1];
const dateInput = formFields[2];
const timeInput = formFields[3];
const messageInput = formFields[4];

// Forma alternativa utilizando desestruturação
// const [ nameInput, emailInput, dateInput, timeInput, messageInput ] = formFields;

const invalidFields = document.querySelectorAll('#contactForm .help-block.text-danger'); // Capturando todos os p para mensagem de erro

form.onsubmit = function (event) { // Capturando o evento submit do form
  const errors = []; // Criando uma variável para guardar todos os erros

  if (!nameInput.value.trim()) { // Verificando se o campo está vazio
    invalidFields[0].textContent = "Nome obrigatório"; // Se sim colocaremos uma mensagem de erro
    errors.push(invalidFields[0].textContent) // E inserimos ele no array errors
  } else {
    invalidFields[0].textContent = ""; // Se não, deixamos o campo de erro vazio
  }

  if (!emailInput.value.trim()) {
    invalidFields[1].textContent = "Email obrigatório";
    errors.push(invalidFields[1].textContent)
  } else {
    invalidFields[1].textContent = "";
  }

  if (!dateInput.value.trim()) {
    invalidFields[2].textContent = "Data obrigatória";
    errors.push(invalidFields[2].textContent)
  } else {
    invalidFields[2].textContent = "";
  }

  if (!timeInput.value.trim()) {
    invalidFields[3].textContent = "Hora obrigatória";
    errors.push(invalidFields[3].textContent)
  } else {
    invalidFields[3].textContent = "";
  }

  if (!messageInput.value.trim()) {
    invalidFields[4].textContent = "Mensagem obrigatória";
    errors.push(invalidFields[4].textContent)
  } else {
    invalidFields[4].textContent = "";
  }};
