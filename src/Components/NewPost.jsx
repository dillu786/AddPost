
import { useEffect, useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(onCancel,onAddPost) {

const [enteredBody,setEnteredBody]=useState('');
const [enteredAuthor,setEnteredAuthor]=useState('');

  
  




function bodyChangeHandler(event){
  event.stopPropagation();
setEnteredBody(event.target.value);
}

function authorChangeHandler(event)
{
  event.stopPropagation();
    setEnteredAuthor(event.target.value);
}

function submitHandler(event)
{

  event.preventDefault();
  const postData={
    body: enteredBody,
    author: enteredAuthor
  };

//onCancel();
console.log(postData+"   Before");
onAddPost();
  console.log(postData);

}

  return (
    <form  className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}  />
      </p>
   
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>

      <p className={classes.actions}>
        
        <button id="btnCancel" type="button" onClick={onCancel}>Cancel</button>
        
       
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
