/**
 * Image Modal with Carousel
 * Reusable modal component for displaying images in a lightbox with navigation
 * 
 * Usage:
 * 1. Add the modal HTML to your page (see initImageModal for structure)
 * 2. Call initImageModal() when the DOM is ready
 * 3. Add data-modal-image attribute to clickable elements with image configurations
 * 
 * Example:
 * <div class="image-grid" 
 *      data-modal-images='[{"src":"image1.jpg","caption":"Caption 1"},{"src":"image2.jpg","caption":"Caption 2"}]'>
 *   <img src="image1.jpg" data-image-index="0" />
 *   <img src="image2.jpg" data-image-index="1" />
 * </div>
 */

class ImageModal {
    constructor(modalId = 'imageModal') {
        this.modalId = modalId;
        this.currentIndex = 0;
        this.images = [];
        this.modal = null;
        this.modalImg = null;
        this.modalCaption = null;
        
        this.init();
    }

    init() {
        // Create modal if it doesn't exist
        if (!document.getElementById(this.modalId)) {
            this.createModalHTML();
        }

        this.modal = document.getElementById(this.modalId);
        this.modalImg = this.modal.querySelector('.modal-image');
        this.modalCaption = this.modal.querySelector('.modal-caption');

        this.attachEventListeners();
    }

    createModalHTML() {
        const modalHTML = `
            <div id="${this.modalId}" class="image-modal">
                <span class="modal-close">&times;</span>
                <button class="modal-prev" aria-label="Previous image">&#10094;</button>
                <button class="modal-next" aria-label="Next image">&#10095;</button>
                <div class="modal-content">
                    <img class="modal-image" src="" alt="">
                    <p class="modal-caption"></p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    attachEventListeners() {
        // Close button
        this.modal.querySelector('.modal-close').addEventListener('click', () => this.close());

        // Navigation buttons
        this.modal.querySelector('.modal-prev').addEventListener('click', () => this.navigate(-1));
        this.modal.querySelector('.modal-next').addEventListener('click', () => this.navigate(1));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.isOpen()) {
                if (e.key === 'Escape') this.close();
                if (e.key === 'ArrowLeft') this.navigate(-1);
                if (e.key === 'ArrowRight') this.navigate(1);
            }
        });

        // Close when clicking outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });
    }

    open(images, startIndex = 0) {
        this.images = images;
        this.currentIndex = startIndex;
        this.showImage(this.currentIndex);
        this.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    close() {
        this.modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }

    isOpen() {
        return this.modal.style.display === 'flex';
    }

    navigate(direction) {
        this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
        this.showImage(this.currentIndex);
    }

    showImage(index) {
        if (this.images[index]) {
            this.modalImg.src = this.images[index].src;
            this.modalImg.alt = this.images[index].alt || this.images[index].caption || '';
            this.modalCaption.textContent = this.images[index].caption || '';
        }
    }
}

/**
 * Initialize image modal for a container
 * @param {string} containerSelector - CSS selector for the container with images
 * @param {string} itemSelector - CSS selector for clickable items within the container
 * @param {Array} images - Array of image objects with src and caption properties
 */
function initImageModal(containerSelector, itemSelector, images) {
    const modal = new ImageModal();
    const container = document.querySelector(containerSelector);
    
    if (!container) return;

    const items = container.querySelectorAll(itemSelector);
    items.forEach((item) => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-image-index')) || 0;
            modal.open(images, index);
        });
    });

    return modal;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ImageModal, initImageModal };
}
