document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-container');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    // Updating array
    const images = [
        { src: 'assets/portfolio/jojo.png', description: 'Movie: Jojo rabbit.' },
        { src: 'assets/portfolio/sea.png', description: ''},
        { src: 'assets/portfolio/cult.png', description: 'sample logo'},
        { src: 'assets/portfolio/om.png', description: 'sample logo'},
        { src: 'assets/portfolio/walk.png', description: ''},
        { src: 'assets/portfolio/jack.png', description: ''},
        { src: 'assets/portfolio/sama.png', description: ''},
        { src: 'assets/portfolio/kid.png', description: ''},
        { src: 'assets/portfolio/m.png', description: ''},
        { src: 'assets/portfolio/night.png', description: ''},
        { src: 'assets/portfolio/fight.png', description: ''},
        { src: 'assets/portfolio/oldman.png', description: ''},
        { src: 'assets/portfolio/incom.png', description: 'incomplete !'},
    ];

    // Dynamically create gallery items
    images.forEach(imageObj => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        item.innerHTML = `<img src="${imageObj.src}" alt="${imageObj.description}" loading="lazy">`;
        gallery.appendChild(item);
    });

    let currentIndex = 0;

    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const src = e.target.getAttribute('src');
            currentIndex = images.findIndex(image => image.src === src);
            showImage(currentIndex);
        }
    });

    
    function showImage(index) {
        const imageObj = images[index];
        
        // Conditionally create the description HTML
        const descriptionHtml = imageObj.description 
            ? `<p class="lightbox-description">${imageObj.description}</p>`
            : ''; // Renders nothing if the description is empty

        lightbox.innerHTML = `
            <span class="close-btn">&times;</span>
            <img class="lightbox-content" src="${imageObj.src}">
            ${descriptionHtml} 
            <a class="prev-btn" aria-label="Previous Image">&#10094;</a>
            <a class="next-btn" aria-label="Next Image">&#10095;</a>
        `;
        lightbox.style.display = 'flex';
}

    lightbox.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn')) {
            lightbox.style.display = 'none';
        } else if (e.target.classList.contains('prev-btn')) {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        } else if (e.target.classList.contains('next-btn')) {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }
    });
});
