// import MuiImage from '../MuiImage/MuiImage'
import updateLikes from '../updateLikes/updateLikes'

function GalleryItem ({image}) {

    console.log('in GalleryItem',image)
    return (
        <div className="gallery-item">
            <img src={image.path} className="gallery-image"/>
            <button className="love-it-btn" onClick={() => updateLikes(image.id,image.likes)} >Love It!</button>

            <p>{image.likes} People Love This</p>
            {/* <MuiImage 
            image={image}/> */}
        </div>
        
    );
}

export default GalleryItem;
