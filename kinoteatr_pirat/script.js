// Header scroll effect
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth horizontal scroll for rows
const rows = document.querySelectorAll('.row-inner');
rows.forEach(row => {
    let isDown = false;
    let scrollLeft;
    let startX;

    row.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;
    });

    row.addEventListener('mouseleave', () => {
        isDown = false;
    });

    row.addEventListener('mouseup', () => {
        isDown = false;
    });

    row.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - row.offsetLeft;
        const walk = (x - startX) * 2;
        row.scrollLeft = scrollLeft - walk;
    });
});

// Mock trailer play (just showing alert for now, or could open a modal)
const watchBtns = document.querySelectorAll('.btn-watch');
watchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // e.preventDefault();
        // alert('Запуск плеера...');
    });
});

// Image loading animation
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease-in-out';
    img.onload = () => {
        img.style.opacity = '1';
    };
});
