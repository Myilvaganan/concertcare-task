import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Loader from './utils/Loader';
import { getTodos } from './actions';
import { Link } from 'react-router-dom';

const Todos = ({ match, todos: { todos, todo_loading }, getTodos }) => {
  const id = match.params.id;

  useEffect(() => {
    getTodos(id);
  }, [getTodos, id]);
  console.log(todos);
  return (
    <Container className='my-5 todo'>
      {todo_loading ? (
        <Loader />
      ) : (
        <>
          <Button id='back-btn' className='mb-4'>
            <Link to={`/user/${id}`}>&larr; Go Back </Link>
          </Button>
          <Row>
            {todos.length ? (
              todos.map((todo) => {
                return (
                  <Col
                    key={todo.id}
                    md={3}
                    className='my-4 d-flex align-items-stretch justify-content-center'
                  >
                    <Card className='card'>
                      <Card.Body className='d-flex flex-column justify-content-center align-items-center  text-center'>
                        <Card.Title className='todo-text title'>
                          {todo.title}
                        </Card.Title>
                        <Card.Text className='status' id='todo-status'>
                          {todo.status}
                        </Card.Text>
                        <Card.Text className='todo-text date'>
                          {todo.due_on.slice(0, 10)}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <Col className='my-4 d-flex align-items-stretch justify-content-center'>
                <h4>Oops! No Todos for this user</h4>
              </Col>
            )}
          </Row>
        </>
      )}
    </Container>
  );
};

Todos.propTypes = {
  todos: PropTypes.object.isRequired,
  getTodos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.userReducer,
});

export default connect(mapStateToProps, { getTodos })(Todos);
