// import MuiImage from '../MuiImage/MuiImage'


function GalleryItem ({image, updateLikes}) {

    function makeVisable() {
        console.log('in makeVisable',image.id)
        var element = document.getElementById("description");
        element.style.display = "unset";
    }

    console.log('in GalleryItem',image)
    return (
        <>
            
            <div className="gallery-item">
                <div className="description" id="descrciption" >{image.description}</div>
                <img src={image.path} 
                    className="gallery-image" 
                    onMouseOver={() => makeVisable()}
                    />
                <button className="love-it-btn" onClick={() => updateLikes(image.id,image.likes)} >Love It!</button>

                <p>{image.likes} People Love This</p>
                {/* <MuiImage 
                image={image}/> */}
            </div>
        </>
    );
}

export default GalleryItem;
