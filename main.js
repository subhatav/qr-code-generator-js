const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const qrImage = wrapper.querySelector(".qr-code img");
const createButton = wrapper.querySelector(".form button");

let lastValue;

function createQrCode(qrValue) {

  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
}

createButton.addEventListener("click", () => {

  let inputValue = qrInput.value.trim();

  if (!inputValue || lastValue === inputValue) return;

  lastValue = inputValue;

  createButton.innerText = "Generating QR Code...";

  qrImage.src = createQrCode(inputValue);

  qrImage.addEventListener("load", () => {

    wrapper.classList.add("active");

    createButton.innerText = "Generate QR Code";
  });
});

qrInput.addEventListener("keyup", () => {

  if (!qrInput.value.trim()) {

    wrapper.classList.remove("active");

    lastValue = "";
  }
});
