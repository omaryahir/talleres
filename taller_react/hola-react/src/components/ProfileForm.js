import React from 'react';

import './styles/ProfileForm.css';

class ProfileForm extends React.Component {

    handleChange = (e) => {
        console.log({ name: e.target.name, value: e.target.value });
    }

    handleClick = (e) => {
        console.log("button was clicked");
    }

    handleSubmit = (e) => {
        console.log("handle submit !!!")
    }


    render () {
        return (
            <div className="ProfileForm"> 
                <div className="fields"> 
                    <h1> New Person </h1>
                    <form onSubmit={this.handleSubmit} action="">

                        <div className="inputForm">
                            <label htmlFor="name">Name:</label>
                            <input onChange={this.handleChange} type="text" name="name" />
                        </div>

                        <div className="inputForm">
                            <label htmlFor="jobRole">Role:</label>
                            <input onChange={this.handleChange} type="text" name="jobRole" />
                        </div>

                        <div className="inputForm">
                            <label htmlFor="accountName">Account:</label>
                            <input onChange={this.handleChange} type="text" name="accountName" />
                        </div>

                        <button type="submit" onClick={this.handleClick}>Save</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default ProfileForm;