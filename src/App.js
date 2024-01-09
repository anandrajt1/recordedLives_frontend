
import './App.css';
import { useState } from 'react';

function App() {
  const[batches,setBatches]=useState([
    {
      batchName:'E2'
    },
    {
      batchName:'E23'
    },
    {
      batchName:'E28'
    },
    {
      batchName:'E26'
    },
    {
      batchName:'E27'
    },
    {
      batchName:'E18'
    }
  ])
  return (
   <>
  <main>
   <h2>Batches</h2>

<ul className="batchList"> 
   {
   batches.map((batch,index)=>{
    return(
      <li className='batch'>{batch.batchName}</li>
    )
   })
   }


</ul>
  
</main>
   </>
  );
}

export default App;
