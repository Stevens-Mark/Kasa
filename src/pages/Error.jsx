import { Component } from "react"
import { Link } from 'react-router-dom'
import '../styles/Error.css'


// Error message component
export default class Error extends Component {
  render() {
    return (
      <main className='errorWrapper'>
        <h1 className='error404'>404</h1>
        <p className='errorText'>Oups! La page que vous demandez n'existe pas.</p>
        <Link className='returnLink' to="/">Retourner sur la page d’accueil</Link>
      </main>
    )
  }
}

