import { useCallback, useState } from 'react';
import useNavigationHandler from '@/modules/navigation/hooks/useNavigationHandler';

const useProfileNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleNavItemClick = useNavigationHandler();

  const handleMenuButtonClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleMenuItemClick = useCallback(
    (path) => {
      handleMenuClose();
      handleNavItemClick(path);
    },
    [handleMenuClose, handleNavItemClick]
  );

  return {
    anchorEl,
    isMenuOpen,
    handleMenuButtonClick,
    handleMenuItemClick,
    handleMenuClose,
  };
};

export default useProfileNavbar;
