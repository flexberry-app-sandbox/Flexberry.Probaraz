import { Serializer as ФормирРаспрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probaraz-формир-распр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФормирРаспрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
