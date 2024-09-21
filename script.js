// Data untuk galeri gambar
const images = [
    { src: 'foto1.jpg' },
    { src: 'foto2.jpg' },
    { src: 'foto3.jpg' },
    { src: 'foto4.jpg' },
    { src: 'foto5.jpg' },
    { src: 'foto6.jpg' },
    { src: 'foto7.jpg' },
    { src: 'foto9.jpg' },
    { src: 'foto10.jpg' },
];

let currentIndex = 0;

// Tampilkan lebih banyak galeri
function showMore() {
    const gallery = document.getElementById('gallery');
    gallery.style.display = gallery.style.display === "block" ? "none" : "block";

    if (gallery.style.display === "block") {
        const galleryWrapper = gallery.querySelector('.gallery-wrapper');
        galleryWrapper.innerHTML = ""; // kosongkan sebelumnya
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = "Gallery Image"; // Ganti dengan deskripsi jika ada
            galleryWrapper.appendChild(imgElement);
        });
    }
}

// Fungsi untuk menggeser gambar di galeri
function nextSlide() {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    currentIndex = (currentIndex + 1) % images.length;
    updateSlidePosition(galleryWrapper);
}

function prevSlide() {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlidePosition(galleryWrapper);
}

function updateSlidePosition(galleryWrapper) {
    const imageWidth = galleryWrapper.children[0].offsetWidth;
    galleryWrapper.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

// Fungsi untuk berbagi di media sosial
function shareOnSocial(platform) {
    const url = window.location.href;
    const message = encodeURIComponent("Check out my introduction!");

    let shareUrl;
    if (platform === 'instagram') {
        shareUrl = `https://www.instagram.com/syaaikoo/`;
    } else if (platform === 'whatsapp') {
        shareUrl = `https://api.whatsapp.com/send?text=${message} ${url}`;
    } else {
        alert('Platform tidak didukung.');
        return;
    }
    window.open(shareUrl, '_blank');
}

// Grafik aktivitas harian
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Belajar', 'Main', 'Tidur'],
        datasets: [{
            label: 'Aktivitas Jam Harian',
            data: [5, 7, 9],
            backgroundColor: [
                'rgba(255, 154, 158, 0.2)',
                'rgba(254, 207, 239, 0.2)',
                'rgba(173, 216, 230, 0.2)'
            ],
            borderColor: [
                'rgba(255, 154, 158, 1)',
                'rgba(254, 207, 239, 1)',
                'rgba(173, 216, 230, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Animasi Grafik Keahlian Bahasa Pemrograman
const skillCtx = document.getElementById('skillChart').getContext('2d');
const skillChart = new Chart(skillCtx, {
    type: 'bar',
    data: {
        labels: ['JavaScript', 'Python', 'HTML & CSS', 'Java', 'PHP'],
        datasets: [{
            label: 'Tingkat Keahlian (%)',
            data: [85, 45, 90, 60, 50],
            backgroundColor: [
                'rgba(255, 154, 158, 0.6)',
                'rgba(254, 207, 239, 0.6)',
                'rgba(173, 216, 230, 0.6)',
                'rgba(255, 218, 185, 0.6)',
                'rgba(144, 238, 144, 0.6)'
            ],
            borderColor: [
                'rgba(255, 154, 158, 1)',
                'rgba(254, 207, 239, 1)',
                'rgba(173, 216, 230, 1)',
                'rgba(255, 218, 185, 1)',
                'rgba(144, 238, 144, 1)'
            ],
            borderWidth: 1,
            borderRadius: 10,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        },
        animation: {
            duration: 2500,
            easing: 'easeInOutBounce'
        }
    }
});

// JavaScript untuk Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');

// Cek apakah mode dark sudah aktif sebelumnya di localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeIcon.src = 'sun-icon.png';
}

// Event listener untuk tombol dark mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.src = 'sun-icon.png';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeIcon.src = 'moon-icon.png';
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Fungsi untuk menampilkan notifikasi
function showNotification(sender, message) {
    const notification = document.getElementById('notification');
    const senderElement = document.getElementById('notificationSender');
    const messageElement = document.getElementById('notificationMessage');

    senderElement.textContent = `Dari: ${sender}`;
    messageElement.textContent = message;

    notification.classList.remove('hidden');
    notification.classList.add('visible');

    setTimeout(() => {
        hideNotification();
    }, 1000);
}

function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('visible');
    notification.classList.add('hidden');
}
