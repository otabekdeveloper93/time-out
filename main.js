let input = document.querySelector('.number');
let btn = document.querySelector('.btn');
let box = document.querySelector('.box');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (input.value != '') {
        let span = document.createElement('span');
        span.className = "span";
        span.append(document.createTextNode(input.value));
        box.appendChild(span);
    
        let n = input.value
    
        setInterval(() => {
          setTimeout(() => {
            n--;
            span.textContent = n;
            if (n === 0) {
              span.style.display = "none";
            }
          })
        }, 1000);
        input.value = "";
      }
})