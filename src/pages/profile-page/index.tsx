import { ProfileInfoSection } from '@widgets/profile-info';
import { useParams } from 'react-router-dom';
import { ContactsInfo } from '@widgets/contacts-info';
import { ProfileImagesEditor } from '@widgets/profile-images-editor';

const ProfilePage = () => {
  const { userId } = useParams();

  return (
    <ProfileInfoSection
      userId={userId || ''}
      editImagesModalContent={<ProfileImagesEditor userId={userId || ''} />}
      editDetailsModalContent="Edit profile information content"
      contactsModalContent={<ContactsInfo userId={userId || ''} />}
    />
  );
};

export default ProfilePage;
