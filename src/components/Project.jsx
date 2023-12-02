import React from 'react'
import {Link} from 'react-router-dom'

function Project({projects}) {
  return (
    <div>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={projects.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{projects.title}</h2>
    <p>{projects.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
}

export default Project