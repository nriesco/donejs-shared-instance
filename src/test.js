import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'donejs-shared-instance/models/test';

import 'donejs-shared-instance/info/info-test';

F.attach(QUnit);

QUnit.module('donejs-shared-instance functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('donejs-shared-instance main page shows up', function() {
  F('title').text('donejs-shared-instance', 'Title is set');
});
