import { Component } from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '@/redux/reducers/profileReducer';
import { getUserProfile } from '@/services/api/api-requests';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';
import { useParams } from 'react-router-dom';
import Profile from './Profile';

const withRouter = (WrappedComponent) => {
  const ComponentWithRouter = (props) => {
    const params = useParams();

    return <WrappedComponent {...props} params={params} />;
  };

  return ComponentWithRouter;
};

class ProfileContainer extends Component {
  componentDidMount() {
    this.fetchUserProfileData();
  }

  fetchUserProfileData = async () => {
    const { setUserProfile, params } = this.props;
    let { userId } = params;

    if (!userId) {
      userId = '2';
    }

    const data = await getUserProfile(userId);
    setUserProfile(data);
  };

  render() {
    const { profile } = this.props;
    if (!profile) {
      return <LinearPreloader />;
    }
    return <Profile {...this.props} />;
  }
}

const mapState = ({ profile: { profile } }) => ({ profile });

export default connect(mapState, { setUserProfile })(
  withRouter(ProfileContainer)
);
