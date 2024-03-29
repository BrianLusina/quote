import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import config from '@config';
import { initializeMonitoring } from '@monitoring';
import App from './app';
import './styles/index.css';

initializeMonitoring();

const rootNode = document.getElementById('app') as Element;
const root = createRoot(rootNode);

root.render(
  <StrictMode>
    <Helmet titleTemplate={`${config.meta.title} | %s `} defaultTitle={`${config.meta.title}`} />
    <App />
  </StrictMode>,
);
