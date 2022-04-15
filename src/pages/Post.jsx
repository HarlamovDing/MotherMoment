import React from 'react'
import PostContent from "../components/Posts/PostContent";
import PostNav from "../components/Posts/PostNav";
import Header from "../components/Common/Header";

export default function PostPage () {
  return(
    <div className="container">
      <Header/>
      <PostNav/>
      <PostContent/>
    </div>
  )
}
