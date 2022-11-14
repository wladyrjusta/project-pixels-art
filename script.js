//Adicionando à página paltea de 4 cores distintas
const createColorPalette = () => {
const paletteConteiner = document.getElementById('color-palette');
for (let index = 1; index < 5; index += 1) {
   const colorPalette = document.createElement('div');
   paletteConteiner.appendChild(colorPalette);
   colorPalette.className = 'color';  
   colorPalette.id = `color-${index}`
 }
};
createColorPalette();

const setFirstColorsOnPalettes = () => {
const palette1 = document.getElementById('color-1');
   palette1.style.backgroundColor = 'black';
   palette1.classList.add('selected');
   
const palette2 = document.getElementById('color-2');
   palette2.style.backgroundColor = '#FF0000';

const palette3 = document.getElementById('color-3');
   palette3.style.backgroundColor = '#00FF00';
   
const palette4 = document.getElementById('color-4');
   palette4.style.backgroundColor = '#0000FF';
};
setFirstColorsOnPalettes();

const createButton = () => {
const buttonConteiner = document.querySelector('#button-conteiner');
const button = document.createElement('button');
buttonConteiner.appendChild(button);
button.id = 'button-random-color';
button.className = 'btn btn-primary btn-lg';
button.innerText = 'Cores aleatórias';
};
createButton();

const generateColor = () => {
   const code = '0123456789ABCDEF';
   let color = '#'
   for (let index = 0; index < 6; index += 1) {
      color += code.charAt(Math.floor(Math.random() * code.length));
   }
   return color;
};
generateColor();

window.onload = () => {
const button = document.getElementById('button-random-color');
button.addEventListener('click', () => {
   for (let index = 2; index < 5; index += 1) {
      let divs = document.getElementById(`color-${index}`);
      divs.style.backgroundColor = generateColor();
   }
   const savePaletteColor = () => {
      let listColors = document.getElementsByClassName('color');
      let recievedColors = [];
      for (let index = 0; index < listColors.length; index += 1) {
         recievedColors.push(listColors[index].style.backgroundColor);
      }
      localStorage.setItem('colorPalette',JSON.stringify(recievedColors))
   }
   savePaletteColor();
   })
   let palettes = document.querySelectorAll('.color')
   let savedColors = JSON.parse(localStorage.getItem('colorPalette'))
   for (let index in savedColors) {
      palettes[index].style.backgroundColor = savedColors[index]
   }
};
//Requisito 5
 const createPixelsBoxes = (numPixels) => {
   const pixelBoard = document.getElementById('pixel-board');
   for (index = 1; index <= numPixels; index += 1) {
      let pixel = document.createElement('div');
      pixelBoard.appendChild(pixel);
      pixel.className = 'pixel';
   }
 };
 createPixelsBoxes(25);

 
 const requisito9 = () => {
   const color1 = document.getElementById('color-1');
   const color2 = document.getElementById('color-2');
   const color3 = document.getElementById('color-3');
   const color4 = document.getElementById('color-4');
 const addRemoveClassName = (evento) => {
  const elementSelected = document.getElementsByClassName("selected")[0];
  elementSelected.classList.remove('selected');
   evento.target.classList.add('selected');
};
 
 color1.addEventListener('click', addRemoveClassName);
 color2.addEventListener('click', addRemoveClassName);
 color3.addEventListener('click', addRemoveClassName);
 color4.addEventListener('click', addRemoveClassName);
};
requisito9();

const requisito10 = () => {
   const inputColor = (evento) => {
      const inputSelectedColor = document.getElementsByClassName("selected")[0];
   let backgroundColor = inputSelectedColor.style.backgroundColor;
   evento.target.style.backgroundColor = backgroundColor;
   }
   let pixel = document.getElementsByClassName('pixel');
   for (let elements of pixel) {
      elements.addEventListener('click', inputColor);
   }
  

}
requisito10();







