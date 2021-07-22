import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions';

const CreatePostForm = ({ match, history, createPost, posts: { posts } }) => {
  const id = match.params.id;
  const [formData, setFormData] = React.useState({
    title: '',
    body: '',
  });
  console.log(posts);

  const submitHandler = (e) => {
    e.preventDefault();
    createPost(id, formData);
    setFormData({ title: '', body: '' });
    toastify();
    setTimeout(() => {
      history.push(`/user/${id}`);
    }, 6000);
  };

  const toastify = () => {
    toast.success('Post has been created successfully !');
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container className='my-5'>
      <ToastContainer />
      <Button id='back-btn' className='mb-4'>
        <Link to={`/user/${id}`}>&larr; Go Back</Link>
      </Button>
      <Row>
        <Col md={6}>
          <h3>Create New Post</h3>
          <Form className='form my-4' onSubmit={submitHandler}>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                as='textarea'
                rows={2}
                name='title'
                value={formData.title}
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Body</Form.Label>
              <Form.Control
                as='textarea'
                rows={6}
                name='body'
                value={formData.body}
                onChange={changeHandler}
              />
            </Form.Group>
            <Button variant='dark' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

CreatePostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.postReducer,
});

export default connect(mapStateToProps, { createPost })(CreatePostForm);
