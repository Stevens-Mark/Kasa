import { Component } from "react"
import '../styles/Card.css'

export default class Card extends Component {

  render() {

    const {id, title, cover} = this.props
    return (
        <article className='accomodationCard' key={id}>
          <img className='coverImage' src={cover} alt=''/>
          <h2 className='coverTitle'>{title}</h2>
        </article>
    )
  }
}
