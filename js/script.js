function openCloseNav() {
  const sidenav = document.getElementById("mySidenav");
  sidenav.style.left = sidenav.style.left === "-250px" ? "0" : "-250px";
}

const image = document.getElementById("projet1");
const cahierDesCharges = document.getElementById("cahier_des_charges");
const fleche = document.getElementById("imgfleche");
const imagePPE1 = document.getElementById("imagesppe1");
const imagePPE2 = document.getElementById("imagesppe2");

// Afficher/Masquer le cahier des charges et la flèche
image.addEventListener("click", () => {
  const isHidden = cahierDesCharges.style.display === "none" || !cahierDesCharges.style.display;
  cahierDesCharges.style.display = isHidden ? "block" : "none";
  fleche.style.display = isHidden ? "block" : "none";
});

// Gérer la rotation de la flèche et l'affichage des images
fleche.addEventListener("click", () => {
  const isImagesVisible = imagePPE1.style.display === "block";
  imagePPE1.style.display = isImagesVisible ? "none" : "block";
  imagePPE2.style.display = isImagesVisible ? "none" : "block";

  // Rotation de la flèche
  fleche.style.transform = isImagesVisible ? "rotate(0deg)" : "rotate(90deg)";
});
