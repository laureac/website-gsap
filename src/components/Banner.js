import React from 'react';
import {ReactComponent as RightArrow } from '../assets/arrow-right.svg';

const Banner = () =>{
    return (
        <section className='main'>
            <div className="container">
                <div className='row'>
                    <h2>
                        <div className='line'>
                            <span>All Level Meditation, Qigong,</span>
                        </div>
                        <div className='line'>
                            <span>and Yoga Studio.</span>
                        </div>
                    </h2>
                    <div className='btn-row'>
                        <a href='/'>Check it out<RightArrow /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Banner;