import Ember from 'ember';

export default Ember.Route.extend({
  shopService: Ember.inject.service(),
  model(params) {
    const model = this.get('shopService').find(params.shop_id);
    Object.defineProperty(model, 'totalPrice', {
      get() {
        return this.products.reduce((sum, {qty, price}) => sum + qty * price, 0);
      }
    });
    return model;
  }
});
