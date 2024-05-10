// .checked = determina se uma checkbox ou um radio button está selecionado
const myCheckBox = document.getElementById("checkbox");
const youtubeRadio = document.getElementById("YtBtn");
const tiktokRadio = document.getElementById("TikBtn");
const instagramRadio = document.getElementById("InstaBtn");
const submitButton = document.getElementById("SubBtn");
const checkResult = document.getElementById("checkResult");
const radioResult = document.getElementById("radioResult");

submitButton.onclick = function () {
  if (myCheckBox.checked) {
    checkResult.textContent = `Você marcou a "Checkbox"`;
  } else {
    checkResult.textContent = `Você não marcou a "Checkbox"`;
  }

  if (youtubeRadio.checked) {
    radioResult.textContent = `Você escolheu o Youtube!`;
  } else if (tiktokRadio.checked) {
    radioResult.textContent = `Você escolheu o  TikTok!`;
  } else if (instagramRadio.checked) {
    radioResult.textContent = `Você escolheu o Instagram!`;
  } else {
    radioResult.textContent = `Você não escolheu opção alguma dentre os sites`;
  }
};
