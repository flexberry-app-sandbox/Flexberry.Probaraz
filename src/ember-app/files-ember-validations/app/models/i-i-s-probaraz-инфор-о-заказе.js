import {
  defineNamespace,
  defineProjections,
  Model as ИнфорОЗаказеMixin
} from '../mixins/regenerated/models/i-i-s-probaraz-инфор-о-заказе';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИнфорОЗаказеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
