import React, { Component } from 'react';
import Notes from './Notes';
import AddNote from './AddNote';

class App extends Component {
  state = {
    notes: [
      {id: 1, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {id: 2, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}

    ]
  }
  showNote = (id) => {
    console.log(id);
  }
  addNote = (note) => {
    note.id = Math.random();
    let notes = [...this.state.notes, note];
    this.setState({
      notes
    });
  }
  deleteNote = (id) => {
    const notes = this.state.notes.filter(note => {
      return note.id !== id
    });
    this.setState({
      notes
    })
  }
  render() {
    return (
      <div className="note-taker-app container">
        <AddNote addNote={this.addNote} className="my-5"/>
        <h1 className="text-center text-primary">Notes</h1>
        <Notes notes={this.state.notes} deleteNote={this.deleteNote} />    
      </div>
    );
  }
}

export default App;
