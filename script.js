import { noisyLinesBackground } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

const bg = noisyLinesBackground({
  el: document.getElementById('app'),
  colors: [0xd69be4, 0xffa07a, 0xffffff], // Soft purple, orange, and white
  minStroke: 0.5,
  maxStroke: 2,
  timeCoef: 0.0002,
  coordScale: 2,
  displacementScale: 0.02
})


const backgroundContainer = document.createElement('background');
backgroundContainer.id = 'background';


document.body.appendChild(backgroundContainer);