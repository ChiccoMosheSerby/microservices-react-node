import React from "react";
import styled, { css } from "styled-components";

const UList = styled.ul`
  list-style-type: square;
  padding: 0;
  width: 100%;
`;

const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: gray 1px solid;
  padding-top: 3px;
  padding-bottom: 3px;
  ${({ status }) =>
    status === "panding" &&
    css`
      color: gray;
    `}
  ${({ status }) =>
    status === "rejected" &&
    css`
      color: red;
      text-decoration: line-through;
    `}
    .content {
    width: 67%;
  }
  .status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: .8rem;
    border-left: gray 1px solid;
    padding-left: 3px;

  }
`;

const CommentsList = ({ comments = [] }) => {
  const renderedComments = comments.map((comment) => {
    return (
      <Li key={comment.id} status={comment?.status}>
        <div className="content">{comment?.content}</div>
        <div className="status">{comment?.status}</div>
      </Li>
    );
  });
  return <UList>{renderedComments}</UList>;
};

export default CommentsList;
