document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-container');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    // Update this array to include objects with 'src' and 'description'
    const images = [
        { src: 'assets/img/iism24_1.jpg', description: 'Description for Illustration 1.' },
        { src: 'assets/img/iism24_2.jpg', description: 'A portrait with vibrant colors.' },
        { src: 'assets/img/iism24_3.jpg', description: 'An illustration of a fantasy landscape.' }
        // Add all your image objects here
    ];

    // Dynamically create gallery items
    images.forEach(imageObj => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        item.innerHTML = `<img src="${imageObj.src}" alt="${imageObj.description}">`;
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
        lightbox.innerHTML = `
            <span class="close-btn">&times;</span>
            <img class="lightbox-content" src="${imageObj.src}">
            <p class="lightbox-description">${imageObj.description}</p>
            <a class="prev-btn">&#10094;</a>
            <a class="next-btn">&#10095;</a>
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