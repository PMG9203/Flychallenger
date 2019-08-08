import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const success = () => (
  <Layout>
    <h1>Merci pour votre message !</h1>
    <p>Dés que nous en prendrons connaissance nous reviendrons vers vous.</p>
    <Link to="/">Revenir à la page d'accueil</Link>
  </Layout>
)

export default success
