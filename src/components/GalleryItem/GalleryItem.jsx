// import MuiImage from '../MuiImage/MuiImage'

function GalleryItem ({image}) {

    console.log('in GalleryItem',image)
    return (
        <div className="gallery-item">
            <img src={image.path} className="gallery-image"/>
            <button className="love-it-btn">Love It!</button>

            <p>{image.likes} People Love This</p>
            {/* <MuiImage 
            image={image}/> */}
        </div>
        
    );
}

export default GalleryItem;
