import polyglotI18nProvider from 'ra-i18n-polyglot';
import {spanishMessages} from './spanish';

export const i18nProvider = polyglotI18nProvider(Locale => spanishMessages, 'es');


