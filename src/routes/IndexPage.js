import React from 'react'
import { Link } from 'react-router-dom'

function IndexPage(props) {
  return (
    <main>
        <section>
            <div className="indexpage-description">
            <h1>Welcome to <span className='header-left'>RecordeZ</span></h1>
            <h2>Your gateway to enriched academic experience</h2>
            <p>Explore the vast repository of recorded classes,discover concise topic description,and  access class links effortlessly</p>
            <Link to={'/signup'}>Sign Up</Link>
            </div>

            
        </section>
    </main>
  )
}

export default IndexPage