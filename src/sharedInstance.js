/**
 * Shared instance object
 *
 * Use this object to share information across components
 * without the need to use bindings. Very usefull when having
 * components within components and is hard to keep track of
 * bindings and names for them.
 *
 * Include this file on your viewmodel and declare a property to access it
 * Then in your stache file it will become available as well as in the VM.
 *
 *     ```
 *     import DefineMap from 'can-define/map/';
 *     import SharedInstance from '~/path/to/sharedInstance';
 *     export default DefineMap.extend({ globalData: { value: SharedInstance }});
 *     ```
 *
 * use it in your stache file:
 *     `{{globalData.text}}`
 *
 * or in your vm
 *     `this.globalData.text = 'new value for text';`
 */


import DefineMap from 'can-define/map/';

const MyDefinition = DefineMap.extend('sharedInstanceObject', {
  seal: false
}, {
  _id: 'any',
  text: { value: 'Default value for text' },
  name: { value: 'Default value for name' },
  value: { value: 1 }
});

const MyInstance = new MyDefinition();

export default MyInstance;