import { useLocation } from 'react-router-dom';

const useActiveIndex = (navigationItems) => {
  const { pathname } = useLocation();
  const rootPath = `/${pathname.split('/').pop()}`;

  const activeIndex = navigationItems.findIndex(
    (item) => item.path === rootPath
  );

  return activeIndex === -1 ? 0 : activeIndex;
};

export default useActiveIndex;
