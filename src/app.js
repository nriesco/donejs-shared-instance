import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
  message: {
    value: 'Demo project for shared instance',
    serialize: false
  },
  title: {
    value: 'donejs-shared-instance',
    serialize: false
  },
  page: 'string',
});

route('{page}', { page: 'home' });

export default AppViewModel;
