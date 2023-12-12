import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.probaraz.caption'),
          title: i18n.t('forms.application.sitemap.probaraz.title'),
          children: [{
            link: 'i-i-s-probaraz-докум-постав-l',
            caption: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-докум-постав-l.caption'),
            title: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-докум-постав-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-probaraz-товары-l',
            caption: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-товары-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-probaraz-список-барж-l',
            caption: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-список-барж-l.caption'),
            title: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-список-барж-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-probaraz-пункт-погрузки-l',
            caption: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-пункт-погрузки-l.caption'),
            title: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-пункт-погрузки-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-probaraz-клиенты-l',
            caption: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-клиенты-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-probaraz-список-контей-l',
            caption: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-список-контей-l.caption'),
            title: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-список-контей-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-probaraz-формир-рез-пос-l',
            caption: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-формир-рез-пос-l.caption'),
            title: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-формир-рез-пос-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-probaraz-организация-l',
            caption: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-организация-l.title'),
            children: null
          }, {
            link: 'i-i-s-probaraz-формир-распр-l',
            caption: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-формир-распр-l.caption'),
            title: i18n.t('forms.application.sitemap.probaraz.i-i-s-probaraz-формир-распр-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})