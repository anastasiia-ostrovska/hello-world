import { useLocation } from 'react-router-dom';

const useActiveIndex = (navItems) => {
  const { pathname } = useLocation();
  const rootPath = `/${pathname.split('/').pop()}`;

  const activeIndex = navItems.findIndex((item) => item.path === rootPath);

  return activeIndex;
};

export default useActiveIndex;
