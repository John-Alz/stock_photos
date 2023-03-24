import React, {useState, useEffect} from 'react'

export default function PhotosHome() {

    const [photos, setPhotos] = useState([]);

    const apiKey = "bjaPfIhVQkD96niSBuH-0N0Uyqs0U75Xtr-nFQoFtgw";
    const URLMAIN = "https://api.unsplash.com/photos"

    useEffect(() => {
        fetch(`${URLMAIN}?client_id=${apiKey}`)
    .then((res) => res.json())
    .then(data => {
      setPhotos(data)
    })
    }, []);


  return (
    <div>
    {
        photos.map((p) => {
            return (
                <img src={p.urls.regular} alt=''/>
            )
        })
    }
      
    </div>
  )
}
