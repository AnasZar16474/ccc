const button = document.querySelector(".button");
const close = document.querySelector(".close");
button.onclick = function () {
  document.querySelector(".data").classList.add("dataA");
  document.querySelector(".anas").classList.add("overlay");
  document.querySelector(".walaa").classList.add("loader");
};
close.onclick = function () {
  document.querySelector(".data").classList.remove("dataA");
  document.querySelector(".anas").classList.remove("overlay");
  document.querySelector(".walaa").classList.remove("loader");
};
