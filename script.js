const button = document.getElementById("generate-btn");
const input = document.getElementById("qr-input");
const qrResult = document.getElementById("qr-result");

button.addEventListener("click", generateQR);

function generateQR() {
    const value = input.value.trim();

    if (!value) {
        showError("Digite algo primeiro 💜");
        return;
    }

    showLoading();

    // Simula pequeno delay pra mostrar o loading
    setTimeout(() => {
        createQR(value);
    }, 800);
}

function showLoading() {
    qrResult.innerHTML = `<div class="loader"></div>`;
}

function createQR(data) {
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(data)}`;

    qrResult.innerHTML = `
        <div class="fade">
            <img src="${url}" alt="QR Code">
            <br><br>
            <a href="${url}" download="GereQR.png">
                <button class="download-btn">Baixar QR Code</button>
            </a>
        </div> ';
}
