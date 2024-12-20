

function openCloseNav() {
  var sidenav = document.getElementById("mySidenav");

  //si le form est fermer 
  if(sidenav.style.left == '-250px'){
    sidenav.style.left='0';
  }
  //Si form open
  else{
    sidenav.style.left = '-250px';
  }
}
// Sélectionner l'image et le paragraphe
const image = document.getElementById('projet1');
const cahierDesCharges = document.getElementById('cahier_des_charges');

// Ajouter un événement au clic sur l'image
image.addEventListener('click', () => {
    // Basculer l'affichage du paragraphe
    if (cahierDesCharges.style.display === 'none' || cahierDesCharges.style.display === '') {
        cahierDesCharges.style.display = 'block';
    } else {
        cahierDesCharges.style.display = 'none';
    }
});


const cahier_charge = document.getElementById('cahier_des_charges');
const fleche = document.getElementById('imgfleche');

// Ajouter un événement au clic sur l'image
image.addEventListener('click', () => {
    // Basculer l'affichage du paragraphe
    if (fleche.style.display === 'none' || fleche.style.display === '') {
        fleche.style.display = 'block';
    } else {
        fleche.style.display = 'none';
    }
});


function ouvrirSousMenu(){
  const fleche = document.getElementById("imgfleche");

  if (fleche.style.rotate == '0deg') {
    fleche.style.rotate = '90deg';
  } else {
    fleche.style.rotate = '0deg';
  }  
}

  const imageFleche = document.getElementById("imgfleche");
  const imagePPE1 = document.getElementById("imagesppe1");
  const imagePPE2 = document.getElementById("imagesppe2");
  imageFleche.addEventListener('click', () => { //Quand je clique sur la fleche mes deux images sont sensé apparaitre 
    if (imageFleche.style.display == 'none'){
      imagePPE1.style.display ='block';
      imagePPE2.style.display='block';
    }
    else{
      imagePPE1.style.display ='none';
      imagePPE2.style.display='none';
    }
  });
