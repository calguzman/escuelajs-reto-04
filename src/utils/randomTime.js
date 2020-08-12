
function randomTime(min=1000,max=8000){
  return Math.floor(Math.random()  * (max  - min +  1)+ min);
}

module.exports = randomTime;
