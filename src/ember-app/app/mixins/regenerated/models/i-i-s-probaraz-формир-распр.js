import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДокРаспр: DS.attr('number'),
  докумПостав: DS.belongsTo('i-i-s-probaraz-докум-постав', { inverse: null, async: false }),
  пунктПогрузки: DS.belongsTo('i-i-s-probaraz-пункт-погрузки', { inverse: null, async: false }),
  списокБарж: DS.belongsTo('i-i-s-probaraz-список-барж', { inverse: null, async: false }),
  списокКонтей: DS.belongsTo('i-i-s-probaraz-список-контей', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probaraz-формир-распр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДокРаспр: {
    descriptionKey: 'models.i-i-s-probaraz-формир-распр.validations.номерДокРаспр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  докумПостав: {
    descriptionKey: 'models.i-i-s-probaraz-формир-распр.validations.докумПостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пунктПогрузки: {
    descriptionKey: 'models.i-i-s-probaraz-формир-распр.validations.пунктПогрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокБарж: {
    descriptionKey: 'models.i-i-s-probaraz-формир-распр.validations.списокБарж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокКонтей: {
    descriptionKey: 'models.i-i-s-probaraz-формир-распр.validations.списокКонтей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРаспрE', 'i-i-s-probaraz-формир-распр', {
    дата: attr('Дата', { index: 0 }),
    номерДокРаспр: attr('Номер документа распределения', { index: 1 }),
    списокБарж: belongsTo('i-i-s-probaraz-список-барж', 'Список барж', {
      номерБаржи: attr('Номер баржи', { index: 3 })
    }, { index: 2, displayMemberPath: 'номерБаржи' }),
    пунктПогрузки: belongsTo('i-i-s-probaraz-пункт-погрузки', 'Пункт погрузки', {
      адрес: attr('Адрес', { index: 5 })
    }, { index: 4, displayMemberPath: 'адрес' }),
    списокКонтей: belongsTo('i-i-s-probaraz-список-контей', 'Список контей', {
      номерКонтей: attr('Номер контейнера', { index: 7 })
    }, { index: 6, displayMemberPath: 'номерКонтей' }),
    докумПостав: belongsTo('i-i-s-probaraz-докум-постав', 'Докум постав', {
      номерДогов: attr('Номер договора', { index: 9 }),
      клиенты: belongsTo('i-i-s-probaraz-клиенты', '', {
        наимЗаказ: attr('Заказчик', { index: 10 }),
        телефон: attr('Телефон', { index: 11 }),
        адресПоставщик: attr('Адрес поставщика', { index: 12 })
      }, { index: -1, hidden: true })
    }, { index: 8, displayMemberPath: 'номерДогов' })
  });

  modelClass.defineProjection('ФормирРаспрL', 'i-i-s-probaraz-формир-распр', {
    дата: attr('Дата', { index: 0 }),
    номерДокРаспр: attr('Номер документа распределения', { index: 1 }),
    списокБарж: belongsTo('i-i-s-probaraz-список-барж', 'Номер баржи', {
      номерБаржи: attr('Номер баржи', { index: 2 })
    }, { index: -1, hidden: true }),
    докумПостав: belongsTo('i-i-s-probaraz-докум-постав', 'Номер договора', {
      номерДогов: attr('Номер договора', { index: 3 })
    }, { index: -1, hidden: true }),
    пунктПогрузки: belongsTo('i-i-s-probaraz-пункт-погрузки', 'Адрес', {
      адрес: attr('Адрес', { index: 4 })
    }, { index: -1, hidden: true }),
    списокКонтей: belongsTo('i-i-s-probaraz-список-контей', 'Номер контейнера', {
      номерКонтей: attr('Номер контейнера', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
