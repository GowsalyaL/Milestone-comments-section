import React, { useEffect, useState } from 'react'
import ApiPost from './ApiPost'
import axios from 'axios'

const ApiList = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const url = 'https://fakestoreapi.com/products';
        axios.get(url)
            .then(res =>{
                setPosts(res.data);
            })
            .catch(err =>{
                console.log(err);
            })
    },[])


  return (
      <div className="container">
      <div className="row mx-auto">
      {posts.map(post => <ApiPost key={post.id} post={post}/>)}
       </div>
      </div>
  )
}

export default ApiList