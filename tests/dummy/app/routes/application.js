import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    let tableList = [
      {
        type: 'tables',
        id: 1,
        attributes: {
          name: 'Employee_All',
          schemaid: 2
        }
      }, {
      type: 'tables',
      id: 2,
      attributes: {
        name: 'Managers',
        schemaid: 2
      }
    },
      {
        type: 'tables',
        id: 3,
        attributes: {
          name: 'Accounts',
          schemaid: 2
        }
      }, {
      type: 'tables',
      id: 4,
      attributes: {
        name: 'Facilities',
        schemaid: 2
      }
    },{
      type: 'tables',
      id: 5,
      attributes: {
        name: 'Sales',
        schemaid: 1
      }
    }, {
      type: 'tables',
      id: 6,
      attributes: {
        name: 'Legal',
        schemaid: 1
      }
    },
      {
        type: 'tables',
        id: 7,
        attributes: {
          name: 'Products',
          schemaid: 1
        }
      },
      {
        type: 'tables',
        id: 8,
        attributes: {
          name: 'Engineering',
          schemaid: 1
        }
      },
      {
        type: 'tables',
        id: 9,
        attributes: {
          name: 'Products',
          schemaid: 1
        }
      },
      {
        type: 'tables',
        id: 10,
        attributes: {
          name: 'HR',
          schemaid: 1
        }
      }
    ];
    return tableList;

  },

  setupController: function(controller, model) {
    controller.set('model', model);
  },

  actions: {
    openTable(id){
      console.log('I am in openTable with id:: ', id);
    }

  }
});
