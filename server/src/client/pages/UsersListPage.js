import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    console.log('users,', this.props.users);
    return this.props.users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ));
  }

  render() {
    return (
      <div>
      { this.props.users && Boolean(this.props.users.length) && Array.isArray(this.props.users) &&
        <div>
          Here's a big list of users:
          <ul>{this.renderUsers()}</ul>
        </div>
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
}