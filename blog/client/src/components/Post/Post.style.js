import styled from 'styled-components';

export const PostCard = styled.div`
  min-width: 300px  ;
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
  margin-right: 30px;
  position: relative;
  .title {
    border-bottom: 1px solid lightgray;
    text-align: center;
  }
  .lable {
    color: lightgray;
    border-bottom: solid lightgray 1px;
  }
  .comments {
    overflow-y: auto;
    width: 100%;
    height: 100%;
    display: block;
  }
  .center {
    width: 100%;
    height: 100%;
  }
`;