import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './info.less';
import view from './info.stache';
import SharedInstance from '~/sharedInstance';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'INFO section'
  },
  globalData: { value: SharedInstance }
});

export default Component.extend({
  tag: 'demo-info',
  ViewModel,
  view
});
