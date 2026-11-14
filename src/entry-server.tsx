import { renderToString } from 'react-dom/server';
import { Root } from './Root';

export const render = () => renderToString(<Root />);
