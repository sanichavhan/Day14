import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [notes, setNotes] = useState([])
  function fetchNotes() {
    axios.get('https://day14.onrender.com/notess')
    .then((response) => {
      setNotes(response.data.notes)
    })
    .catch((error) => {
      console.error('Error fetching notes:', error)
    })
  }

  useEffect(() =>{
     fetchNotes()
  },[])

  function handleSubmit(e) {
    e.preventDefault()
    const {title, description} = e.target.elements;
    console.log(title.value, description.value)
    axios.post('https://day14.onrender.com/notess',{
      title:title.value, description:description.value})
      .then((response) => {
        console.log('Note created successfully:', response.data)
        fetchNotes()
      })
    }
   
  return (
    <>
    <form className="note-form" onSubmit={handleSubmit}>
      <input name = "title" type="text" placeholder='Title' />
      <input name = "description" type="text" placeholder='Description' />
      <button type='submit'>Create Note</button> 
    </form>
    <div className='notes'>
      {notes.map((elem,idx) => {
        return (
          <div className="note" key={idx}>
            <h3>{elem.title}</h3>
            <p>{elem.description}</p>
            <button onClick={() => {
              axios.delete(`https://day14.onrender.com/notess/${elem._id}`)
                .then(() => {
                  fetchNotes()
                })
            }}>Delete</button>
            <button onClick={() => {
              const updatedTitle = prompt("Enter updated title:", elem.title)
              const updatedDescription = prompt("Enter updated description:", elem.description)
              if (updatedTitle && updatedDescription) {
                axios.patch(`https://day14.onrender.com/notess/${elem._id}`, {
                  title: updatedTitle,
                  description: updatedDescription
                })
                .then(() => {
                  fetchNotes()
                })
              }
            }}>Update</button>
          </div>
        )
      })}
    </div>
    </>
  )

}

export default App

