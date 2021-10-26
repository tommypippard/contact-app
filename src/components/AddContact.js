import React from 'react';
import './App.css'

class AddContact extends React.Component {
     state = {
         name:"",
         email:"",
     }

     add = (e) => {
         e.preventDefault();
         if(this.state.name === "" || this.state.email === "") {
             alert("Please Fill All the Fields!");
             return
         }
         this.props.addContactHandler(this.state);
         this.setState({name:"", email:""});
     }
    render () {
        return (
            <div className="add-contact">
                <h2>Add Contact:</h2>
                <form className="contact-form" onSubmit={this.add} >
                    <div className="field">
                        <label>Name: </label>
                        <input type="text" name="name" placeholder="Enter Name Here" value={this.state.name} onChange={ (e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email: </label>
                        <input type="text" name="Email" placeholder="Enter Email Here" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})}/>
                    </div>
                    <button className="contact-button">Add</button>
                </form>
            </div>

        );
    }
}

export default AddContact;