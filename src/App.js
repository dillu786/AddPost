import logo from './logo.svg';
import './App.css';
import PostList from './Components/PostsList';
import MainHeader from './Components/MainHeader';
import {useState} from 'react';
function App() {

  const[modalIsVisible,setModalIsVisible]=useState(false );
  function showModalIsVisible()
  {
    setModalIsVisible(true);
  }
function HideModalHandler()
{
// event.stopPropagation();
  setModalIsVisible(false);
}

  return (

<>
<MainHeader onCreatePost={showModalIsVisible}/>
<main>
<PostList
isPosting={modalIsVisible}
onStopPosting={HideModalHandler}

/>
</main>
</>
  )
}

export default App;
