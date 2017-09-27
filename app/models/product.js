import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  qty: DS.attr('number'),
  shop: DS.belongsTo('shop')

});
