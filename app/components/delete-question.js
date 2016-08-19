import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if(confirm('Are you sure you want to permanently delete your question?')){
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
