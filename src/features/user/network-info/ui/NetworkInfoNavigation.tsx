import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/consts';
import Stack, { StackProps } from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import NetworkInfo from './NetworkInfo';

interface NetworkNavButtonProps {
  userId: string;
  children: ReactNode;
}

const NetworkNavButton = ({ userId, children }: NetworkNavButtonProps) => {
  return (
    <Link
      to={`${ROUTES.PROFILE_NETWORK}/:${userId}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <IconButton sx={{ borderRadius: 1 }}>{children}</IconButton>
    </Link>
  );
};

interface NetworkInfoNavigationProps extends StackProps {
  userId: string;
  followingCount: number;
  followersCount: number;
  isLoading: boolean;
}

const networkInfoStyles = {
  spacing: { xs: 0.5, sm: 0 } as StackProps['spacing'],
  direction: { xs: 'row', sm: 'column' } as StackProps['direction'],
};

const NetworkInfoNavigation = ({
  userId,
  followingCount,
  followersCount,
  isLoading,
  ...wrapperProps
}: NetworkInfoNavigationProps) => {
  return (
    <Stack direction="row" spacing={3} {...wrapperProps}>
      <NetworkNavButton userId={userId}>
        <NetworkInfo
          count={followingCount}
          title="following"
          isLoading={isLoading}
          {...networkInfoStyles}
        />
      </NetworkNavButton>
      <NetworkNavButton userId={userId}>
        <NetworkInfo
          count={followersCount}
          title="followers"
          isLoading={isLoading}
          {...networkInfoStyles}
        />
      </NetworkNavButton>
    </Stack>
  );
};
export default NetworkInfoNavigation;
