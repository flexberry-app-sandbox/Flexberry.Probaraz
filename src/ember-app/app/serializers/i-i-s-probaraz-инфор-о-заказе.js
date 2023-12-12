import { Serializer as ИнфорОЗаказеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probaraz-инфор-о-заказе';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИнфорОЗаказеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
