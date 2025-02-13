import LinearProgress from '@mui/material/LinearProgress';
import Logo from '@assets/logo.svg';
import AppLoaderLayout from './AppLoaderLayout';

const AppLoader = () => {
  return <AppLoaderLayout loader={<LinearProgress />} logo={<Logo />} />;
};

export default AppLoader;
