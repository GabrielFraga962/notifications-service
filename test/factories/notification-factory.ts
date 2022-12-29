/* eslint-disable prettier/prettier */
import { Content } from '@application/entities/content';
import { Notification, NotificationProps } from '@application/entities/notification';

// Propriedade Partial - passa as propriedades do override como elementos opcionais ou undefined
type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-1',
    ...override,
  });
}
