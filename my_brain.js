console.log("SCRIPT LOADED");

let back = document.getElementById("back");

console.log("BACK ELEMENT:", back);

if (back) {
  back.addEventListener("click", function () {
    console.log("BACK CLICKED");
    window.location.href = "index.html";
  });
}
