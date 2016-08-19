import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(answer, params) {
      this.sendAction('updateAnswer', answer, params);
    },
    deleteAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
