import React from 'react';
import {ReactComponent as CasesNext} from '../assets/arrow-right.svg';
import {ReactComponent as CasesPrev} from '../assets/arrow-left.svg';

const caseStudies = [
    {
        id: 1,
        subtitle: 'Mountain',
        title: 'A bla bla bla bla bla',
        img: 'moutain'
    },
    {
        id: 2,
        subtitle: 'Retreat',
        title: 'A bla bla bla bla bla',
        img: 'yoga'
    },
    {id: 3,
        subtitle: 'Tropical',
        title: 'A bla bla bla bla bla',
        img: 'asia'
    }
];


const Cases = () => {
    return(
        <section className='cases'>
            <div className='container-fluid'> 
                <div className='cases-navigation'>
                    <div className='cases-arrow prev disabled'>
                        <CasesPrev />
                    </div>
                    <div className='cases-arrow next'>
                        <CasesNext />
                    </div>
                </div>
                <div className='row'>
                    {caseStudies.map((caseItem)=>(
                        <div className='case' key={caseItem.id}>
                             <div className='case-detail'>
                                <span>{caseItem.subtitle}</span>
                                <h2>{caseItem.title}</h2>
                             </div>
                             <div className='case-image'>
                                <img src={require(`../assets/${caseItem.img}.jpg`)} alt={caseItem.title}/>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cases;