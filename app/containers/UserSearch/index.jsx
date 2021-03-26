import { connect } from 'react-redux';
import UserSearch from './UserSearch';

import actions from '../../../redux/actions';

const mapStateToProps = (state) => ({
  userName: state.user.userName,
});

const mapDispatchToProps = (dispatch) => ({
  setUsername: (payload) => dispatch(actions.setUsername(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
