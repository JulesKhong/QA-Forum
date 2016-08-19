import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        title: this.get('title') ? this.get('title'): "",
        author: this.get('author') ? this.get('author'): "",
        content: this.get('content') ? this.get('content'): ""
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
