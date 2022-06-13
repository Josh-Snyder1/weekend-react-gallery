// import MuiImage from '../MuiImage/MuiImage'


function GalleryItem ({image, updateLikes}) {

    function makeVisable() {
        console.log('in makeVisable',image.id)
        var element = document.getElementById(image.id);
        element.style.display = "unset";
    }

    function hideDescription() {
        var element = document.getElementById(image.id);
        element.style.display = "none";
    }

    console.log('in GalleryItem',image)
    return (
        <>
            
            <div className="gallery-item"
                onMouseOver={() => makeVisable()}
                onMouseOut={() => hideDescription()}>
                <div className="description" id={image.id} >{image.description}</div>
                <img src={image.path} 
                    className="gallery-image" 
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
