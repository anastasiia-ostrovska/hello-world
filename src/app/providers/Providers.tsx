import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeWrapper } from '@/modules/theme';
import { store } from '../../store';

interface ProvidersProps {
  children: ReactElement;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </Provider>
  );
};

export default Providers;
