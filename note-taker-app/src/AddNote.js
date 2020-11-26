import React, { Component } from 'react';

class AddNote extends Component {
    state = {
      content: ''
    }
    handleChange = (e) => {
      this.setState({
        content: e.target.value
      });
    }
    handleSubmit = (e) => {
      e.preventDefault();
      // call function to add a note
      this.props.addNote(this.state);
      this.setState({
        content: ''
      })
    }
    render() {
      return (
        <div className="text-center my-4">
          <form onSubmit={this.handleSubmit}>
            <label className="text-primary">Add a new note:</label>
            <input className="py-1 mx-1 my-2 form-control required" type="text" onChange={this.handleChange} value={this.state.content} />
            <button type="submit" className="btn bg-success mx-2 mb-5">Add Note</button>
          </form>
        </div>
      )
    }
  }
export default AddNote