import './App.css';
import Post from './Post';
import React, {  useState,useEffect } from "react";
import {db} from './firebase';

function App() {
  const [posts,setPosts] = useState([
    // {
    //   username:"foushware",
    //   caption:"it works WoW",
    //   imageUrl:"https://i.imgur.com/R0ErjS1.jpg"
    // },
    // {
    //   username:"Ahmed",
    //   caption:"it works WoW",
    //   imageUrl:"https://i.imgur.com/FEkcO4k.jpg"
    // },
    // {
    //   username:"Sayed",
    //   caption:"it works WoW",
    //   imageUrl:"https://i.imgur.com/LVNNL9F.jpg"
    // }


  ])


  // Runs code based on condition useEffect(()=> { //Code},condtion)  :if the conditon is empty it run once the App component rendered 
  useEffect(()=>{
    //Code

   

    db.collection('posts').onSnapshot(snapshot=>{
      //Every time a new post is added , this code fire
      setPosts(snapshot.docs.map(doc=>({
          id:doc.id,
          post:doc.data()
        })
      
      ))
    })



  // },[posts]) // This code will run at the first time App rendered and when the posts change 
},[]) // This code will run at the first time App rendered and when the posts change 


  return (
    <div className="app">


{/* Start the  Header of the App */}

    <div className="app__header">
      <img
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
      />
    </div>


{/* End the  Header of the App */}





    <h1>
        Hello guys Let's build an instagram Clone React 🚀
    </h1>


    {
      posts.map(({id,post})=>(

        <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        )
      )
    }
      



{/* Structure  */}

    {/* Posts */}
    {/* Posts */}
    {/* Posts */}


{/* Structure  */}



    {/* Each Post  */}
            {/* Header */}
                {/* circlerImage */}
                {/* UserName */}
                {/* Location */}
            {/* Image */}
            {/* Comments */}
    {/* Each Post  */}


    
    </div>
  );
}

export default App;
