import polyglotI18nProvider from 'ra-i18n-polyglot';
import { spanishMessages } from './spanish';

// Definir el tipo de los mensajes de i18n si es necesario (opcional)
type Messages = typeof spanishMessages;

export const i18nProvider = polyglotI18nProvider((locale: string): Messages => spanishMessages, 'es');