import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';


function App() {

  let [galleryList, setGalleryList] = useState('');

  useEffect(() => {
    getGallery()
  }, []);

  const getGallery = () => {

    axios.get('/gallery')
      .then(res => {
        console.log('in app axios.get', res.data);
        setGalleryList(res.data);
      })
      .catch((err) => {
        console.log('error getting gallery', err);
      })
  };//end getGallery

  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {galleryList.length > 0 &&
        <GalleryList
          galleryList={galleryList}
          GalleryItem={GalleryItem}
        />}
      </div>
    );
}

export default App;
