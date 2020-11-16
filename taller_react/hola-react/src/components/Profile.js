import React from 'react';

import './styles/Profile.css';
import profileIcon from '../images/profile.svg';

class Profile extends React.Component {
    render() {
        return <div className="Profile">

            <div className="image">
                <img src={profileIcon} alt="Person face" />                
            </div>

            <div className="name">
                <h2>{this.props.name}</h2>                
                <p>{this.props.jobRole}</p>
            </div>

            <div className="footer">
                #MySystem
                @{this.props.accountName}
            </div>

            </div>;
    }
}

export default Profile;