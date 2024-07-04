import { Card, Flex, Input, Typography } from 'antd';
import { HeartFilled, HeartOutlined, MessageOutlined } from '@ant-design/icons';
import { UserBadge } from '../UserBadge';
import { Comment } from '../Comment';

import PropTypes from 'prop-types';

import './detailedCard.scss';
import { useState } from 'react';

export const DetailedCard = ({
  userName,
  avatarUrl,
  userId,
  imageUrl,
  likes = 10,
  comments,
  isLikedByYou,
}) => {
  const [isCommentsShown, setIsCommentsShown] = useState(false);
  const renderComments = () => {
    if (comments.length > 2 && !isCommentsShown) {
      const commentsCopy = [...comments];
      const commentsForRender = commentsCopy.splice(-2, 2);

      return (
        <>
          <span
            className='detailedCard__viewAllComments'
            onClick={() => setIsCommentsShown(true)}
          >
            Показать ещё {comments.length - renderComments.length} комментариев
          </span>

          {commentsForRender.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </>
      );
    }

    return comments.map((comment) => <Comment key={comment.id} {...comment} />);
  };
  return (
    <Flex vertical>
      <Card className='detailedCard' style={{ padding: 0 }}>
        {' '}
        <div className='detailedCard__header'>
          <UserBadge nickname={userName} avatarUrl={avatarUrl} id={userId} />
        </div>
        <img
          src={imageUrl}
          alt='фото карточки'
          style={{ width: '100%' }}
          className='detailedCard__image'
        />
        <Flex gap={10} style={{ paddingInline: 10 }}>
          {isLikedByYou ? <HeartFilled /> : <HeartOutlined />}

          <MessageOutlined />
        </Flex>
        <Flex>
          <Typography.Text className='detailedCard__likes'>
            Оценили {likes} человек
          </Typography.Text>
        </Flex>
        <Flex vertical gap={5} className='detailedCard__comments'>
          {renderComments()}
        </Flex>
        <Input.TextArea className='detailedCard__textArea'></Input.TextArea>
      </Card>
    </Flex>
  );
};

DetailedCard.propTypes = {
  userName: PropTypes.string,
  avatarUrl: PropTypes.string,
  userId: PropTypes.number,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  isLikedByYou: PropTypes.bool,
  comments: PropTypes.array,
};
