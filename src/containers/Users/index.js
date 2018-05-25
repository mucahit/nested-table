import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetch } from '$actions/users';

class Users extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        {
          users.items.map(i => <div key={i.ID}>{i.City} {i.Name}</div>)
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: bindActionCreators(fetch, dispatch),
  };
}

Users.propTypes = {
  users: PropTypes.object,
  fetch: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
