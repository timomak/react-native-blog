//import React, { useReducer } from "react";
import { useCallback } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

//const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  console.log("Function called");
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
    case "edit_blogpost":
      console.log("It's tring to fix it");
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id) {
          console.log("Payload: ", action.payload);
          return action.payload;
        } else {
          console.log("Post: ", blogPost);
          return blogPost;
        }

        // c22onsole.log(action.payload.id);
        //return blogPost.id === action.payload.id.id ? action.payload : blogPost;
      });
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

// export const BlogProvider = ({ children }) => {
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);
//   //const blogPosts = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }];

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");

    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  // return (title, content, callBack) => {
  //   dispatch({ type: "add_blogpost", payload: { title, content } });
  //   if (callBack) {
  //     callBack();
  //   }
  // };
  return async (title, content, callBack) => {
    await jsonServer.post("/blogposts", { title, content });
    if (callBack) {
      callBack();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  // return (id) => {
  //   dispatch({ type: "delete_blogpost", payload: id });
  // };

  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);

    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  // return (id, title, content, callBack) => {
  //   console.log("It's calling the context function");
  //   dispatch({ type: "edit_blogpost", payload: { id, title, content } });
  return async (id, title, content, callBack) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    if (callBack) {
      callBack();
    }
  };
};

//   return (
//     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
