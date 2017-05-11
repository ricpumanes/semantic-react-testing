import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Songs from '../components/Songs';
import getSongsList from '../actions/songs';

const mapStateToProps = state => state.songsReducer;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getSongsList,
  }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
