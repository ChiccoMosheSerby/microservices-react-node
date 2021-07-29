import styled from "styled-components";

export const Form = styled.form`
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 10px);

  input,
  button {
    margin-top: 3px;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 5px;
    width: 100%;
    outline: none;
    display: block;
    border: solid 1px lightgray;
  }
  button {
    cursor: pointer;
    :hover{
      color:#fff;
      background-color: #1f1f1f;
    }
  }
`;
