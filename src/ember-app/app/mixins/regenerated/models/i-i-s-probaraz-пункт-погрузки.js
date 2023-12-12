import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  наименПункта: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-probaraz-пункт-погрузки.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименПункта: {
    descriptionKey: 'models.i-i-s-probaraz-пункт-погрузки.validations.наименПункта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПунктПогрузкиE', 'i-i-s-probaraz-пункт-погрузки', {
    адрес: attr('Адрес', { index: 0 }),
    наименПункта: attr('Наимен пункта', { index: 1 })
  });

  modelClass.defineProjection('ПунктПогрузкиL', 'i-i-s-probaraz-пункт-погрузки', {
    адрес: attr('Адрес', { index: 0 }),
    наименПункта: attr('Наимен пункта', { index: 1 })
  });
};
