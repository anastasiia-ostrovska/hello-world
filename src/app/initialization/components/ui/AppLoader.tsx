import LinearProgress from '@mui/material/LinearProgress';
import LogoFull from '@assets/logo-full.svg';
import AppLoaderLayout from './AppLoaderLayout';

const AppLoader = () => {
  return <AppLoaderLayout loader={<LinearProgress />} logo={<LogoFull />} />;
};

export default AppLoader;
