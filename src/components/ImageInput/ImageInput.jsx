import React from 'react';
import {useState} from 'react';

function ImageInput({addImage}){
    let [newImagePath, setNewImagePath] = useState('');
    let [newImageDescription, setNewImageDescription] = useState('');

    
    const onSubmit = (evt) => {
        evt.preventDefault();
        addImage({
            imagePath: newImagePath,
            imageDescription: newImageDescription
        });
        setNewImagePath('');
        setNewImageDescription('');

    }   

    return (
        <>
            <form onSubmit={onSubmit}>
                <label>
                    Add Image:
                </label>
                <div>
                    <input className="input-path"
                        type="text"
                        placeholder="File Path"
                        value={newImagePath}
                        onChange={(evt) => setNewImagePath(evt.target.value)}
                    />
                    <input className="input-description"
                        type="text"
                        placeholder="Image Description"
                        value={newImageDescription}
                        onChange={(evt) => setNewImageDescription(evt.target.value)}
                    />
                    <button className="inputs" type="submit">Save</button>
                </div>
            </form>
        </>
    );
}

export default ImageInput;