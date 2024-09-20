import { Component } from 'react';
import { connect } from 'react-redux';
import { setUserProfileData } from '@/redux/reducers/profileReducer';
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
    const { params, setUserProfileData } = this.props;
    const userId = params.userId || '2';
    setUserProfileData(userId);
  }

  render() {
    const { profile } = this.props;
    if (!profile) {
      return <LinearPreloader />;
    }
    return <Profile {...this.props} />;
  }
}

const mapState = ({ profile: { profile } }) => ({ profile });

export default connect(mapState, { setUserProfileData })(
  withRouter(ProfileContainer)
);
