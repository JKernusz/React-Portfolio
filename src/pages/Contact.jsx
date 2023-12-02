import React from 'react'
import {Link} from 'react-router-dom'
function Contact() {
  return (
    <div>
      <h1 className="text-6xl m-3">Contact me</h1>
      <Link className="text-2xl m-3" to="mailto:jkernusz1346@gmail.com">Email</Link> <Link className="text-2xl m-3" to="https://uofuvirtfsfpt-0wd8547.slack.com/team/U059SE889FH">Slack</Link> <Link className="text-2xl m-3" to="https://github.com/jkernusz">Github </Link>
    </div>
    )
    
}

export default Contact