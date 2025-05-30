let zoomLevel = 1;

// Abrir imagem no modal
document.querySelectorAll('.img-container img').forEach(img => {
    img.addEventListener('click', function () {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');

        modal.style.display = 'block';
        modalImg.src = this.src;

        zoomLevel = 1;
        modalImg.style.transform = `scale(${zoomLevel})`;
    });
});

// Fechar modal
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Clicar fora da imagem fecha o modal
window.addEventListener('click', function (event) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Zoom com scroll
const modalImg = document.getElementById('modalImage');
modalImg.addEventListener('wheel', function (e) {
    e.preventDefault();

    if (e.deltaY < 0) {
        // Zoom in
        zoomLevel = Math.min(zoomLevel + 0.1, 3);
    } else {
        // Zoom out
        zoomLevel = Math.max(zoomLevel - 0.1, 1);
    }

    this.style.transform = `scale(${zoomLevel})`;
});
