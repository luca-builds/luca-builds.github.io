const modal = document.querySelector(".modal");
const linkInizia = document.querySelector(".inizia");
const tastoChiudi = document.querySelector(".chiudi");
function provaClick() {
  modal.style.display = "block"
}
function chiudiModal() {
  modal.style.display = "none"
}
linkInizia.addEventListener("click", provaClick);
tastoChiudi.addEventListener("click", chiudiModal);
