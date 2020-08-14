import React from 'react'
import { useSelector } from 'react-redux'
import AddSmurf from './AddSmurf'

const Home = () => {
    const smurfs = useSelector(state => state.smurfs)
    console.log(smurfs)
    return (
        <section className='homeMain'>
            <AddSmurf />
            <h3>The Smurf Village</h3>
            <div className='smurfVillage'>
            {
                smurfs.map( smurf => 
                    <article key={smurf.id} className='smurfCard'>
                        <h2>{smurf.name}</h2>
                        <p><strong>Age: </strong>{smurf.age}</p>
                        <p><strong>Height: </strong>{smurf.height}</p>
                    </article>
                )
            }
            </div>
        </section>
    )
}

export default Home