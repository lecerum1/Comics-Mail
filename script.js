
// Création d'une boucle qui va permettre de comptabiliser le nombre de messages et afficher la valeur dans le compteur
  document.getElementById("count").textContent = document.getElementsByTagName("p").length;


// Création d'une fonction permettant de supprimer les messages lorque l'on clique sur l'icone de la poubelle,
// Et mettre le compteur à jour
  for(var i=0; i<document.getElementsByClassName("trash").length; i++){
  document.getElementsByClassName("trash")[i].addEventListener("click",
    function(){
      this.parentNode.remove();
      document.getElementById("count").textContent = document.getElementsByTagName("p").length;
    }
  )
}
//
// for(var i=0; i<document.getElementsByClassName("row").length; i++){
// document.getElementsByClassName("delete")[i].addEventListener("click",
//   function(){
//     this.parentNode.remove();
//     document.getElementById("count").textContent = document.getElementsByTagName("p").length;
//   }
// )
// }
