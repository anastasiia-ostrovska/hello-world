type LogoutHandler = () => void;

const useLogout = (): LogoutHandler => {
  // temporary mock
  return () => {
    alert('Logout');
  };
};

export default useLogout;
