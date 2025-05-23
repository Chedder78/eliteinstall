import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';
renderer.xr.enabled = true;
document.body.appendChild(ARButton.createButton(renderer));
// Magnetic Cursor
document.querySelectorAll('.magnetic-button').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--tx', `${(x - rect.width/2) * 0.3}px`);
        button.style.setProperty('--ty', `${(y - rect.height/2) * 0.3}px`);
    });
});

// Parallax Depth
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.querySelectorAll('.parallax-layer').forEach(layer => {
        const depth = parseFloat(layer.dataset.depth);
        layer.style.transform = `translate(${x * depth * 100}px, ${y * depth * 100}px)`;
    });
});
