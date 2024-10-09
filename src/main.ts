const toggleContainer = document.querySelector('.toggle-container') as HTMLElement;
const toggleButton = document.getElementById('buttonToggle') as HTMLElement;
const lampada = document.getElementById('lampada') as HTMLImageElement;
const limiteLampada = document.getElementById('limiteLampada') as HTMLSpanElement;
const body = document.querySelector<HTMLBodyElement>('body');
let isOn: boolean = false;
const limiteClicks: number = Math.floor(Math.random() * 8);
let contador: number = 0;
let limiteLampadaTexto: number = limiteClicks;

limiteLampada.textContent = `A lampada pode ser ativada ${limiteLampadaTexto} vezes`;

toggleContainer.addEventListener('click', () => {
  isOn = !isOn;
  
  if (isOn && body) {
      toggleButton.style.left = '33px';
      toggleContainer.style.backgroundColor = '#2196F3';
      contador++; 
      limiteLampadaTexto--;
      limiteLampada.textContent = `A lampada pode ser ativada ${limiteLampadaTexto} vezes`;
      body.style.backgroundColor = '#fffaca';

      if(limiteLampadaTexto < 0) {
        limiteLampada.textContent = `A lampada está quebrada!`;
      }
    } else {
        toggleButton.style.left = '5px';
        toggleContainer.style.backgroundColor = '#CCC';
        body!.style.backgroundColor = '#1a1a1a'; 
    }
    
    if(lampada && (contador > limiteClicks) && body) {
        lampada.src = './assets/img/lampada-quebrada.png';
        body.style.backgroundColor = '#1a1a1a';
    } else if(lampada && isOn) {
        lampada.src = './assets/img/lampada-ligada.png';
    }else {
        lampada.src = './assets/img/lampada-desligada.png';
    }    
});

