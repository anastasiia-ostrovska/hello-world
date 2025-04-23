import { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { EditButton } from '@shared/ui';
import { AvatarPosition, AvatarWithBgImage } from '@entities/user';
import { FollowButton, NetworkInfoNavigation, UserInfo } from '@features/user';
import { ShowModalButton } from '@features/show-modal-button';
import { MessageNavButton } from '@features/message-nav-button';
import { useUserProfileInfo } from '../modal/useUserProfileInfo';
import ProfileAvatarSectionLayout from './ProfileInfoSectionLayout';

interface ProfileAvatarSectionProps {
  userId: string;
  editImagesModalContent: ReactNode;
  editDetailsModalContent: ReactNode;
  contactsModalContent: ReactNode;
}

const ProfileInfoSection = ({
  userId,
  editImagesModalContent,
  editDetailsModalContent,
  contactsModalContent,
}: ProfileAvatarSectionProps) => {
  const { palette } = useTheme();
  const { user, isLoading, isMyProfile, networkCount, imageSize } =
    useUserProfileInfo({ userId });

  return (
    <ProfileAvatarSectionLayout
      isLoading={isLoading}
      isMyProfile={isMyProfile}
      photosBlock={
        <AvatarWithBgImage
          name={user.name}
          avatarSrc={user.photos.avatar}
          bgImageSrc={user.photos.background}
          avatarSize={imageSize}
          bgImageHeight={imageSize}
          avatarPosition={AvatarPosition.Left}
          avatarBorderColor={palette.customBackground.sectionWrapper}
          avatarBorderWidth="4px"
          sx={{ mb: `${imageSize / 2}px` }}
        />
      }
      editImagesButton={
        <ShowModalButton
          showModalButton={
            <EditButton
              tooltipTitle="Change profile images"
              isDisabled={isLoading}
              sx={{
                position: 'absolute',
                right: { xs: 4, sm: 8, md: 12 },
                top: { xs: 4, sm: 8, md: 12 },
                backgroundColor: 'customBackground.sectionWrapperTransparent',
                borderRadius: '50%',
              }}
            />
          }
          modalTitle="Change profile images"
          modalContent={editImagesModalContent}
        />
      }
      editProfileInfoButton={
        <ShowModalButton
          showModalButton={
            <EditButton
              tooltipTitle="Edit profile details"
              isDisabled={isLoading}
              sx={{
                position: 'absolute',
                right: { xs: 4, sm: 8, md: 12 },
                top: imageSize + 10,
              }}
            />
          }
          modalTitle="Edit profile information"
          modalContent={editDetailsModalContent}
        />
      }
      userDescription={
        <UserInfo
          isLoading={isLoading}
          name={user.name}
          jobTitle={user.job}
          country={user.country}
          noWrap={false}
        />
      }
      showContactsButton={
        <ShowModalButton
          showModalButton={
            <Button variant="text" size="small" sx={{ ml: '-5px' }}>
              Contact info
            </Button>
          }
          modalTitle={`${user.name}. Contacts`}
          modalContent={contactsModalContent}
        />
      }
      networkInfoNavigation={
        <NetworkInfoNavigation
          userId={userId}
          followingCount={networkCount.following}
          followersCount={networkCount.followedBy}
          isLoading={isLoading}
          sx={{ ml: '-8px', mt: '-8px' }}
        />
      }
      followButton={
        <FollowButton
          userId={userId}
          isLoading={isLoading}
          sx={{ width: '100%' }}
        />
      }
      messageNavButton={
        <MessageNavButton
          userId={userId}
          name={user.name}
          sx={{ width: '100%' }}
        />
      }
    />
  );
};

export default ProfileInfoSection;
