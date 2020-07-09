var tel = document.querySelectorAll("#tel");

tel.forEach(element => {
    element.addEventListener("keypress", numVerify, false);
})
function numVerify(e) {
  var key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57 || tel.value.length >= 10) {
    e.preventDefault();
    console.log(e)
  }
}
