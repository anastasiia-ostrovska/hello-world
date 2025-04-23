import { ProfileInfoSection } from '@widgets/profile-info';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { userId } = useParams();

  return (
    <ProfileInfoSection
      userId={userId || ''}
      editImagesModalContent="Edit images content"
      editDetailsModalContent="Edit profile information content"
      contactsModalContent="User's contacts"
    />
  );
};

export default ProfilePage;
