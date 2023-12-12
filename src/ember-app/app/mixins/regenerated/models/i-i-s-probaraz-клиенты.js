import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адресПоставщик: DS.attr('string'),
  наимЗаказ: DS.attr('string'),
  расчетСчет: DS.attr('number'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  адресПоставщик: {
    descriptionKey: 'models.i-i-s-probaraz-клиенты.validations.адресПоставщик.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наимЗаказ: {
    descriptionKey: 'models.i-i-s-probaraz-клиенты.validations.наимЗаказ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расчетСчет: {
    descriptionKey: 'models.i-i-s-probaraz-клиенты.validations.расчетСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-probaraz-клиенты.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентыE', 'i-i-s-probaraz-клиенты', {
    наимЗаказ: attr('Заказчик', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    адресПоставщик: attr('Адрес поставщика', { index: 2 }),
    расчетСчет: attr('Расчетный счет', { index: 3 })
  });

  modelClass.defineProjection('КлиентыL', 'i-i-s-probaraz-клиенты', {
    наимЗаказ: attr('Заказчик', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    адресПоставщик: attr('Адрес поставщика', { index: 2 }),
    расчетСчет: attr('Расчетный счет', { index: 3 })
  });
};
