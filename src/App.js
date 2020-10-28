import './App.css';
import Post from './Post';

function App() {
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



    <Post/>
    <Post/>
    <Post/>



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
