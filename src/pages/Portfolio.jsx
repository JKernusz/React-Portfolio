import React from 'react'
import Project from '../components/Project'
import tripperImg from '../assets/picofme.png'
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
      image: tripperImg,
      description: 'Social media-type platform',
      link: 'https://whadaya-production.up.railway.app/',
      github: 'https://github.com/provardjake/Whadaya'
    },
    {
      id: 3,
      title: 'ArtBeats',
      image: tripperImg,
      description: 'Artistic media-type platform',
      link: 'https://jeremyblau.github.io/ArtBeats/',
      github: 'https://github.com/JeremyBlau/ArtBeats'
    },
    {
      id: 4,
      title: 'Coding Qwiz',
      image: tripperImg,
      description: 'Early dev. Quiz application',
      link: 'https://jkernusz.github.io/Coding-qWiz/',
      github: 'https://github.com/JKernusz/Coding-qWiz'
    },
    {
      id: 5,
      title: 'Work Scheduler',
      image: tripperImg,
      description: 'Calendar application',
      link: 'https://jkernusz.github.io/Work-Scheduler/',
      github: 'https://github.com/JKernusz/Work-Scheduler'
    },
    {
      id: 6,
      title: 'WeatherNow',
      image: tripperImg,
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