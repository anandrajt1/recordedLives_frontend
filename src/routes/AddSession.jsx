import React, { useRef } from 'react'
import { object,string, number, date } from 'yup'

function AddSession() {

  const formRef=useRef()

  const sessionSchema=object({
    name: string().required(),
    description:string().required(),
    date: date().default(() => new Date()).max(new Date()),
    week: number().required().positive().integer(),
    classNumber: number().required().positive().integer(),
    videoLink:string().url().required(),
    password:string()

  })

  


   async function handleSubmit(e){
        e.preventDefault()

        const form=formRef.current
        const name=form['name'].value
        const description=form['description'].value
        const date=form['date'].value
        const week=form['week'].value
        const classNumber=form['class'].value
        const videoLink=form['videoLink'].value
        const password=form['password'].value


        const data={
          name:name,
          description:description,
          date:date,
          week:week,
          class:classNumber,
          videoLink:videoLink,
          password:password
        }

        try {
          const recordedSession = await sessionSchema.validate(data);
        console.log(recordedSession)
          
        } catch (error) {
          console.log(error)
          
        }

        
    }


  return (
    <main>
          <section>
            <h1>Add a new session</h1>

            <form ref={formRef} className='authForm' onSubmit={handleSubmit}>
                <label htmlFor="name">Topic Name:</label>
                <input id='name' type="text" />

                <label htmlFor="description">Description:</label>
                <textarea  id="description" ></textarea>

                <label for="date">Date:</label>
                <input type="date" id="date" name="date"/> 

                <label htmlFor="week">Week:</label>
                <input id='week' type="number" />

                <label htmlFor="class">Class:</label>
                <input id='class' type="number" />

                <label htmlFor="videoLink">Video Link:</label>
                <input id='videoLink' type="text" />

                <label htmlFor="password">Password:</label>
                <input id='password' type="text" />

                <button type='submit'>Add Recorded Session</button>
            </form>
          </section>
    </main>
  )
}

export default AddSession