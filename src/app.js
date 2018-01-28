import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
  message: {
    value: 'Hello World!',
    serialize: false
  },
  title: {
    value: 'donejs-shared-instance',
    serialize: false
  },
  page: 'string',
});

route('{page}', { page: null });

export default AppViewModel;
