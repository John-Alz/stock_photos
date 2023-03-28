import React, {useState, useEffect} from 'react'
import Photo from '../CardPhoto/Photo';

export default function PhotosHome() {

    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(3);

    const apiKey = "bjaPfIhVQkD96niSBuH-0N0Uyqs0U75Xtr-nFQoFtgw";
    const URLMAIN = "https://api.unsplash.com/photos"

    useEffect(() => {
        fetch(`${URLMAIN}?page=${page}&client_id=${apiKey}`)
    .then((res) => res.json())
    .then(data => {
      setPhotos(data)
    })
    }, [page]);

    const handleScroll = () => {
        console.log("Height", document.documentElement.scrollHeight);
        console.log("Top", document.documentElement.scrollTop);
        console.log("Window", window.innerHeight);

        // if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
        //     setPage(prev => prev + 1)
        // }
    }

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll)
    // }, [])


  return (
    <div className='photos_container'>
    {
        photos.map((photo) => {
            return (
                <Photo photo={photo}/>
            )
        })
    }
      
    </div>
  )
}
