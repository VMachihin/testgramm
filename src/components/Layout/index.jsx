import React from 'react';
import { Layout } from 'antd';
import { Header } from '../Header';
import { Footer } from '../Footer';
import PropTypes from 'prop-types';

export const LayoutRoot = ({ id, nickname, avatarUrl, children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header id={id} nickname={nickname} avatarUrl={avatarUrl} />

      <Layout.Content style={{ margin: 'auto', maxWidth: 1080 }}>
        {children}
      </Layout.Content>

      <Footer />
    </Layout>
  );
};

LayoutRoot.propTypes = {
  id: PropTypes.number,
  nickname: PropTypes.string,
  avatarUrl: PropTypes.string,
  children: React.Node,
};
