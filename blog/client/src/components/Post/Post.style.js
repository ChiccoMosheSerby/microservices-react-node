import styled from 'styled-components';

export const PostCard = styled.div`
  padding: 15px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #1f1f1f;
  color: #fff;
  border-radius: 4px;
  margin: 4px;
  .title {
    border-bottom: 1px solid lightgray;
    text-align: center;
  }
  .lable {
    color: lightgray;
    border-bottom: solid lightgray 1px;
  }

  form {
    margin-top: auto;
  }
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

  .comments {
    overflow-y: auto;
    height: 250px;
    width: 100%;
  }
  .center {
    width: 100%;
  }
`;