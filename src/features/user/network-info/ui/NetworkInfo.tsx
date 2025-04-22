import Stack, { StackProps } from '@mui/material/Stack';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { SkeletonWrapper } from '@shared/ui';

interface NetworkInfoProps extends StackProps {
  followCount: number;
  title: string;
  isLoading: boolean;
  textVariant?: TypographyProps['variant'];
}

const NetworkInfo = ({
  followCount,
  title,
  isLoading,
  textVariant = 'body1',
  ...wrapperProps
}: NetworkInfoProps) => {
  return (
    <SkeletonWrapper
      isLoading={isLoading}
      element={
        <Stack {...wrapperProps}>
          <Typography variant={textVariant} align="left" fontWeight="bold">
            {followCount}
          </Typography>
          <Typography variant={textVariant} align="left">
            {title}
          </Typography>
        </Stack>
      }
    />
  );
};

export default NetworkInfo;
