document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    const warnDiv = document.querySelector('.warn');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('open');
            // Animate hamburger lines
            const spans = menuBtn.querySelectorAll('span');
            if (nav.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
                warnDiv.classList.toggle('hidden');
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                warnDiv.classList.remove('hidden');
            }
        });
    }

    // --- Slider Logic ---
    const track = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelectorAll('.slide');

    let currentIndex = 0;
    const slideCount = slides.length;

    function updateSlider() {
        if (!track) return;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlider();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateSlider();
        });
    }

    // Auto play slider
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }, 5000);

    // --- Reviews Logic ---
    const showMoreBtn = document.getElementById('showMoreReviews');
    const hiddenReviews = document.querySelectorAll('.hidden-review');

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            hiddenReviews.forEach(review => {
                review.style.display = 'block'; // Or 'flex' if needed, styling handles layout
                review.style.animation = 'fadeIn 0.5s ease';
            });
            showMoreBtn.style.display = 'none'; // Hide button after showing
        });
    }
});

// Add animation keyframes via JS or assume CSS handles generic transitions.
// Adding a simple fade in for reviews
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(styleSheet);
