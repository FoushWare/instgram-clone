// import './App.css';
// import Post from './Post';
// import React, {  useState,useEffect } from "react";
// import {db,auth} from './firebase';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import {  Modal,Input, Avatar } from '@material-ui/core';
// import ImageUpload from './ImageUpload'
// import Alert from '@material-ui/lab/Alert';
// import InstagramEmbed from "react-instagram-embed";



// //Start ...... Style for the Modal 
// const useStyles = makeStyles((theme) => ({
//   button: {
//       margin: theme.spacing(1),
//   },
//   modal: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//   },
//   paper: {
//       backgroundColor: theme.palette.background.paper,
      
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//       textAlign:'center',
//       width: "60%",
//   margin: "100px auto",
//   outline: 'none' ,// to remove the border of the modal

//   },
// }));

// //End ...... Style for the Modal 



// const LoginButtonStyle= {
//   display:"flex",float:"right",marginRight: "20px"
// }



// function App() {
//   const [posts,setPosts] = useState([]);
//   const [username,setUsername] = useState('');
//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('');
//   const [open, setOpen] = useState(false);
//   const [openSignIn, setOpenSignIn] = useState(false);
//   const classes = useStyles();
//   const [user,setUser]= useState(null);

//   // Auth the User with Email and Password [firebase]
//   const signUp=(e)=>{
//     e.preventDefault();
//     auth.createUserWithEmailAndPassword(email,password)
//     .then((authUser)=>{
//       return authUser.user.updateProfile({
//         displayName:username
//       })
//     })
//     .catch((error)=> alert(error.message));

//     setOpen(false);

// };


  

  
  

// const signIn=(e)=>{
//   e.preventDefault();

//   auth.signInWithEmailAndPassword(email,password)
//   .catch((error)=>alert(error.message)
//   )

//   setOpenSignIn(false);
// };




// useEffect(()=>{
//   auth.onAuthStateChanged((authUser)=>{
//     if(authUser){
//       //user has logged in ...
//       console.log(authUser);
//       setUser(authUser);   
//       // if(authUser.displayName){
//       //   //dont update username
//       // }else{
//       //   // if we just created someone...
//       //   return authUser.updateProfile({
//       //     displayName:username,
//       //   })
//       // }
//     }else {
//       //user has logged out ...
//       setUser(null);
//     }
//   })
// },[user,username])


// // GET THE POSTS FROM FIREBASE DATABASE 

//   // Runs code based on condition useEffect(()=> { //Code},condtion)  :if the conditon is empty it run once the App component rendered 
//   useEffect(()=>{
//     //Code
//     db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>{
//       //Every time a new post is added , this code fire
//       setPosts(snapshot.docs.map(doc=>({
//           id:doc.id,
//           post:doc.data()
//         })
      
//       ))
//     })

//   // },[posts]) // This code will run at the first time App rendered and when the posts change 
// },[]) // This code will run at the first time App rendered and when the posts change 


//   return (
//     <>

    
    

//     <Modal open={open} onClose={e => setOpen(false)}>
//                     <div className={classes.paper}>

//             <form className="app__signup">


//                      <center>
//                           <img
//                               className="app__headerImage"
//                                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
//                                alt=""
//                                />
//                       </center>
                      

//                         <Input type="text" placeholder="userName" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                    

                      

//                           <Input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                      

                    

//                           <Input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                      
//                           <Button type="submit" onClick={signUp}>Sign Up</Button>

                     

//         </form>
//                     </div>
                        
//     </Modal>

//     {/* /////////  START    /////////     Sign In Modal */}

//     <Modal open={openSignIn} onClose={e => setOpenSignIn(false)}>
//                     <div className={classes.paper}>

//             <form className="app__signup">


//                      <center>
//                           <img
//                               className="app__headerImage"
//                                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
//                                alt=""
//                                />
//                       </center>
                    

//                           <Input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                      
//                           <Input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                      
//                           <Button type="submit" onClick={signIn}>SignIN</Button>

                     

//         </form>
//                     </div>
                        
//     </Modal>



//     {/* /////////  END    /////////     Sign In Modal */}



//     <div className="app">    {/* //Start  of the App */}

//         <div className="app__header">{/* Start the  Header of the App */}
//           <img
//             className="app__headerImage"
//             src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
//             alt=""
//             />

//           {user?(
//             <>
            
//             <Button variant="contained" color="primary" style={{display:"flex",float:"right"}}  onClick={() => auth.signOut()} >
//                 Logout
//             </Button>
//             </>
//           ):(
//             <>
//               <Button variant="contained" color="primary" style={{display:"flex",float:"right"}}  onClick={e => setOpen(true)} >
//                   SignUp
//               </Button>
//               <Button variant="contained" color="secondary" style={LoginButtonStyle } onClick={e => setOpenSignIn(true)} >
//                   Login
//               </Button>
//             </>

//           )}

         



//         </div>{/* End the  Header of the App */}

    


//         {user?.displayName?<ImageUpload username={user.displayName}/>:   
//       <>
      
//       <center><Alert severity="info">Sorry you need to login to upload post</Alert></center>
//       </>
//       }

// {/* *****    Start    Body of the App [Posts] fetched from the firebase service      ***** */}


//     {
//       posts.map(({id,post})=>(

//       (post.username && post.caption && post.imageUrl)?

//           <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>:''
        
//         )
//       )
//     }

      
// {/* *****    End    Body of the App [Posts] fetched from the firebase service      ***** */}





    
//     </div> {/* //End of the App */}
    
//   </>
//   );
// }

// export default App;




import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import ImageUpload from "./ImageUpload";
import { db, auth } from "./firebase";
import { Button, Avatar, makeStyles, Modal, Input } from "@material-ui/core";
import FlipMove from "react-flip-move";
import InstagramEmbed from "react-instagram-embed";
import axios from 'axios';
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    height: "300px",
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [instagramImage,setInstagramImage] = useState(null);
  const [registerOpen, setRegisterOpen] = useState(false);


  useEffect(()=>{

    //fixing the returned script for instagram 
    const script = document.createElement('script');

    script.src = "http://platform.instagram.com/en_US/embeds.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    //Request Embed post from instagram to show in the website because the plugin used instead if what i did deprecated by facebook
    axios.get("https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/CG_Kd6eHi3I/?utm_source=ig_web_copy_link&access_token=1547866068747742|5cfb7e16bc93a68ef9c9d03cd409df87")
      .then(res => {
        console.log(res);
        setInstagramImage(res.data.html);
       
      })
      return () => {
        document.body.removeChild(script);
      }
  },[]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in...
        console.log(authUser);
        setUser(authUser);

        if (authUser.displayName) {
          // dont update username
        } else {
          return authUser.updateProfile({
            displayName: username,
          });
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user, username]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
      );
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setOpen(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setRegisterOpen(false);
  };

  return (
    <div className="app">



      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__login">
            <center>
              <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              />
            </center>

            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Login</Button>
          </form>
        </div>
      </Modal>

      <Modal open={registerOpen} onClose={() => setRegisterOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__login">
            <center>
              <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              />
            </center>
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleRegister}>Register</Button>
          </form>
        </div>
      </Modal>
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        {user?.displayName ? (
          <div className="app__headerRight">
            <Button onClick={() => auth.signOut()}>Logout</Button>
            <Avatar
              className="app__headerAvatar"
              alt={user.displayName}
              src="/static/images/avatar/1.jpg"
            />
          </div>
        ) : (
          <form className="app__loginHome">
            <Button onClick={() => setOpen(true)}>Login</Button>
            <Button onClick={() => setRegisterOpen(true)}>Sign Up</Button>
          </form>
        )}
      </div>

      <div className="app__posts">
        <div className="app__postsLeft">
          <FlipMove>
            {posts.map(({ id, post }) => (
              <Post
                user={user}
                key={id}
                postId={id}
                username={post.username}
                caption={post.caption}
                imageUrl={post.imageUrl}
              />
            ))}
          </FlipMove>
        </div>
        {/* <script async src="//www.instagram.com/embed.js"></script> */}

        <div className="app__postsRight" dangerouslySetInnerHTML={{__html: instagramImage}}  >
          
        {/* < div dangerouslySetInnerHTML={{__html: instagramImage}} > */}

          
        </div>
      </div>

      {user?.displayName ? (
        <div className="app__upload">
          <ImageUpload username={user.displayName} />
        </div>
      ) : (
        <center>
          <h3>Login to upload</h3>
        </center>
      )}
    </div>
  );
}
<script async defer src="http://platform.instagram.com/en_US/embeds.js"></script>


export default App;








