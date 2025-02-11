import { JSX } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Logo from '@assets/logo.svg';

interface AppInitLoaderLayoutProps {
  loader: JSX.Element;
  logo: JSX.Element;
}

const AppInitLoaderLayout = ({ loader, logo }: AppInitLoaderLayoutProps) => {
  return (
    <Stack component="main" sx={{ height: '100%' }}>
      {loader}
      <Stack
        sx={{
          height: 'inherit',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ minWidth: 160, width: '25vw' }}>{logo}</Box>
      </Stack>
    </Stack>
  );
};

const AppInitLoader = () => {
  return <AppInitLoaderLayout loader={<LinearProgress />} logo={<Logo />} />;
};

export default AppInitLoader;
