import { useCallback, useState } from 'react';
import useNavigationHandler from '@/modules/navigation/hooks/useNavigationHandler';

const useProfileNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleNavItemClick = useNavigationHandler();

  const handleMenuButtonClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuItemClick = useCallback(
    (event, path) => {
      handleNavItemClick(path);
      handleMenuButtonClick(event);
    },
    [handleMenuButtonClick, handleNavItemClick]
  );

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return {
    anchorEl,
    isMenuOpen,
    handleMenuButtonClick,
    handleMenuItemClick,
    handleMenuClose,
  };
};

export default useProfileNavbar;
