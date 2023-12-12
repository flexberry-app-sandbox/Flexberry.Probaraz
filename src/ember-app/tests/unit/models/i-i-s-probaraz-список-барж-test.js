import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probaraz-список-барж', 'Unit | Model | i-i-s-probaraz-список-барж', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-probaraz-докум-постав',
    'model:i-i-s-probaraz-инфор-о-заказе',
    'model:i-i-s-probaraz-клиенты',
    'model:i-i-s-probaraz-организация',
    'model:i-i-s-probaraz-пункт-погрузки',
    'model:i-i-s-probaraz-список-барж',
    'model:i-i-s-probaraz-список-контей',
    'model:i-i-s-probaraz-товары',
    'model:i-i-s-probaraz-формир-распр',
    'model:i-i-s-probaraz-формир-рез-пос',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
