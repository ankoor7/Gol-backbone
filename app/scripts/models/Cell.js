/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var CellModel = Backbone.Model.extend({

        defaults: {
            x: null,
            y: null,
            alive: false,
            aliveTomorrow: false
        },

        initialize: function(params) {
        },

        live: function () {
            this.set('aliveTomorrow', true);
        },

        die: function () {
            this.set('aliveTomorrow', false);
        },

        evolve: function () {
            this.alive = this.aliveTomorrow;
        }

    });

    return CellModel;
});
