function GalleryList( {galleryList, GalleryItem}) {

    console.log('in GalleryList',galleryList);
    // const newGalList = [galleryList];
    // console.log('newGal', newGalList);

    return (
        <div className="gallery-list">
            {galleryList.map((image) => 
                <GalleryItem
                    key={image.id}
                    image={image}
                />
            )}
        </div>
    );
};

export default GalleryList;