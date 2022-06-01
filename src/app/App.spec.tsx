import { createRoot } from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const rootNode = document.createElement('div') as Element;
  const root = createRoot(rootNode);

  root.render(<App />);
});
