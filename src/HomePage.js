import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts, getUsers, getUserByID } from './actions/index';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PaginationRanges from './utils/Pagination';
import Loader from './utils/Loader';
const HomePage = ({
  getPosts,
  getUsers,
  getUserByID,
  posts: { posts, post_loading },
  users: { user, user_loading },
}) => {
  const showAuthor = useCallback(
    (id) => {
      getUserByID(id);
    },
    [getUserByID]
  );

  useEffect(() => {
    getPosts(1);
    getUsers();
  }, [getPosts, getUsers]);

  return (
    <Container className='my-5'>
      {post_loading && user_loading ? (
        <Loader />
      ) : (
        <>
          <Row>
            <Col md={12} className='mb-5 d-flex justify-content-end'>
              <PaginationRanges getPosts={getPosts} />
            </Col>
          </Row>
          <Row>
            {posts.data  ? (
              posts.data.map((post_i, item) => {
                return (
                  <Col
                    key={post_i.id}
                    md={4}
                    className='my-2 d-flex align-items-stretch justify-content-center'
                  >
                    <Card className='card'>
                      <span className='mark'>{item + 1}</span>
                      <Card.Body className='d-flex flex-column justify-content-center align-items-center  text-center'>
                        <Card.Title className='author-name'>
                          {' '}
                          <Link to={`/user/${post_i.user_id}`}>
                            {user.id === post_i.user_id
                              ? `Author: ${user.name}`
                              : null}
                          </Link>
                        </Card.Title>
                        <Card.Title>{post_i.title}</Card.Title>
                        <Card.Text>{post_i.body}</Card.Text>
                        <Card.Subtitle className='mb-2 text-muted subtitle'></Card.Subtitle>
                        <button
                          id='show-author-btn'
                          onClick={(e) => showAuthor(post_i.user_id)}
                        >
                          <Link to={`/user/${post_i.user_id}`}>
                            {user.id === post_i.user_id
                              ? user.name
                              : 'Show Author'}
                          </Link>
                        </button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <Col className='my-4 d-flex align-items-stretch justify-content-center'>
                <Loader />
              </Col>
            )}
          </Row>
          <Col md={12} className='mb-5 d-flex justify-content-end'>
            <PaginationRanges />
          </Col>
        </>
      )}
    </Container>
  );
};

HomePage.propTypes = {
  getPosts: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  getUserByID: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.postReducer,
  users: state.userReducer,
});

export default connect(mapStateToProps, { getPosts, getUsers, getUserByID })(
  HomePage
);
