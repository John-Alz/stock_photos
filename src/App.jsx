import { useState, useEffect } from 'react';
import PhotosHome from './components/home/PhotosHome';
import SearchBar from './components/SearchBar/SearchBar';

function App() {



  return (
    <div>
    <SearchBar/>
    <PhotosHome/>
    </div>
  )
  }

export default App
