import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProbarazДокумПоставLForm from './forms/i-i-s-probaraz-докум-постав-l';
import IISProbarazКлиентыLForm from './forms/i-i-s-probaraz-клиенты-l';
import IISProbarazОрганизацияLForm from './forms/i-i-s-probaraz-организация-l';
import IISProbarazПунктПогрузкиLForm from './forms/i-i-s-probaraz-пункт-погрузки-l';
import IISProbarazСписокБаржLForm from './forms/i-i-s-probaraz-список-барж-l';
import IISProbarazСписокКонтейLForm from './forms/i-i-s-probaraz-список-контей-l';
import IISProbarazТоварыLForm from './forms/i-i-s-probaraz-товары-l';
import IISProbarazФормирРаспрLForm from './forms/i-i-s-probaraz-формир-распр-l';
import IISProbarazФормирРезПосLForm from './forms/i-i-s-probaraz-формир-рез-пос-l';
import IISProbarazДокумПоставEForm from './forms/i-i-s-probaraz-докум-постав-e';
import IISProbarazКлиентыEForm from './forms/i-i-s-probaraz-клиенты-e';
import IISProbarazОрганизацияEForm from './forms/i-i-s-probaraz-организация-e';
import IISProbarazПунктПогрузкиEForm from './forms/i-i-s-probaraz-пункт-погрузки-e';
import IISProbarazСписокБаржEForm from './forms/i-i-s-probaraz-список-барж-e';
import IISProbarazСписокКонтейEForm from './forms/i-i-s-probaraz-список-контей-e';
import IISProbarazТоварыEForm from './forms/i-i-s-probaraz-товары-e';
import IISProbarazФормирРаспрEForm from './forms/i-i-s-probaraz-формир-распр-e';
import IISProbarazФормирРезПосEForm from './forms/i-i-s-probaraz-формир-рез-пос-e';
import IISProbarazДокумПоставModel from './models/i-i-s-probaraz-докум-постав';
import IISProbarazИнфорОЗаказеModel from './models/i-i-s-probaraz-инфор-о-заказе';
import IISProbarazКлиентыModel from './models/i-i-s-probaraz-клиенты';
import IISProbarazОрганизацияModel from './models/i-i-s-probaraz-организация';
import IISProbarazПунктПогрузкиModel from './models/i-i-s-probaraz-пункт-погрузки';
import IISProbarazСписокБаржModel from './models/i-i-s-probaraz-список-барж';
import IISProbarazСписокКонтейModel from './models/i-i-s-probaraz-список-контей';
import IISProbarazТоварыModel from './models/i-i-s-probaraz-товары';
import IISProbarazФормирРаспрModel from './models/i-i-s-probaraz-формир-распр';
import IISProbarazФормирРезПосModel from './models/i-i-s-probaraz-формир-рез-пос';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probaraz-докум-постав': IISProbarazДокумПоставModel,
    'i-i-s-probaraz-инфор-о-заказе': IISProbarazИнфорОЗаказеModel,
    'i-i-s-probaraz-клиенты': IISProbarazКлиентыModel,
    'i-i-s-probaraz-организация': IISProbarazОрганизацияModel,
    'i-i-s-probaraz-пункт-погрузки': IISProbarazПунктПогрузкиModel,
    'i-i-s-probaraz-список-барж': IISProbarazСписокБаржModel,
    'i-i-s-probaraz-список-контей': IISProbarazСписокКонтейModel,
    'i-i-s-probaraz-товары': IISProbarazТоварыModel,
    'i-i-s-probaraz-формир-распр': IISProbarazФормирРаспрModel,
    'i-i-s-probaraz-формир-рез-пос': IISProbarazФормирРезПосModel
  },

  'application-name': 'Probaraz',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Probaraz',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probaraz',
          title: 'Probaraz'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        probaraz: {
          caption: 'Probaraz',
          title: 'Probaraz',
          'i-i-s-probaraz-докум-постав-l': {
            caption: 'Докум постав',
            title: ''
          },
          'i-i-s-probaraz-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-probaraz-список-барж-l': {
            caption: 'Список барж',
            title: ''
          },
          'i-i-s-probaraz-пункт-погрузки-l': {
            caption: 'Пункт погрузки',
            title: ''
          },
          'i-i-s-probaraz-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-probaraz-список-контей-l': {
            caption: 'Список контей',
            title: ''
          },
          'i-i-s-probaraz-формир-рез-пос-l': {
            caption: 'Формир рез пос',
            title: ''
          },
          'i-i-s-probaraz-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-probaraz-формир-распр-l': {
            caption: 'Формир распр',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-probaraz-докум-постав-l': IISProbarazДокумПоставLForm,
    'i-i-s-probaraz-клиенты-l': IISProbarazКлиентыLForm,
    'i-i-s-probaraz-организация-l': IISProbarazОрганизацияLForm,
    'i-i-s-probaraz-пункт-погрузки-l': IISProbarazПунктПогрузкиLForm,
    'i-i-s-probaraz-список-барж-l': IISProbarazСписокБаржLForm,
    'i-i-s-probaraz-список-контей-l': IISProbarazСписокКонтейLForm,
    'i-i-s-probaraz-товары-l': IISProbarazТоварыLForm,
    'i-i-s-probaraz-формир-распр-l': IISProbarazФормирРаспрLForm,
    'i-i-s-probaraz-формир-рез-пос-l': IISProbarazФормирРезПосLForm,
    'i-i-s-probaraz-докум-постав-e': IISProbarazДокумПоставEForm,
    'i-i-s-probaraz-клиенты-e': IISProbarazКлиентыEForm,
    'i-i-s-probaraz-организация-e': IISProbarazОрганизацияEForm,
    'i-i-s-probaraz-пункт-погрузки-e': IISProbarazПунктПогрузкиEForm,
    'i-i-s-probaraz-список-барж-e': IISProbarazСписокБаржEForm,
    'i-i-s-probaraz-список-контей-e': IISProbarazСписокКонтейEForm,
    'i-i-s-probaraz-товары-e': IISProbarazТоварыEForm,
    'i-i-s-probaraz-формир-распр-e': IISProbarazФормирРаспрEForm,
    'i-i-s-probaraz-формир-рез-пос-e': IISProbarazФормирРезПосEForm
  },

});

export default translations;
