import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  товары: DS.belongsTo('i-i-s-probaraz-товары', { inverse: null, async: false }),
  докумПостав: DS.belongsTo('i-i-s-probaraz-докум-постав', { inverse: 'инфорОЗаказе', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-probaraz-инфор-о-заказе.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-probaraz-инфор-о-заказе.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докумПостав: {
    descriptionKey: 'models.i-i-s-probaraz-инфор-о-заказе.validations.докумПостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнфорОЗаказеE', 'i-i-s-probaraz-инфор-о-заказе', {
    количество: attr('Количество', { index: 0 }),
    товары: belongsTo('i-i-s-probaraz-товары', 'Товар', {
      наимТовара: attr('Наименование товара', { index: 2, hidden: true }),
      производит: attr('Производитель', { index: 3 }),
      единицыИзмер: attr('Единицы измерения', { index: 4 }),
      цена: attr('Цена', { index: 5 }),
      масса: attr('Масса', { index: 6 })
    }, { index: 1, displayMemberPath: 'наимТовара' })
  });
};
