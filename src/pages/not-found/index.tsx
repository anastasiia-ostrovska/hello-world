import { Link as RouterLink } from 'react-router-dom';
import { useMediaQueryState } from '@shared/mui';
import { ButtonProps } from '@mui/material';
import { ROUTES } from '@shared/router';
import NotFoundIcon from '@assets/not-found-icon.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NotFoundPageLayout from './ui/NotFoundPageLayout';

const useButtonSize = (): ButtonProps['size'] => {
  const { isUpSM, isUpMD } = useMediaQueryState();

  if (isUpMD) return 'large';
  if (isUpSM) return 'medium';

  return 'small';
};

const NotFoundPage = () => {
  const buttonSize = useButtonSize();

  return (
    <NotFoundPageLayout
      icon={<NotFoundIcon />}
      helperText={
        <Typography component="p" variant="inherit">
          Looks like you’ve followed a broken link or entered a URL that doesn’t
          exist on this site.
        </Typography>
      }
      goHomeButton={
        <Button
          component={RouterLink}
          to={ROUTES.HOME}
          variant="text"
          size={buttonSize}
          startIcon={<KeyboardBackspaceIcon />}
          sx={{ width: 'fit-content' }}
        >
          Back to our site
        </Button>
      }
    />
  );
};

export default NotFoundPage;
