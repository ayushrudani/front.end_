let colors = ['#318fb5', '#b52b65', '#2ecc71', '#f1c40f', '#e67e22', '#c0392b', '#9b59b6'];

setInterval(() => {
    let i = document.createElement('i');
    i.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
    i.style.background = colors[Math.floor(Math.random() * colors.length)]
    document.querySelector('.rainBg').appendChild(i);
}, 500);

setInterval(() => {
    document.querySelector('.rainBg').firstChild.remove();
}, 6000);