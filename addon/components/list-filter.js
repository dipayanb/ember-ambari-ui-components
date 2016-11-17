import Ember from 'ember';
import layout from '../templates/components/list-filter';

export default Ember.Component.extend({
  layout,
  classNames: ['list-filter'],
  placeholder: '',
  labelName:'',
  modelList:null,
  isFilterEnable:false,
  filterText: '',
  hasOptionlist:Ember.computed('optionlist', function(){
    return this.get('optionlist').length > 0;
  }),

  optionlist: Ember.A(),

  filteredList: Ember.computed('filterText', 'modelList.@each', function() {
    //The below piece of code is in this format => list.filter(filterFun(param))
    return this.get('modelList').filter(this.get('filterFunction')(this.get('filterText')));
  }),

  click(event){
    if(Ember.$(event.target).attr('class') === "list-group-item"){
      this.send('highlightListItem', Ember.$(event.target), this.$().find('a.list-group-item'));
    }
  },

  actions: {
    goToOption(item){
      this.sendAction(item.handler);
    },

    highlightListItem(targetAnchor, allAnchors ){
      allAnchors.each(function(index, item){
        Ember.$(item).removeClass('active');
      });
      targetAnchor.addClass('active');
    }
  }

});


