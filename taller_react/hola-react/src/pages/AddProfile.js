import React from 'react';

import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import ProfileForm from '../components/ProfileForm';

class AddProfile extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Profile name="Omar Yahir" jobRole="Software Engineer" yourAccount="omaryahir" />
                <ProfileForm />
            </div>
        )
    }
}

export default AddProfile;