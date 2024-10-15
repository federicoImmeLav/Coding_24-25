const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];
let animationStarted = false;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

class Firework {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.alpha = 1;
        this.velocityX = random(-2, 2);
        this.velocityY = random(-2, 2);
        this.gravity = 0.02;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.alpha -= 0.01;
        this.velocityY += this.gravity;
    }
}

function createFirework() {
    const x = random(100, canvas.width - 100);
    const y = random(100, canvas.height - 100);
    const radius = random(3, 5);
    // Usa colori più vivaci
    const color = `hsl(${Math.random() * 360}, 100%, ${random(50, 100)}%)`;

    // Aumenta il numero di fuochi d'artificio
    for (let i = 0; i < 50; i++) {
        fireworks.push(new Firework(x, y, radius, color));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw();

        if (firework.alpha <= 0) {
            fireworks.splice(index, 1);
        }
    });

    // Aumenta la probabilità di generare fuochi d'artificio
    if (Math.random() < 0.1) {
        createFirework();
    }

    if (animationStarted) {
        requestAnimationFrame(animate);
    }
}

// Avvia l'animazione dei fuochi d'artificio e riproduci l'audio quando si preme il bottone
document.getElementById('celebrate-button').addEventListener('click', function() {
    if (!animationStarted) {
        animationStarted = true;
        animate();
    }
    const audio = document.getElementById('birthday-audio');
    audio.play();
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
