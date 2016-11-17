import Ember from 'ember';
import layout from '../templates/components/vertical-optionlist';

export default Ember.Component.extend({
  layout,
  tagName: 'div',
  classNames: ['dropdown', 'pull-right','vertical-optionlist'],
  optionlist: Ember.A(),
  actions: {

  }
});
