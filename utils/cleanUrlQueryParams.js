export default function cleanUrlQueryParams(baseUrl) {
  return history.replaceState({}, document.title, baseUrl || location.pathname)
}
