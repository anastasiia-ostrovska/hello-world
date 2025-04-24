import { ProfileInfoSection } from '@widgets/profile-info';
import { useParams } from 'react-router-dom';
import { ContactsInfo } from '@widgets/contacts-info';

const ProfilePage = () => {
  const { userId } = useParams();

  return (
    <ProfileInfoSection
      userId={userId || ''}
      editImagesModalContent="Edit images content"
      editDetailsModalContent="Edit profile information content"
      contactsModalContent={<ContactsInfo userId={userId || ''} />}
    />
  );
};

export default ProfilePage;
