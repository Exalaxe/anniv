const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
let isTabActive = true;


function createHeart(x, y, size, color) {
    return {
        x,
        y,
        size,
        color,
        alpha: 1,
        speedY: Math.random() * 2 + 0.5,
    };
}

function drawHeart(x, y, size, color, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();


    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    ctx.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);

    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

function updateHearts() {
    for (let i = 0; i < hearts.length; i++) {
        const heart = hearts[i];
        heart.y -= heart.speedY;
        heart.alpha -= 0.0005;
        if (heart.alpha <= 0 || heart.y + heart.size < 0) {
            hearts.splice(i, 1);
            i--;
        }
    }
}

function renderHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const heart of hearts) {
        drawHeart(heart.x, heart.y, heart.size, heart.color, heart.alpha);
    }
}

function addHeart() {
    const x = Math.random() * canvas.width;
    const y = canvas.height + 20;
    const size = Math.random() * 20 + 20;
    const color = `hsl(${Math.random() * 360}, 80%, 70%)`;
    hearts.push(createHeart(x, y, size, color));
}

function loop() {
    updateHearts();
    renderHearts();
    requestAnimationFrame(loop);
}

setInterval(addHeart, 150);
loop();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
document.addEventListener('visibilitychange', () => {
    isTabActive = document.visibilityState === 'visible';
});