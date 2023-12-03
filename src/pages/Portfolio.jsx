import React from 'react'
import Project from '../components/Project'
import tripperImg from '../assets/tripper.png'
import whadayaImg from '../assets/whadaya.jpeg'
import artbeatsImg from '../assets/artbeats.png'
import weathernowImg from '../assets/weathernow.png'
import workdayImg from '../assets/workdayscheduler.png'
import codingqwizImg from '../assets/codingqwiz.png'

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Tripper',
      image: tripperImg,
      description: 'Social media-type platform',
      link: 'https://tripper.up.railway.app/',
      github: 'https://github.com/itsmenickfromschool/tripper'
    },
    {
      id: 2,
      title: 'Whadaya',
      image: whadayaImg,
      description: 'Social media-type platform',
      link: 'https://whadaya-production.up.railway.app/',
      github: 'https://github.com/provardjake/Whadaya'
    },
    {
      id: 3,
      title: 'ArtBeats',
      image: artbeatsImg,
      description: 'Artistic media-type platform',
      link: 'https://jeremyblau.github.io/ArtBeats/',
      github: 'https://github.com/JeremyBlau/ArtBeats'
    },
    {
      id: 4,
      title: 'Coding Qwiz',
      image: codingqwizImg,
      description: 'Early dev. Quiz application',
      link: 'https://jkernusz.github.io/Coding-qWiz/',
      github: 'https://github.com/JKernusz/Coding-qWiz'
    },
    {
      id: 5,
      title: 'Work Scheduler',
      image: workdayImg,
      description: 'Calendar application',
      link: 'https://jkernusz.github.io/Work-Scheduler/',
      github: 'https://github.com/JKernusz/Work-Scheduler'
    },
    {
      id: 6,
      title: 'WeatherNow',
      image: weathernowImg,
      description: 'Early dev. weather application',
      link: 'https://jkernusz.github.io/WeatherNow/',
      github: 'https://github.com/JKernusz/WeatherNow'
    }

  ]
  return (
    <div className="flex flex-column flex-wrap">
        
   {projects.map(project => (
    
    <Project key={project.id} projects={project} />
    
  ))}
        

    </div>
      
  )
}

export default Portfolio

