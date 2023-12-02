import React from 'react'
import picofmeImage from "../../src/assets/picofme.png"
function About() {
    return (
        <div className='flex flex-row'>
           <img className=" m-12"src= {picofmeImage}></img>
            <div className=""><h1 className="text-6xl m-3">About Me </h1>
            <div className="flex-wrap"><h2 className="text-xl m-3 ">"I'm a driven and passionate full stack web developer with over 10 years of experience in the automotive industry. I've always had a knack for technology and a passion for problem-solving, which led me to make the switch from automotive service to development. I'm a graduate of the University of Utah's full stack development coding bootcamp. A well rounded developer who loves learning new technologies and techniques. When I'm not coding, you can find me modifying my car, playing games, or dirtbiking in the mountains. I'm originally from New Jersey, but have been living in Salt Lake City for the past few years. I'm excited to apply my skills and knowledge to help businesses and organizations grow and thrive through the power of web development!"</h2></div>
           </div>
        </div>
    )
}

export default About