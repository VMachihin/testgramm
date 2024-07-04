import { Layout, Typography, Flex } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserBadge } from '../UserBadge';

export const Header = ({ id, avatarUrl, nickname }) => {
  return (
    <Layout.Header
      style={{
        backgroundColor: '#fff',
        height: 60,
        width: '100%',
        borderBottom: '1px solid #dbdbdb',
      }}
    >
      <Flex justify='space-between' align='center'>
        <Link to='/'>
          <Typography.Text>TestGramm</Typography.Text>
        </Link>

        <UserBadge id={id} avatarUrl={avatarUrl} nickname={nickname} />
      </Flex>
    </Layout.Header>
  );
};

Header.propTypes = {
  id: PropTypes.number,
  avatarUrl: PropTypes.string,
  nickname: PropTypes.string,
};
