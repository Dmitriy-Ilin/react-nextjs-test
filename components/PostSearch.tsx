'use client'
import { getPostsBySearch } from '@/services/getPosts';
import { usePosts } from '@/store';
import { useState } from 'react' 

// type Props = {
//     onSearch: (value: any[]) => void; 
// }

// const PostSearch = ({onSearch}: Props) => {
//   const [search, setSearch] = useState('');

//   const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();
//     const posts = await getPostsBySearch(search);
//     onSearch(posts);
//   }

  const PostSearch = () => {
    const [search, setSearch] = useState('');
    const getPostsBySearch = usePosts(state => state.getPostsBySearch);
  
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      const posts = await getPostsBySearch(search);
 
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='search' placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button type='submit'>search</button>
    </form>
  )
}

export default PostSearch