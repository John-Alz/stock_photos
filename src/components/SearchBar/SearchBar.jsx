import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import Photo from '../CardPhoto/Photo';
import logo from '../../assets/logo.png'

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
      <div className="container_form">
      <div className='image'>
        <img src={logo} alt=''/>
      </div>
    <form onSubmit={submit}>
      <input
        onChange={handleChange}
      />
      <button type='submit'><BsSearch size={20}/></button>
    </form>
    <div className='photos_container'>
      {
        photos.map((photo)=> {
          return (
            <>
            <Photo photo={photo}/>
            </>
          )
        })
      }
      </div>
    </div>
  )
}
