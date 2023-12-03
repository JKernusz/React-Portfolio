import React from 'react'
import {Link} from 'react-router-dom'

function Project({projects}) {
  return (
    <div>
    <div className="card w-96 bg-base-100 shadow-xl mx-2">
      <Link to={projects.github} >
        <figure><img src={projects.image} alt="Shoes"   /></figure>
      </Link>
  <div className="card-body">
    <h2 className="card-title">{projects.title}</h2>
    <p>{projects.description}</p>
    <div className="card-actions justify-end">
      <Link to={projects.link}>
        <button className="btn btn-primary">Link</button>
      </Link>
    </div>
  </div>
</div>
    </div>
  );
}

export default Project