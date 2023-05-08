import React from 'react'
import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import mealTimeImage from '../public/images/projects/meal-time.png'
import foodiesImage from '../public/images/projects/foodies.png'
import dogWalkingImage from '../public/images/projects/dog-walking-htx.png'
import decisiveDigitalMarketingImage from '../public/images/projects/decisive-digital-marketing.png'
import dogAdventuresImage from '../public/images/projects/dog-adventures.png'
import tripSaveImage from '../public/images/projects/trip-save.png'
import onRecallImage from '../public/images/projects/on-recall.png'
import ProjectItem from '../components/projectItem'

function Projects() {
  return (
    <div>
        <Layout>
            <Head>
                {siteTitle}
            </Head>   
        </Layout>
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='py-6 text-xl tracking-widest uppercase text-[#1DB954]'>Projects</p>
                <h2 className='pb-8'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem title='Meal Time App' appImage={mealTimeImage} projectUrl='/projects/meal-time' techStack='React, Rails & PostgreSQL'/>
                    <ProjectItem title='Foodies App' appImage={foodiesImage} projectUrl='/projects/foodies' techStack='React, Rails & PostgreSQL' />
                    <ProjectItem title='Dog Walking HTX Website' appImage={dogWalkingImage} projectUrl='/projects/dog-walking-htx' techStack='WordPress, Elementor & Hostinger'/>
                    <ProjectItem title='Decisive Digital Marketing Website' appImage={decisiveDigitalMarketingImage} projectUrl='/projects/ddm' techStack='WordPress, Elementor & HostGator'/>
                    <ProjectItem title='Dog Adventures App' appImage={dogAdventuresImage} projectUrl='/projects/dog-adventures' techStack='React, Sinatra & SQLite'/>
                    <ProjectItem title='Trip Save App' appImage={tripSaveImage} projectUrl='/projects/trip-save' techStack='React'/>
                    <ProjectItem title='On Recall App' appImage={onRecallImage} projectUrl='/projects/on-recall' techStack='HTML, CSS & JavaScript'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects