import Post  from "./Post";
import classes from "./Post.module.css"
import NewPost from "./NewPost"
import { useState } from "react";
import Modal from './Modal';
function PostList({isPosting,onStopPosting})   {

    const [posts,setPosts]=useState([]);

    function addPostHandler(postData)
    {
      setPosts([postData,...posts]);

    }
    return (
        <>
{isPosting &&
  (<Modal onClose={onStopPosting }>
     <NewPost 
      
      onCancel={onStopPosting}
      onAddPost={addPostHandler}
      />
     </Modal> ) 
     
     
     }    

<ul className={classes.post}>
    

<Post  author="Dilshad"  body="Somthing.. works fine"/>
</ul>
</>
    )
}

export default PostList;