import { useCallback, useEffect, useState } from 'react';
import useNavigationHandler from '@/modules/navigation/hooks/useNavigationHandler';

const useProfileNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [pendingPath, setPendingPath] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleNavigate = useNavigationHandler();

  useEffect(() => {
    if (!isMenuOpen && pendingPath) {
      setPendingPath(null);
      handleNavigate(pendingPath);
    }
  }, [handleNavigate, isMenuOpen, pendingPath]);

  const handleMenuButtonClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleMenuItemClick = useCallback(
    (path) => {
      handleMenuClose();
      setPendingPath(path);
    },
    [handleMenuClose]
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
