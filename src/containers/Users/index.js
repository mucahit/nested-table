import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetch } from '$actions/users';

class Users extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  renderList(item) {
    return (
      <div key={item.ID} style={{ padding: '15px', background: '#eee', margin: '15px 0', boxShadow: '0 0 15px rgba(0,0,0,.07)' }}>
        {item.ID} {item.City} {item.Name}

        {
          item.children.length > 0 &&
            item.children.map(i => <div className="child" style={{ paddingLeft: '15px' }}>{this.renderList(i)}</div>)
        }
      </div>
    );
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        {
          users.items.map(i => this.renderList(i))
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
