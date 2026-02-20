function createQR(data) {
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(data)}`;

    const img = new Image();
    img.src = url;
    img.alt = "QR Code";

    img.onload = () => {
        qrResult.innerHTML = `
            <div class="fade">
                ${img.outerHTML}
                <br><br>
                <a href="${url}" download="GereQR.png">
                    <button class="download-btn">Baixar QR Code</button>
                </a>
            </div>
        `;
    };

    img.onerror = () => {
        showError("Erro ao gerar QR Code 😢");
    };
}
