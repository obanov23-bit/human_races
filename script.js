document.querySelectorAll('.image-container').forEach(container => {
    const overlay = container.querySelector('.info-overlay');
    
    container.addEventListener('mouseenter', () => {
        overlay.style.opacity = '1';
        overlay.style.transform = 'translateY(0)';
    });
    
    container.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0';
        overlay.style.transform = 'translateY(100%)';
    });
});
