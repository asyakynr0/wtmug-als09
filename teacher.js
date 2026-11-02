
const fileInput = document.getElementById("fileInput");
const fileInfo = document.getElementById("fileInfo");

const connectionArea = document.getElementById("connectionArea");
const teacherIdElement = document.getElementById("teacherId");
const qrCodeElement = document.getElementById("qrcode");

let selectedFile = null;
let teacherId = null;

// Dosya seçildiğinde
fileInput.addEventListener("change", function () {

    selectedFile = fileInput.files[0];

    if (!selectedFile) {
        return;
    }

    fileInfo.textContent =
        "Seçilen dosya: " + selectedFile.name;

    // Benzersiz bağlantı ID'si oluştur
    teacherId = "HOCA-" +
        Math.random().toString(36).substring(2, 10).toUpperCase();

    // ID'yi ekranda göster
    teacherIdElement.textContent = teacherId;

    // QR alanını göster
    connectionArea.style.display = "block";

    // Önceki QR kodunu temizle
    qrCodeElement.innerHTML = "";

    // Yeni QR kodu oluştur
    new QRCode(qrCodeElement, {
        text: teacherId,
        width: 200,
        height: 200,
        colorDark: "#1e293b",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

});
