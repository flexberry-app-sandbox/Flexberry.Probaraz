import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probaraz-докум-постав-l');
  this.route('i-i-s-probaraz-докум-постав-e',
  { path: 'i-i-s-probaraz-докум-постав-e/:id' });
  this.route('i-i-s-probaraz-докум-постав-e.new',
  { path: 'i-i-s-probaraz-докум-постав-e/new' });
  this.route('i-i-s-probaraz-клиенты-l');
  this.route('i-i-s-probaraz-клиенты-e',
  { path: 'i-i-s-probaraz-клиенты-e/:id' });
  this.route('i-i-s-probaraz-клиенты-e.new',
  { path: 'i-i-s-probaraz-клиенты-e/new' });
  this.route('i-i-s-probaraz-организация-l');
  this.route('i-i-s-probaraz-организация-e',
  { path: 'i-i-s-probaraz-организация-e/:id' });
  this.route('i-i-s-probaraz-организация-e.new',
  { path: 'i-i-s-probaraz-организация-e/new' });
  this.route('i-i-s-probaraz-пункт-погрузки-l');
  this.route('i-i-s-probaraz-пункт-погрузки-e',
  { path: 'i-i-s-probaraz-пункт-погрузки-e/:id' });
  this.route('i-i-s-probaraz-пункт-погрузки-e.new',
  { path: 'i-i-s-probaraz-пункт-погрузки-e/new' });
  this.route('i-i-s-probaraz-список-барж-l');
  this.route('i-i-s-probaraz-список-барж-e',
  { path: 'i-i-s-probaraz-список-барж-e/:id' });
  this.route('i-i-s-probaraz-список-барж-e.new',
  { path: 'i-i-s-probaraz-список-барж-e/new' });
  this.route('i-i-s-probaraz-список-контей-l');
  this.route('i-i-s-probaraz-список-контей-e',
  { path: 'i-i-s-probaraz-список-контей-e/:id' });
  this.route('i-i-s-probaraz-список-контей-e.new',
  { path: 'i-i-s-probaraz-список-контей-e/new' });
  this.route('i-i-s-probaraz-товары-l');
  this.route('i-i-s-probaraz-товары-e',
  { path: 'i-i-s-probaraz-товары-e/:id' });
  this.route('i-i-s-probaraz-товары-e.new',
  { path: 'i-i-s-probaraz-товары-e/new' });
  this.route('i-i-s-probaraz-формир-распр-l');
  this.route('i-i-s-probaraz-формир-распр-e',
  { path: 'i-i-s-probaraz-формир-распр-e/:id' });
  this.route('i-i-s-probaraz-формир-распр-e.new',
  { path: 'i-i-s-probaraz-формир-распр-e/new' });
  this.route('i-i-s-probaraz-формир-рез-пос-l');
  this.route('i-i-s-probaraz-формир-рез-пос-e',
  { path: 'i-i-s-probaraz-формир-рез-пос-e/:id' });
  this.route('i-i-s-probaraz-формир-рез-пос-e.new',
  { path: 'i-i-s-probaraz-формир-рез-пос-e/new' });
});

export default Router;
