import { MenuBtnClickHandler, Path } from '@/modules/navigation/types';
import { useCallback, useEffect, useState } from 'react';
import useNavigateToPath from '@/modules/navigation/hooks/handlers/useNavigateToPath';

type AnchorEl = HTMLElement | null;
type MenuCloseHandler = () => void;
type MenuItemClickHandler = (path: Path) => void;

type ProfileNavbarChildrenProps = {
  anchorEl: AnchorEl;
  isMenuOpen: boolean;
  handleMenuButtonClick: MenuBtnClickHandler;
  handleMenuItemClick: MenuItemClickHandler;
  handleMenuClose: MenuCloseHandler;
};

const useProfileNavbar = (): ProfileNavbarChildrenProps => {
  const [anchorEl, setAnchorEl] = useState<AnchorEl>(null);
  const [pendingPath, setPendingPath] = useState<Path | ''>('');
  const isMenuOpen = Boolean(anchorEl);
  const handleNavigate = useNavigateToPath();

  useEffect(() => {
    if (!isMenuOpen && pendingPath) {
      setPendingPath('');
      handleNavigate(pendingPath);
    }
  }, [handleNavigate, isMenuOpen, pendingPath]);

  const handleMenuButtonClick: MenuBtnClickHandler = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose: MenuCloseHandler = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleMenuItemClick: MenuItemClickHandler = useCallback(
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
