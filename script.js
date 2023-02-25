Let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    Let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
});