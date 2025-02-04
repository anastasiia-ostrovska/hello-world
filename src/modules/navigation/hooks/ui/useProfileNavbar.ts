import { MenuBtnClickHandler } from '@/modules/navigation/types';
import { useCallback, useState } from 'react';

type AnchorEl = HTMLElement | null;
type MenuCloseHandler = () => void;

type ProfileNavbarChildrenProps = {
  anchorEl: AnchorEl;
  isMenuOpen: boolean;
  handleMenuButtonClick: MenuBtnClickHandler;
  handleMenuClose: MenuCloseHandler;
};

const useProfileNavbar = (): ProfileNavbarChildrenProps => {
  const [anchorEl, setAnchorEl] = useState<AnchorEl>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuButtonClick: MenuBtnClickHandler = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose: MenuCloseHandler = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return {
    anchorEl,
    isMenuOpen,
    handleMenuButtonClick,
    handleMenuClose,
  };
};

export default useProfileNavbar;
