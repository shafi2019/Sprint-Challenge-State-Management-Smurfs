import React from 'react'
import {connect} from 'react-redux';
import {addSmurf} from '../actions/index';
import axios from 'axios';

class SmurfForm extends React.Component {
    constructor(props){
        super(props);

    this.state = {
        name: '',
        age: '',
        height:''
    }
}
     test = (e)=>{
         e.preventDefault();
       axios.post('http://localhost:3333/smurfs',e.target.value 
      )}

     addNewSmurf = e => {
         e.preventDefault()

         const newSmurf = this.state
         this.props.addSmurf(newSmurf)
         this.setState({
            name: '',
            age: '',
            height: ''
         })

     }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    };

render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addNewSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs

    }
}

export default connect(
    mapStateToProps,
    {addSmurf}
)(SmurfForm)