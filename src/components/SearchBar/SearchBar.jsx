import React from 'react'

export default function SearchBar() {

    const [photos, setPhotos] = useState([]);
const [busqueda, setbusqueda] = useState("");


  const apiKey = "bjaPfIhVQkD96niSBuH-0N0Uyqs0U75Xtr-nFQoFtgw";
  const URL = "https://api.unsplash.com/search/photos"

const submit = e => {
  e.preventDefault()
  fetch(`${URL}?query=${busqueda}&client_id=${apiKey}`)
    .then((res) => res.json())
    .then(data => {
      setPhotos(data.results)
    })

    console.log(photos);
}
    


  const handleChange = e => {
    setbusqueda(e.target.value)
  }



  return (
    <div>
      <div className="App">
    <form onSubmit={submit}>
      <input
        onChange={handleChange}
      />
      <button type='submit'>buscar</button>
    </form>
      {
        photos.map((p)=> {
          return (
            <>
            <h1>{p.alt_description}</h1>
            <img src={p.urls.regular}/>
            </>
          )
        })
      }
    </div>
    </div>
  )
}
