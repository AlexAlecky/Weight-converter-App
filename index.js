const inputEl = document.getElementById('input');
const errorEl = document.getElementById('error');
const resultEl = document.getElementById('result');

let erroTime
let resultTime

function updateResults() {
  if(inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerHTML = 'Please Enter a valid number'
    setTimeout(()=>{
      clearTimeout = errorTime
      errorEl.innerHTML = '';
      inputEl.value = '';
    }, 2000)
  } else {
    resultEl.innerHTML = +(inputEl.value / 2.2).toFixed(2);
    setTimeout(()=>{
      clearTimeout = resultTime
      resultEl.innerHTML = '';
      inputEl.value = '';
    }, 2000)
  }
}


inputEl.addEventListener('input', updateResults);