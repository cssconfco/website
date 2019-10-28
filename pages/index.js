import React, { Component, Fragment } from 'react'
import swal from 'sweetalert'

import Hero from '../components/organisms/Hero'
import What from '../components/organisms/What'
import Newsletter from '../components/organisms/Newsletter'
import Conduct from '../components/organisms/Conduct'
import Navbar from '../components/organisms/Navbar'
import Footer from '../components/organisms/Footer'

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

      await fetch('/api/subscribe', {
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

      this.resetForm()
    } catch (error) {
      this.stopLoading()
      console.error(error)
    }
  }

  handleChange = name => event => {
    this.setState({ [`${name}`]: event.currentTarget.value })
  }

  render() {
    const { name, email, loading } = this.state

    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

export default Home
