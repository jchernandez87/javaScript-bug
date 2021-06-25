const contain = document.querySelector('#container');

const ten = 10;

function generator() {
    for(let i = 0; i > ten; i++) {
        const sec = document.createElement('span');
        sec.classList.add('text');
        sec.textContent = i;
        contain.appendChild(sec);
    }
}

generator();