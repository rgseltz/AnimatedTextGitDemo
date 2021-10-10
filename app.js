function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// const h1 = document.querySelector('h1');

const letters = document.querySelectorAll('.letter');

const intervalId = setInterval(function() {
    for (ltr of letters) {
        ltr.style.color = randomRGB();
    };
},1000);

//code breaks -- works when i redid it on another file... why??


// setInterval(function() {
//     h1.style.color = randomRGB();
// }, 1000);

