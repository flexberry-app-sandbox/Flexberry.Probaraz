import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФормирРаспрMixin
} from '../mixins/regenerated/models/i-i-s-probaraz-формир-распр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФормирРаспрMixin, Validations, {
});

defineProjections(Model);

export default Model;
