const hamburger = document.getElementById('hamburger');
const nav2 = document.querySelector('.nav2');

// nav2.style.display = 'none';

hamburger.addEventListener('click', () => {
    if (nav2.style.display === 'none') {
        nav2.style.display = 'block';
    } else {
        nav2.style.display = 'none';
    }
});