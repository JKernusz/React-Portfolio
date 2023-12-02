import React from 'react'
import {Link} from 'react-router-dom'

function Resume() {
  return (
    <div>
      <div className="text-6xl m-3">Resume</div>
      <div>Resume is still in progress thank you for your patience. if you need a copy expidited please contact me via the <Link to = "/contact">Contact page</Link></div>
    </div>
  )
}

export default Resume