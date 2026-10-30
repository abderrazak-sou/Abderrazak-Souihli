
import photo from '../assets/photo.jpg';

import '../compenents/StudentCard.css';

function StudentCard(props) {
  return (
    <div className="card">
      <img
        src={props.image}
        alt="Photo de l'étudiant"
        className="photo"
      />

      <h1>Fiche étudiant</h1>

      <p>Nom & Prénom : {props.prenom} {props.nom}</p>
      <p>Email : {props.email}</p>
      <p>Téléphone : {props.telephone}</p>
      <p>Filière : {props.filiere}</p>
      <p>Année : {props.anne}</p>
      <p>Groupe : {props.groupe}</p>
      <p>Ville : {props.ville}</p>

     
    </div>
  );
}


export default StudentCard;
