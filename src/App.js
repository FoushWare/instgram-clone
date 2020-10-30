import './App.css';
import Post from './Post';
import React, {  useState,useEffect } from "react";
import {db,auth} from './firebase';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {  Modal,Input } from '@material-ui/core';
import ImageUpload from './ImageUpload'


//Start ...... Style for the Modal 
const useStyles = makeStyles((theme) => ({
  button: {
      margin: theme.spacing(1),
  },
  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  paper: {
      backgroundColor: theme.palette.background.paper,
      
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      textAlign:'center',
      width: "60%",
  margin: "100px auto",
  outline: 'none' ,// to remove the border of the modal

  },
}));

//End ...... Style for the Modal 



const LoginButtonStyle= {
  display:"flex",float:"right",marginRight: "20px"
}



function App() {
  const [posts,setPosts] = useState([]);
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const classes = useStyles();
  const [user,setUser]= useState(null);

  // Auth the User with Email and Password [firebase]
  const signUp=(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((authUser)=>{
      return authUser.user.updateProfile({
        displayName:username
      })
    })
    .catch((error)=> alert(error.message));

    setOpen(false);

};


const signIn=(e)=>{
  e.preventDefault();

  auth.signInWithEmailAndPassword(email,password)
  .catch((error)=>alert(error.message)
  )

  setOpenSignIn(false);
};




useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      //user has logged in ...
      console.log(authUser);
      setUser(authUser);   
      // if(authUser.displayName){
      //   //dont update username
      // }else{
      //   // if we just created someone...
      //   return authUser.updateProfile({
      //     displayName:username,
      //   })
      // }
    }else {
      //user has logged out ...
      setUser(null);
    }
  })
},[user,username])


// GET THE POSTS FROM FIREBASE DATABASE 

  // Runs code based on condition useEffect(()=> { //Code},condtion)  :if the conditon is empty it run once the App component rendered 
  useEffect(()=>{
    //Code
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>{
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
    <>

    {user?.displayName?<ImageUpload username={user.displayName}/>:<div>Sorry you need to login to upload post</div>}
    

    <Modal open={open} onClose={e => setOpen(false)}>
                    <div className={classes.paper}>

            <form className="app__signup">


                     <center>
                          <img
                              className="app__headerImage"
                               src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                               alt=""
                               />
                      </center>
                      

                        <Input type="text" placeholder="userName" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                    

                      

                          <Input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                      

                    

                          <Input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                      
                          <Button type="submit" onClick={signUp}>Sign Up</Button>

                     

        </form>
                    </div>
                        
    </Modal>

    {/* /////////  START    /////////     Sign In Modal */}

    <Modal open={openSignIn} onClose={e => setOpenSignIn(false)}>
                    <div className={classes.paper}>

            <form className="app__signup">


                     <center>
                          <img
                              className="app__headerImage"
                               src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                               alt=""
                               />
                      </center>
                    

                          <Input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                      
                          <Input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                      
                          <Button type="submit" onClick={signIn}>SignIN</Button>

                     

        </form>
                    </div>
                        
    </Modal>



    {/* /////////  END    /////////     Sign In Modal */}



    <div className="app">    {/* //Start  of the App */}

        <div className="app__header">{/* Start the  Header of the App */}
          <img
            className="app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
            />

          {user?(
            <Button variant="contained" color="primary" style={{display:"flex",float:"right"}}  onClick={() => auth.signOut()} >
                Logout
            </Button>
          ):(
            <>
              <Button variant="contained" color="primary" style={{display:"flex",float:"right"}}  onClick={e => setOpen(true)} >
                  SignUp
              </Button>
              <Button variant="contained" color="secondary" style={LoginButtonStyle } onClick={e => setOpenSignIn(true)} >
                  Login
              </Button>
            </>

          )}

         



        </div>{/* End the  Header of the App */}

    


{/* *****    Start    Body of the App [Posts] fetched from the firebase service      ***** */}


    {
      posts.map(({id,post})=>(

      (post.username && post.caption && post.imageUrl)?

          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>:''
        
        )
      )
    }

      
{/* *****    End    Body of the App [Posts] fetched from the firebase service      ***** */}



    
    </div> {/* //End of the App */}
    
  </>
  );
}

export default App;
