import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const useMediaQueryType = () => {
  const theme = useTheme();
  const isUpSM = useMediaQuery(theme.breakpoints.up('sm'));
  const isUpMD = useMediaQuery(theme.breakpoints.up('md'));
  const isUpLG = useMediaQuery(theme.breakpoints.up('lg'));
  const isUpXL = useMediaQuery(theme.breakpoints.up('xl'));

  return { isUpSM, isUpMD, isUpLG, isUpXL };
};

export default useMediaQueryType;
