import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const smurfs = useSelector(state => state.smurfs)
    console.log(smurfs)
    return (
        <section>
            <h3>The Smurf Village</h3>
            {
                smurfs.map( smurf => 
                    <article key={smurf.id}>
                        <h5>{smurf.name}</h5>
                        <p><strong>Age: </strong>{smurf.age}</p>
                        <p><strong>Height: </strong>{smurf.height}</p>
                    </article>
                )
            }
        </section>
    )
}

export default Home