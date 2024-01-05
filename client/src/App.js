import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  useEffect(() => {
    axios.get('http://localhost:3001/api/notes')
      .then(response => setNotes(response.data))
      .catch(error => console.error('Error fetching notes', error));
  }, []);

  const addNote = () => {
    axios.post('http://localhost:3001/api/notes', newNote)
      .then(response => {
        setNotes([...notes, response.data]);
        setNewNote({ title: '', content: '' });
      })
      .catch(error => console.error('Error adding note', error));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Notes App</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          className="form-control mt-2"
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        />
        <button className="btn btn-primary mt-2" onClick={addNote}>Add Note</button>
      </div>
      <ul className="list-group">
        {notes.map(note => (
          <li key={note.id} className="list-group-item">
            <h5 className="mb-1">{note.title}</h5>
            <p className="mb-1">{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
