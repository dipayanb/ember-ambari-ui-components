import Ember from 'ember';

export default Ember.Controller.extend({

  filterByTableName: function(filterText) {
    return function(item) {
      return item.attributes['name'].toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
    };
  },

  optionlist:[
    {'label':'CREATE TABLE',
      'handler': 'createTable'},
    {'label':'CREATE VIEW',
      'handler': 'createView'}
  ],

  actions: {
    createTable(){
      console.log('I am in createTable function.');
    },
    createView(){
      console.log('I am in createView function.');
    },
  }
});
