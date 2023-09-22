'use client'
import Link from "next/link";
import { shallow } from 'zustand/shallow'
import { useEffect, useState } from 'react'
import { usePosts } from "@/store";



const Posts = () => {

  const [posts, loading, getAllPosts] = usePosts(state => [
    state.posts, state.loading, state.getAllPosts
  ], shallow);

  useEffect(() => {
      getAllPosts();
  }, [getAllPosts]) 

  return  loading ? <h3>loading...</h3>
    : (
    <ul>
        {posts.map((post: any) =>
            <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
        )}
    </ul>
  )
}

export default Posts