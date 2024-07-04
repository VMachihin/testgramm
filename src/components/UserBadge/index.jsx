import { Flex, Typography } from 'antd';
import PropTypes from 'prop-types';

import './userBadge.scss';
import { useNavigate } from 'react-router';

export const UserBadge = ({ id, avatarUrl, nickname }) => {
  const navigate = useNavigate();

  const onUserBadgeClick = () => {
    navigate(`/${id}`);
  };
  return (
    <Flex style={{ cursor: 'pointer' }} onClick={onUserBadgeClick}>
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt='аватар пользователя'
          className='userBadgeAvatar'
        />
      ) : (
        <div className='userBadgeAvatarPlaceholder' />
      )}

      <Typography.Text>{nickname}</Typography.Text>
    </Flex>
  );
};

UserBadge.propTypes = {
  id: PropTypes.number,
  avatarUrl: PropTypes.string,
  nickname: PropTypes.string,
};
