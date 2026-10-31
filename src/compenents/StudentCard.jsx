
import photo from '../assets/photo.jpg';

import '../compenents/StudentCard.css';
import { useState } from 'react';

function StudentCard(props) {
  const [cordonneVisible,setcordonneVisibles]= useState(false);
  function basculerInformations(){
    setcordonneVisibles(!cordonneVisible);
}


  return (
    
    <div className="card">
      <img
        src={props.image}
        alt="Photo de l'étudiant"
        className="photo"
      />
      <button onClick ={basculerInformations}>afficher/masquer</button>


      <h1>Fiche étudiant</h1>
      {cordonneVisible && (
      <>
      <p>Nom & Prénom : {props.prenom} {props.nom}</p>
      <p>Email : {props.email}</p>
      <p>Téléphone : {props.telephone}</p>
      <p>Filière : {props.filiere}</p>
      <p>Année : {props.anne}</p>
      <p>Groupe : {props.groupe}</p>
      <p>Ville : {props.ville}</p>
      </>
      )}
      <button onClick={basculerInformations}>
        {cordonneVisible
          ? "masquer les cordonnes"
          : "afficher les cordonnes"}
      </button>
     
    </div>
  );
}


export default StudentCard;
