import './App.css';

import StudentCard from './compenents/StudentCard.jsx';
import Header from './compenents/Header.jsx';
import Navbar from './compenents/Navbar.jsx';
import Footer from './compenents/Footer.jsx';
import photo2 from './assets/photo2.png';
import photo3 from './assets/photo3.png';
import photo4 from './assets/photo4.png';
import photo from './assets/photo.jpg';
import { useState } from 'react';


function App(){

const [etudiant,setEtudiant]=useState([
  {
    prenom: "Abderrzak",
    nom: "Souihli",
    email: "rzoukasahli2@gmail.com",
    telephone: "+216 25 468 978",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anne: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: photo,
  },
  {
    prenom: "mohamed",
    nom: "ben marzouk",
    email: "muhamed@gmail.com",
    telephone: "+216 33 474 978",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anne: "2ère année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: photo2,
  },
  {
    prenom: "iheb",
    nom: "belhuichet",
    email: "ihebbb2@gmail.com",
    telephone: "+216 56 468 123",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anne: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: photo3,
  },


]);



 

  function ajouterEtudiant(){
    const nouveletudiant={
      nom: "mortadha",
      prenom: "bouzid",
      email: "mortadhabou@gmail.com",
      telephone: "+216 11 444 555",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anne: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: photo4,
    };
    setEtudiant([...etudiant,nouveletudiant]);
  }
  return (
    
    <div className="container">
      <Header />
      <Navbar />

      <h1>Liste des étudiants</h1>

      <div className="students-container">
        {etudiant.map((e) => (
          <StudentCard
            key={e.email}
            prenom={e.prenom}
            nom={e.nom}
            email={e.email}
            telephone={e.telephone}
            filiere={e.filiere}
            anne={e.anne}
            groupe={e.groupe}
            ville={e.ville}
            image={e.image}
          />
        ))}
      </div>

      <div className="actions">
      <button onClick={ajouterEtudiant}>+Ajouter un etudiant</button>
      </div>

      <Footer />
    </div>

   
  );

  
   
}


export default App;
