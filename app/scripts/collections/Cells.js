/*global define*/

define([
  'underscore',
  'backbone',
  'models/Cell'
], function (_, Backbone, CellsModel) {
  'use strict';

  var CellsCollection = Backbone.Collection.extend({
    model: CellsModel
  });

  return CellsCollection;
});
