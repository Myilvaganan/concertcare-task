import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { getPosts, getUserByID } from './../actions/index';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(5),
    },
  },
}));

function PaginationRanges({ posts: { meta }, getPosts }) {
  const classes = useStyles();
  const totalPages = meta ? meta.pagination.pages : 20;

  const getPageNum = (e) => {
    getPosts(e.target.textContent ? e.target.textContent : 1);
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={totalPages}
        defaultPage={1}
        boundaryCount={2}
        color='secondary'
        size='large'
        showFirstButton
        showLastButton
        onChange={(e) => getPageNum(e)}
      />
    </div>
  );
}

PaginationRanges.propTypes = {
  getPosts: PropTypes.func.isRequired,
  getUserByID: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
  users: state.userReducer,
});

export default connect(mapStateToProps, { getPosts, getUserByID })(
  PaginationRanges
);
