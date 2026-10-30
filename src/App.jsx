
import './App.css';
import photo from './assets/photo.jpg';
import StudentCard from './compenents/StudentCard.jsx';
import Header from './compenents/Header.jsx';
import Navbar from './compenents/Navbar.jsx';
import Footer from './compenents/Footer.jsx';

const etudiant = [
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
    prenom: "Sarra",
    nom: "hjjj",
    email: "zshbzknd@gmail.com",
    telephone: "+216 24 662 978",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anne: "1ère année",
    groupe: "GLSI 1",
    ville: "Mahdia",
    
  },
];

function App() {
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

      <Footer />
    </div>
  );
}

export default App;
