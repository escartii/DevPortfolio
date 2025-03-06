// Crear el cielo estrellado
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
    // Crear estrellas normales
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Tamaño aleatorio para las estrellas
        const size = Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Posición aleatoria
        const posX = Math.random() * containerWidth;
        const posY = Math.random() * containerHeight;
        star.style.left = `${posX}px`;
        star.style.top = `${posY}px`;
        
        // Algunas estrellas tendrán efecto de brillo
        if (Math.random() > 0.7) {
            star.classList.add('shine');
        } else if (Math.random() > 0.85) {
            star.classList.add('shine-fast');
        }
        
        starsContainer.appendChild(star);
    }
    
    // Crear estrellas fugaces
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createShootingStar();
        }, i * 7000); // Crear una estrella fugaz cada 7 segundos
    }
}

function createShootingStar() {
    const starsContainer = document.getElementById('stars-container');
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
    const star = document.createElement('div');
    star.classList.add('star', 'shooting');
    
    // Posición inicial aleatoria en la parte superior
    const posX = Math.random() * containerWidth * 0.8;
    const posY = Math.random() * containerHeight * 0.3;
    star.style.left = `${posX}px`;
    star.style.top = `${posY}px`;
    
    // Distancia que viajará la estrella fugaz
    const travelDistance = Math.random() * 300 + 200;
    star.style.setProperty('--travel-distance', `${travelDistance}px`);
    
    starsContainer.appendChild(star);
    
    // Eliminar la estrella fugaz después de la animación
    setTimeout(() => {
        star.remove();
        // Crear una nueva estrella fugaz
        createShootingStar();
    }, 5000);
}

// Inicializar el cielo estrellado
window.addEventListener('load', createStars);

// Create floating code elements
const codeElements = [
    '<div>', '</div>', '</>',
    'function()', '{}', '()',
    '=>', 'const', 'let',
    '<if>', '</if>', '||',
    '&&', 'for()', 'while()',
    'import', 'export', 'return',
    'async', 'await', '[]',
    'class', 'this', 'new',
    'try{}', 'catch()', '.then()'
];

function createCodeElement() {
    const element = document.createElement('div');
    element.classList.add('code-element');
    
    // Random code text
    const randomCode = codeElements[Math.floor(Math.random() * codeElements.length)];
    element.textContent = randomCode;
    
    // Random position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    
    // Random movement
    const moveX = Math.random() * window.innerWidth - startX;
    const moveY = Math.random() * window.innerHeight - startY;
    
    // Random rotation
    const rotation = Math.random() * 360;
    
    // Random size
    const size = Math.floor(Math.random() * 30) + 15;
    element.style.fontSize = size + 'px';
    
    // Set custom properties for animation
    element.style.setProperty('--x', moveX + 'px');
    element.style.setProperty('--y', moveY + 'px');
    element.style.setProperty('--rotate', rotation + 'deg');
    
    // Position the element
    element.style.left = startX + 'px';
    element.style.top = startY + 'px';
    
    // Add to body
    document.body.appendChild(element);
    
    // Remove after animation
    setTimeout(() => {
        element.remove();
        // Create a new one
        if (document.visibilityState === 'visible') {
            createCodeElement();
        }
    }, 20000);
}

// Create initial code elements
for (let i = 0; i < 15; i++) {
    setTimeout(() => {
        createCodeElement();
    }, i * 1000);
}