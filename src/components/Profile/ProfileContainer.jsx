import { Component } from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '@/redux/reducers/profileReducer';
import { getUserProfile } from '@/services/api/getQueries';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';
import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    const { setUserProfile } = this.props;
    const params = `/2`;
    getUserProfile(params).then((response) => {
      setUserProfile(response.data);
    });
  }

  render() {
    if (!this.props.profile) {
      return <LinearPreloader />;
    }
    return <Profile {...this.props} />;
  }
}

const mapState = ({ profile: { profile } }) => ({ profile });

export default connect(mapState, { setUserProfile })(ProfileContainer);
