import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ИнфорОЗаказеMixin
} from '../mixins/regenerated/models/i-i-s-probaraz-инфор-о-заказе';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ИнфорОЗаказеMixin, Validations, {
});

defineProjections(Model);

export default Model;
