const $section = document.querySelector('.hidden') /*Récupération de .hidden dans l'html*/

const $linkShow = document.querySelector('#show-link') /*Selectionne balise a qui a l'id Show*/ 

$linkShow.addEventListener('click', event =>{  /* ajout évévènement ''clic'' afficher et enlever les élémements dans l'ordre suivant */
    event.preventDefault (); /* empeche le raffraichissement infini */ 
    $section.classList.toggle('hidden') /* ajout/retrait de la class 'hidden sur la sélection'*/
} );
