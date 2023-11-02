import './UserProfile.css';

const UserProfile = ({ userName }) => {
    const isOnline = userName.available;

    return (
        <>
            <span className={`userProfile ${isOnline ? 'online' : 'offline'}`}>
                {userName.name.substring(0, 2).toUpperCase()}
            </span>
        </>
    );
};

export default UserProfile;
