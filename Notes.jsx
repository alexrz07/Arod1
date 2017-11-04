import React from 'react';

const notes = [
  {
    
    task: 'Learn React'
  },
  {
    
    task: 'Do laundry'
  }
];

export default () => (
  <ul>{notes.map(note =>
    <li key={note.id}>{note.task}</li>
  )}</ul>
)