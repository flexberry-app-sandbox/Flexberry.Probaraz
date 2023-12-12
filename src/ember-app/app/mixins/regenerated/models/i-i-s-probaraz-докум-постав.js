import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДогов: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-probaraz-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-probaraz-организация', { inverse: null, async: false }),
  инфорОЗаказе: DS.hasMany('i-i-s-probaraz-инфор-о-заказе', { inverse: 'докумПостав', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probaraz-докум-постав.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДогов: {
    descriptionKey: 'models.i-i-s-probaraz-докум-постав.validations.номерДогов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-probaraz-докум-постав.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-probaraz-докум-постав.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  инфорОЗаказе: {
    descriptionKey: 'models.i-i-s-probaraz-докум-постав.validations.инфорОЗаказе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумПоставE', 'i-i-s-probaraz-докум-постав', {
    дата: attr('Дата', { index: 0 }),
    номерДогов: attr('Номер договора', { index: 1 }),
    организация: belongsTo('i-i-s-probaraz-организация', 'Организация', {
      наимОрганиз: attr('Наименование организации', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наимОрганиз' }),
    клиенты: belongsTo('i-i-s-probaraz-клиенты', 'Клиент', {
      наимЗаказ: attr('Заказчик', { index: 5 })
    }, { index: 4, displayMemberPath: 'наимЗаказ' }),
    инфорОЗаказе: hasMany('i-i-s-probaraz-инфор-о-заказе', 'Информация о заказе', {
      количество: attr('Количество', { index: 0 }),
      товары: belongsTo('i-i-s-probaraz-товары', 'Товар', {
        наимТовара: attr('Наименование товара', { index: 2, hidden: true }),
        производит: attr('Производитель', { index: 3 }),
        единицыИзмер: attr('Единицы измерения', { index: 4 }),
        цена: attr('Цена', { index: 5 }),
        масса: attr('Масса', { index: 6 })
      }, { index: 1, displayMemberPath: 'наимТовара' })
    })
  });

  modelClass.defineProjection('ДокумПоставL', 'i-i-s-probaraz-докум-постав', {
    дата: attr('Дата', { index: 0 }),
    номерДогов: attr('Номер договора', { index: 1 }),
    организация: belongsTo('i-i-s-probaraz-организация', 'Наименование организации', {
      наимОрганиз: attr('Наименование организации', { index: 2 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-probaraz-клиенты', 'Заказчик', {
      наимЗаказ: attr('Заказчик', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
