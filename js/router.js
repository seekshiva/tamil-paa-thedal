(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  jQuery(function() {
    var ApplicationRouter, _ref;
    ApplicationRouter = (function(_super) {

      __extends(ApplicationRouter, _super);

      function ApplicationRouter() {
        return ApplicationRouter.__super__.constructor.apply(this, arguments);
      }

      ApplicationRouter.prototype.routes = {
        "(search)": "home",
        "search?q=": "home",
        "search?q=:query": "search",
      };

      ApplicationRouter.prototype.home = function() {
	  console.log("fkjdakj");
          this.home_view = new this.app.HomeView();
          return this;
      };

      ApplicationRouter.prototype.search = function(query) {
	  console.log("in search router");
          this.search_view = new this.app.SearchView({query: query});
          return this;
      };

      ApplicationRouter.prototype.initialize = function(options) {
        var _ref;
        return this.app = (_ref = window.app) != null ? _ref : {};
      };

      return ApplicationRouter;

    })(Backbone.Router);
    this.app = (_ref = window.app) != null ? _ref : {};
    this.app.ApplicationRouter = ApplicationRouter;
    return this;
  });

}).call(this);
