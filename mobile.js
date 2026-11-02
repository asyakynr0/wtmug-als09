
const teacherId = document.getElementById("teacherId");
const scanBtn = document.getElementById("scanBtn");
const qrSection = document.getElementById("qrSection");
const connectBtn = document.getElementById("connectBtn");
const status = document.getElementById("connectionStatus");

// Cihaz türünü algıla
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// Bilgisayarda QR butonunu gizle
if (!isMobile) {
    qrSection.style.display = "none";
}

// Bağlan butonu
connectBtn.addEventListener("click", function () {
    if (teacherId.value.trim() === "") {
        status.textContent = "Lütfen öğretmen ID'sini girin.";
        return;
    }

    status.textContent = "Bağlantı sistemi hazırlanıyor...";
});

// QR butonu
scanBtn.addEventListener("click", function () {
    status.textContent = "QR kod okuyucu sonraki aşamada eklenecek.";
});
