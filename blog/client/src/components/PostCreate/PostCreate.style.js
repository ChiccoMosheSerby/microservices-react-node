import styled from 'styled-components';

export const Form = styled.form`
    padding:10px;
    border:solid #1e88da 1px;
    border-radius:4px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:center;
    max-width: 400px;
    margin: auto;
    width: calc(100% - 20px);

    input, button {
        box-sizing: border-box;
        border-radius:4px;
        padding : 10px;
        width:90%;
        outline:none;
        display:block;
        border:solid 1px #1e88da;
        margin:5px;
    }
    button{
        cursor: pointer;
        :hover{
            background-color: #1e88da;
        }
    }
`;