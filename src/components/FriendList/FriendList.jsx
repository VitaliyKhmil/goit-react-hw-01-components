import PropTypes from 'prop-types';
import { FriendListContainer, FriendListItem, OnLineStatus, Avatar } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
    return <FriendListContainer>
        {friends.map(({ avatar, name, isOnline, id }) =>
                <FriendListItem key={id}>
                    <Avatar src={avatar} alt={name} />
                <OnLineStatus status={isOnline}></OnLineStatus>
                    <p>{name}</p>
                </FriendListItem>
        )}
    </FriendListContainer>
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired
}