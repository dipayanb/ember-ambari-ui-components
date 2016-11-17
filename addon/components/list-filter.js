import Ember from 'ember';
import layout from '../templates/components/list-filter';

export default Ember.Component.extend({
  layout,
  classNames: ['list-filter'],
  placeholder: '',
  labelName:'',
  modelList:null,
  filterText: '',
  optionlist: Ember.A(),

  filteredList: Ember.computed('filterText', 'modelList.@each', function() {
    //The below piece of code is in this format => list.filter(filterFun(param))
    return this.get('modelList').filter(this.get('filterFunction')(this.get('filterText')));
  }),

  click(event){
    if($(event.target).attr('class') === "list-group-item"){
      this.send('highlightListItem', $(event.target), this.$().find('a.list-group-item'));
    }
  },

  actions: {
    goToOption(item){
      this.sendAction(item.handler);
    },

    highlightListItem(targetAnchor, allAnchors ){
      allAnchors.each(function(index, item){
        $(item).removeClass('active');
      })
      targetAnchor.addClass('active');
    }
  }

});


