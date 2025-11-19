// --- Pastel arka plan üretme ---
function rastgelePastel() {
    const r = Math.floor(Math.random() * 128 + 127);
    const g = Math.floor(Math.random() * 128 + 127);
    const b = Math.floor(Math.random() * 128 + 127);
    return `rgb(${r},${g},${b})`;
}

// Sayfa açılınca arka planı değiştir ve rastgele fotoğraf göster
window.onload = function() {
    document.body.style.backgroundColor = rastgelePastel();
    rastgeleResimSec();
};

// --- Rastgele fotoğraf seçme ---
var liste = [
    "img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg",
    "img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.jpg"
];

function rastgeleResimSec() {
    var sec = Math.floor(Math.random() * liste.length);
    document.getElementById("randomImg").src = liste[sec];
}

// --- Sabit fotoğraflar için Göster/Gizle ---
function goster(id) {
    document.getElementById(id).style.display = "inline";
}

function gizle(id) {
    document.getElementById(id).style.display = "none";
}
