import { Routing } from '@/routing';

interface AppProps {
  isAuth: boolean;
}

const App = ({ isAuth }: AppProps) => {
  return <Routing isAuth={isAuth} />;
};

export default App;
