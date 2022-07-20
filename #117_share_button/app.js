const btnEl = document.querySelector('.btn');

const toggleOptions = () => {
    const wrapperEl = document.querySelector('.wrapper');
    const iconEl = btnEl.querySelector('i');
    wrapperEl.classList.toggle('active');
    if (iconEl.classList.contains('fa-share-nodes')) {
        iconEl.classList.replace('fa-share-nodes', 'fa-xmark')
    } else {
        iconEl.classList.replace('fa-xmark', 'fa-share-nodes')
    }
}
btnEl.addEventListener('click', toggleOptions);