import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import ImageInput from '../ImageInput/ImageInput';


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

  function updateLikes(id,likes) {
    console.log('in updateLikes',id,likes);
    likes += 1;
    const dataLikes = { likes:likes}
    console.log(likes);

    axios({
        method: 'PUT',
        url: `/gallery/${id}`,
        data: dataLikes
    }).then((res)=>{
        console.log('res.data', res.data);
        getGallery();
    })
    .catch((error)=> {
        console.log('PUT image likes failed', error);
    });
  }//end updateLikes

  function addImage(newImageObject) {
    console.log('in addImage', newImageObject);

    axios({
      method: 'POST',
      url: '/gallery',
      data: newImageObject
    })
    .then((res) => {
      console.log('app axios.post then')
      getGallery();
    })
    .catch((error) => {
      console.log('error in posting to database', error);
    })
  };//end addImage

  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <ImageInput addImage={addImage} />
        <p>Gallery goes here</p>
        {galleryList.length > 0 &&
        <GalleryList
          galleryList={galleryList}
          GalleryItem={GalleryItem}
          updateLikes={updateLikes}
        />}
      </div>
    );
}

export default App;
