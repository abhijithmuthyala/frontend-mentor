const shareButton = document.querySelector(".share-icon-btn");
const shareLinks = document.querySelector(".share-links-box");

shareButton.addEventListener("click", function () {
  shareLinks.classList.toggle("hidden");
  this.classList.toggle("clicked");
});
