// import { useState } from "react";
// import axios from "axios";

// const useCommentsUpdater = (postId) => {
//   const [comments, setComments] = useState([]);

//   const fetchAndUpdateComments = async () => {
//     let res = await axios.get(
//       `http://localhost:4001/posts/${postId}/comments`
//     );
//     // console.log("App PostsList", res.data);
//     const commentsArray = Object.values(res.data);

//     console.log("res comments", res);
//     console.log("commentsArray", commentsArray);

//     setComments(commentsArray);
//   };
//   return {
//     comments,
//     fetchAndUpdateComments,
//   };
// };

// export default useCommentsUpdater;
