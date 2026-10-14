
import './App.css'
import photo from './assets/photo.jpg'

const student = "Abderrzak Souihli"
const email = "rzoukasahli2@gmail.com"
const telephone = "25468978"
const filiere = "Génie Logiciel et Systèmes d'Information"
const anne = "2ème année"
const groupe = "GLSI 2"
const ville = "Mahdia"

function App() {
  return (
    <div className="container">
      <div className="fiche">

        <img
          src={photo}
          alt="Photo de l'étudiant"
          className="photo"
        />

        <h1>Fiche étudiant</h1>

        <p>
          <strong>Nom & Prénom :</strong> {student}
        </p>

        <p>
          <strong>Email :</strong> {email}
        </p>

        <p>
          <strong>Téléphone :</strong> +216 {telephone}
        </p>

        <p>
          <strong>Filière :</strong> {filiere}
        </p>

        <p>
          <strong>Année d'étude :</strong> {anne}
        </p>

        <p>
          <strong>Groupe :</strong> {groupe}
        </p>

        <p>
          <strong>Ville :</strong> {ville}
        </p>

        <a
          href={`mailto:${email}`}
          className="btn-contact"
        >
          Contacter
        </a>

      </div>
    </div>
  )
}

export default App
