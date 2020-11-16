import React from 'react';

import './styles/ProfileForm.css';

class ProfileForm extends React.Component {

    handleChange = (e) => {
        console.log({ name: e.target.name, value: e.target.value });
    }


    render () {
        return (
            <div className="ProfileForm"> 
                <div className="fields"> 
                    <h1> New Person </h1>
                    <form action="">

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

                        <button>Save</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default ProfileForm;