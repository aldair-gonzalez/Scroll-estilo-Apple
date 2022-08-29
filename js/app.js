const image = document.getElementById('Image');
const container = document.getElementById('Container');
const img = document.getElementById('Img');

document.addEventListener('scroll', () => {
    let pixel = window.scrollY;
    image.style.transform = `translateY(-${pixel / 10}px)`;
    
    pixel >= 0 ? img.setAttribute('src', `./assets/img/${1}.jpg`) : null;
    pixel >= 800 ? img.setAttribute('src', `./assets/img/${2}.jpg`) : null;
    pixel >= 1600 ? img.setAttribute('src', `./assets/img/${3}.jpg`) : null;
    pixel >= 2400 ? img.setAttribute('src', `./assets/img/${4}.jpg`) : null;
    pixel >= 3200 ? img.setAttribute('src', `./assets/img/${5}.jpg`) : null;
    
    pixel <= 4000 ? container.style.opacity = 1 : null;
    pixel > 4000 ? container.style.opacity = 0 : null;
    pixel <= 4000 ? container.style.transform = 'translateY(0)' : null;
    pixel > 4000 ? container.style.transform = 'translateY(-100%)': null;
    
    pixel >= 2000 ? container.style.transform = 'rotate(90deg) scale(.5)' : null;
    
});