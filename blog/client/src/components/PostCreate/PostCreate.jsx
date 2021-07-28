import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    padding:10px;
    border:solid grey 1px;
    border-radius:4px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:center;
    max-width: 400px;
    height: 250px;
    input, button {
        box-sizing: border-box;
        border-radius:4px;
        padding : 10px;
        width:80%;
        outline:none;
        display:block;
        border:solid 1px lightgray;
    }
`;
const PostCreate = ({setNewPostTitle}) => {
    const [title,setTitle] = useState('');

    const submitHandler =(e) =>{
        e.preventDefault();
    title &&  setNewPostTitle(title);
    setTitle('');
    }
    return (
       <Form onSubmit ={submitHandler}>
             <div>Title</div>
            <input type = 'text' value = {title} onChange = {(e)=>setTitle(e.target.value)}/>
            <button type = 'submit' >SUBMIT</button>
       </Form>
    );
};

export default PostCreate;