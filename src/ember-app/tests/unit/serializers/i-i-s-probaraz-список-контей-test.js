import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probaraz-список-контей', 'Unit | Serializer | i-i-s-probaraz-список-контей', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probaraz-список-контей',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probaraz-ед-изм',
    'transform:i-i-s-probaraz-состоян-заказа',
    'transform:i-i-s-probaraz-удовл-кл',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
