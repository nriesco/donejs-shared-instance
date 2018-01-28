import QUnit from 'steal-qunit';
import { ViewModel } from './info';

// ViewModel unit tests
QUnit.module('donejs-shared-instance/info');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the demo-info component');
});
