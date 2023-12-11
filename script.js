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
  document.addEventListener('DOMContentLoaded', function () {
    createGarlicBulbs();
  });

  function createGarlicBulbs() {
    const numGarlicBulbsPerSide = 6;
    const middleGarlicBulbIndex = Math.floor(numGarlicBulbsPerSide / 2);
    const totalGarlicBulbs = numGarlicBulbsPerSide * 2 - 1;

    for (let i = 0; i < totalGarlicBulbs; i++) {
      if (i !== middleGarlicBulbIndex) {
        const garlicBulb = document.createElement('div');
        garlicBulb.className = 'garlic-bulb ' + (i < middleGarlicBulbIndex ? 'left' : 'right');
        document.body.appendChild(garlicBulb);
      }
    }
  }