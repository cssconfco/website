import React, { Component } from 'react'
import swal from 'sweetalert'

import Hero from '../components/organisms/Hero'
import What from '../components/organisms/What'
import Newsletter from '../components/organisms/Newsletter'
import Conduct from '../components/organisms/Conduct'
import Navbar from '../components/organisms/Navbar'
import Footer from '../components/organisms/Footer'

import { logEvent } from '../utils/analytics'
import fetchJson from '../utils/fetchJson'
import { config } from '../config/client'

class Home extends Component {
  state = { name: '', email: '', loading: false }

  startLoading = () => {
    this.setState({ loading: true })
  }

  stopLoading = () => {
    this.setState({ loading: false })
  }

  resetForm = () => {
    this.setState({ name: '', email: '', loading: false })
  }

  handleSubmit = async event => {
    event && event.preventDefault()
    this.startLoading()

    try {
      const { name, email } = this.state

      await fetchJson(`${config.apiUrl}/subscribe`, {
        method: 'POST',
        body: JSON.stringify({ name, email }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      swal(
        'Great!',
        'We will send you more information to your email',
        'success'
      )

      logEvent({ category: 'signup', action: 'click', label: 'newsletter' })

      this.resetForm()
    } catch (error) {
      this.stopLoading()
      console.error('Error callilng api/subscribe', error)
    }
  }

  handleChange = name => event => {
    this.setState({ [`${name}`]: event.currentTarget.value })
  }

  render() {
    const { name, email, loading } = this.state

    return (
      <>
        <Navbar />
        <Hero />
        <What />
        <Newsletter
          name={name}
          email={email}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          isLoading={loading}
        />
        <Conduct />
        <Footer />
      </>
    )
  }
}

export default Home
