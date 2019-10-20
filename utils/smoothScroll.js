const smoothScroll = selector => event => {
  event && event.preventDefault()

  document.querySelector(selector).scrollIntoView({
    behavior: 'smooth'
  })
}

export default smoothScroll
