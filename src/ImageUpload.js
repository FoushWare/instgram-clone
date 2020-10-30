import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { storage ,db} from './firebase'
import firebase from 'firebase';


function ImageUpload({username}) {
    const [caption,setCaption]= useState('')
    const [image,setImage]= useState(null)
    const [progress,setProgress]= useState(0)

    const handleChange = (e) =>{

        if(e.target.files[0]){
            setImage(e.target.files[0])
        }

    }
    
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot)=>{
                //Progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress)
                if(progress == 100){
                    setTimeout(() => {
                        setProgress(0);
                    }, 5000);
                    
                }
            },(error)=>{
                // Error function 
                console.log(error);
                alert(error.message)
            },()=>{
                // Complete function ...
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url=>{
                        //put post image inside db 
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption:caption,
                            imageUrl:url,
                            username:username
                        })
                    })

            }
        )
    }


    return (
        <div>
            {/* What is Need */}
            {/* caption */}
            {/* file picker  */}
            {/* post button */}
            <progress value={progress} max="100"/>
            <input type="text" placeholder="Enter a Caption" value={caption} onChange={e=>setCaption(e.target.value) }/>
            <input type="file" onChange={handleChange}/>
            <Button onClick={handleUpload}>Upload</Button>
            





        </div>
    )
}

export default ImageUpload
