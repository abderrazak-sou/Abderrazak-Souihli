import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Image from './assets/photo.jpg'
import './App.css'
 const student = " Abderrazak souihli";
 const email = " rzoukasahli2@gmail.com";
 const telephone = "+216 25 468 978";
 const filiere =" genie logiciel et systeme d'information";
 const anne  = 2026;
 const groupe = " GLSI 2";
 const ville = " mahdiya";
 const image = Image;
//  const etudiant = {
//   nom:"",
//   prenom:""h
//  }
function App() {
  return (
    <div>
    <h1> fiche etudiant</h1>
    <img src={image} alt="image etudiant" />
    <p> <strong>nom & prenom: </strong>{student} </p>
    <p> <strong>email: </strong>{email} </p>
    <p> <strong>telephone: </strong>{telephone} </p>
    <p> <strong>filiere: </strong>{filiere} </p>
    <p> <strong>anne d'etude: </strong>{anne} </p>
    <p> <strong>groupe: </strong>{groupe} </p>
    <p> <strong>ville: </strong>{ville} </p>
    <a href="mailto:rzoukasahli2@gmail.com">contacter</a>
    </div>
  )

  
}

export default App
