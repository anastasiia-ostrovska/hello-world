import { Routing } from '@/app/routing';

interface AppProps {
  isAuth: boolean;
}

const App = ({ isAuth }: AppProps) => {
  return <Routing isAuth={isAuth} />;
};

export default App;
