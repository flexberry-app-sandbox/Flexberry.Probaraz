import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  наличДеф: DS.attr('boolean'),
  статусЗаказа: DS.attr('i-i-s-probaraz-состоян-заказа'),
  удовлКлиента: DS.attr('i-i-s-probaraz-удовл-кл'),
  формирРаспр: DS.belongsTo('i-i-s-probaraz-формир-распр', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probaraz-формир-рез-пос.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наличДеф: {
    descriptionKey: 'models.i-i-s-probaraz-формир-рез-пос.validations.наличДеф.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статусЗаказа: {
    descriptionKey: 'models.i-i-s-probaraz-формир-рез-пос.validations.статусЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  удовлКлиента: {
    descriptionKey: 'models.i-i-s-probaraz-формир-рез-пос.validations.удовлКлиента.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  формирРаспр: {
    descriptionKey: 'models.i-i-s-probaraz-формир-рез-пос.validations.формирРаспр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРезПосE', 'i-i-s-probaraz-формир-рез-пос', {
    дата: attr('Дата', { index: 0 }),
    статусЗаказа: attr('Статус заказа', { index: 1 }),
    наличДеф: attr('Наличие дефектов', { index: 2 }),
    удовлКлиента: attr('Удовлетверенность клиента', { index: 3 }),
    формирРаспр: belongsTo('i-i-s-probaraz-формир-распр', 'Документ распределения', {

    }, { index: 4, displayMemberPath: 'номерДокРаспр' })
  });

  modelClass.defineProjection('ФормирРезПосL', 'i-i-s-probaraz-формир-рез-пос', {
    дата: attr('Дата', { index: 0 }),
    статусЗаказа: attr('Статус заказа', { index: 1 }),
    наличДеф: attr('Наличие дефектов', { index: 2 }),
    удовлКлиента: attr('Удовлетверенность клиента', { index: 3 }),
    формирРаспр: belongsTo('i-i-s-probaraz-формир-распр', 'Номер документа распределения', {
      номерДокРаспр: attr('Номер документа распределения', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
