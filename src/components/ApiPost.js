import React from 'react'

const ApiPost = ({post}) => {
    console.log(post.image);

  return (
    
    <div className="card" style={{"width": "18rem"}}>
      <img className="card-img-top" src={post.image} alt="Card"/>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">price :{post.price}</p>
        </div>
    </div>
  
    
)} 


export default ApiPost