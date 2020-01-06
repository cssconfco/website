import fetch from 'isomorphic-unfetch'

const fetchJson = (url, options) => fetch(url, options).then(res => res.json())

export default fetchJson
