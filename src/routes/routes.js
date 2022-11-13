import { home } from 'js';
import { render } from 'utils/hbs-helper';

export const routes = { '/': () => render('root', home) };
