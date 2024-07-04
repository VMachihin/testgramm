import { Flex, Typography } from 'antd';
import PropTypes from 'prop-types';

import './comment.scss';

export const Comment = ({ nickname, text }) => {
  return (
    <Flex gap={5} className='comment'>
      <Typography.Text className='comment__name'>{nickname}</Typography.Text>
      <Typography.Text className='comment__text'>{text}</Typography.Text>
    </Flex>
  );
};

Comment.PropTypes = {
  nickname: PropTypes.string,
  text: PropTypes.string,
};
