import { ProfileInfoSection } from '@widgets/profile-info';
import { useParams } from 'react-router-dom';
import { ContactsInfo } from '@widgets/contacts-info';
import { ProfilePhotosEditor } from '@widgets/profile-photos-editor';

const ProfilePage = () => {
  const { userId } = useParams();

  return (
    <ProfileInfoSection
      userId={userId || ''}
      editImagesModalContent={<ProfilePhotosEditor userId={userId || ''} />}
      editDetailsModalContent="Edit profile information content"
      contactsModalContent={<ContactsInfo userId={userId || ''} />}
    />
  );
};

export default ProfilePage;
