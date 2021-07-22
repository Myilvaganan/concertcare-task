import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {
  getPostByUser,
  getUserByID,
  getTodos,
  deletePost,
} from './actions/index';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from './utils/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';
const UserProfile = ({
  match,
  history,
  getUserByID,
  getPostByUser,
  getTodos,
  deletePost,
  posts: { post, post_loading },
  users: { user, user_loading },
}) => {
  const { id } = match.params;
  const [deleted, setDeleted] = React.useState(false);

  useEffect(() => {
    getUserByID(id);
    getPostByUser(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUserByID, getPostByUser, deleted, id]);

  const deleteHandler = (post_id) => {
    deletePost(post_id);
    toastify();
    setTimeout(() => {
      setDeleted(true);
    }, 1000);
  };

  const toastify = () => {
    toast.success('Post has been Deleted successfully !');
  };

  return (
    <Container className='my-5'>
      {post_loading && user_loading ? (
        <Loader />
      ) : (
        <>
          <Row>
            <ToastContainer />
            <Col className='d-flex justify-content-between '>
              <Button id='back-btn' className='mb-4'>
                <Link to='/concertcare-task'>&larr; Go To Home</Link>
              </Button>
              <Button id='back-btn' className='mb-4 create'>
                <Link to={`/user/${id}/create`}>Create New Post</Link>
              </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card className='card'>
                <Card.Body className='d-flex flex-column justify-content-center align-items-center  text-center'>
                  <Card.Title className='name-style userName'>
                    {user.name}
                  </Card.Title>
                  <Card.Text className='text-style email'>
                    {user.email}
                  </Card.Text>
                  <Card.Text className='text-style gender'>
                    {user.gender}
                  </Card.Text>
                  <Card.Text className='text-style my-3'>
                    <span className='status'>{user.status}</span>
                  </Card.Text>
                </Card.Body>
                <Button
                  id='back-btn'
                  className='mb-4 todo-btn'
                  onClick={(e) => getTodos(user.id)}
                >
                  <Link to={`/user/${user.id}/todos`}>
                    {user.name}'s Todos &#8594;
                  </Link>
                </Button>
              </Card>
            </Col>
          </Row>
          <Row>
            {post.length ? (
              post.map((post_i) => {
                return (
                  <Col
                    key={post_i.id}
                    md={6}
                    className='my-4 d-flex align-items-stretch justify-content-center'
                  >
                    <Card className='card'>
                      <Card.Body className='d-flex flex-column justify-content-center align-items-center  text-center'>
                        <Card.Title>{post_i.title}</Card.Title>
                        <Card.Text>{post_i.body}</Card.Text>
                      </Card.Body>
                      <Button
                        onClick={(e) => deleteHandler(post_i.id)}
                        id='delete-btn'
                      >
                        Delete
                      </Button>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <Col className='my-4 d-flex align-items-stretch justify-content-center'>
                <h4>Oops! No Posts for this user</h4>
              </Col>
            )}
          </Row>
        </>
      )}
    </Container>
  );
};

UserProfile.propTypes = {
  getUserByID: PropTypes.func.isRequired,
  getPostByUser: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.postReducer,
  users: state.userReducer,
});

export default connect(mapStateToProps, {
  getPostByUser,
  getUserByID,
  getTodos,
  deletePost,
})(UserProfile);
