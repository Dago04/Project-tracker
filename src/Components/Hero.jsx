import React from 'react'
import '../Styles/Hero.css'

import Device from '../assets/images/illustration-devices.svg'
export default function Hero() {
    return (
        <main>
            <div className='col-1'>
                <img src={Device} alt='illustration' />
            </div>
            <div className='col-2'>
                <div className='news'>
                    <button className='btn-new'>NEW</button>
                    <p>MONOGRAPH DASHBOARD</p>
                </div>
                <h1>Powerful insights into your team</h1>
                <p className='project-planning'>Project planning and time tracking for agile teams</p>

                <div className='bottom'>
                    <button>Schedule a demo</button>
                    <p>to see a preview</p>
                </div>
            </div>

        </main>
    )
}
