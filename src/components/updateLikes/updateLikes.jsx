import React from 'react';
import axios from 'axios';


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
    })
    .catch((error)=> {
        console.log('PUT image likes failed', error);
    });
}

export default updateLikes;