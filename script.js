const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#d35400', '#27ae60', '#e67e22', '#c0392b'];
const shapes = ['triangle', 'square', 'circle', 'rectangle', 'diamond'];

function changeColor() {
    const shape = document.getElementById('shape');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    shape.style.backgroundColor = randomColor;
}

function changeShape() {
    const shape = document.getElementById('shape');
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shape.className = 'shape ' + randomShape;
}