import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@features/theme';
import { store } from '../../store';

interface ProvidersProps {
  children: ReactElement;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
