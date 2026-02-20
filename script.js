document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generate-btn");
  const input = document.getElementById("qr-input");
  const qrResult = document.getElementById("qr-result");

  if (!button || !input || !qrResult) {
    console.error("Elementos não encontrados no DOM");
    return;
  }

  button.addEventListener("click", generateQR);

  function generateQR() {
    const value = input.value.trim();

    if (!value) {
      showError("Digite algo primeiro 💜");
      return;
    }

    showLoading();

    setTimeout(() => {
      createQR(value);
    }, 500);
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
          <button type="button" class="download-btn">Baixar QR Code</button>
        </a>
      </div>
    `;
  }

  function showError(message) {
    qrResult.innerHTML = `<p style="color:#ff9aa2;">${message}</p>`;
  }
});
