import { connect } from 'react-redux';
import RepositorySearch from './RepositorySearch';

import actions from '../../../redux/actions';

const mapStateToProps = (state) => ({
  repositoryName: state.repository.repositoryName,
});

const mapDispatchToProps = (dispatch) => ({
  setRepositoryName: (payload) => dispatch(actions.setRepositoryName(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RepositorySearch);
