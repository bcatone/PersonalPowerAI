// Function to check the response from the server
export const getChangeResponse = (res) => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Error: ${res.status}`)
}