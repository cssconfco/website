import Router from 'next/router'

const HOME_PAGE = '/'

const redirectToHomePage = res => {
  if (res) {
    res.writeHead(302, {
      Location: HOME_PAGE
    })
    res.end()
  } else {
    Router.push(HOME_PAGE)
  }
}

export default redirectToHomePage
