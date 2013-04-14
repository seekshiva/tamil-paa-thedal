(function() {
    var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
    
    jQuery(function() {
	var HomeView, SearchView, _ref;
	
	HomeView = (function(_super) {

	    __extends(HomeView, _super);
	    
	    function HomeView() {
		this.render = __bind(this.render, this);
		return HomeView.__super__.constructor.apply(this, arguments);
	    }
	    
	    HomeView.prototype.template = Handlebars.compile($("#home-template").html());
	    
	    HomeView.prototype.el = "#app-root";

	    HomeView.prototype.events = {
		"keypress #searchInput": "debounceSearch"
	    };
	    
	    HomeView.prototype.initialize = function(options) {
		var _ref;
		this.app = (_ref = window.app) != null ? _ref : {};
		this.render();
		return this;
	    };
	    
	    HomeView.prototype.render = function() {
		$(this.el).html(this.template());
		return this;
	    };
	    
	    HomeView.prototype.debounceSearch = function() {
		clearTimeout(this.searchTimeout);
		this.searchTimeout = setTimeout(function() {
		    this.app = (_ref = window.app) != null ? _ref : {};
		    this.app.router.navigate("/search?q=" + encodeURIComponent($("#searchInput").val()), {trigger: true});
		}, 300);
	    }
	    return HomeView;

	})(Backbone.View);

	SearchView = (function(_super) {

	    __extends(SearchView, _super);

	    function SearchView() {
		this.render = __bind(this.render, this);
		return SearchView.__super__.constructor.apply(this, arguments);
	    }

	    SearchView.prototype.template = Handlebars.compile($("#search-template").html());

	    SearchView.prototype.el = "#app-root";
	    
	    SearchView.prototype.events = {
		"keypress #searchInput": "debounceSearch"
	    };
	    
	    SearchView.prototype.debounceSearch = function() {
		clearTimeout(this.searchTimeout);
		this.searchTimeout = setTimeout(function() {
		    this.app = (_ref = window.app) != null ? _ref : {};
		    this.app.router.navigate("/search?q=" + encodeURIComponent($("#searchInput").val()), {trigger: true});
		}, 300);
	    }

	    SearchView.prototype.initialize = function(options) {
		var _ref;
		this.query = options.query;
		this.app = (_ref = window.app) != null ? _ref : {};
		this.render();
		return this;
	    };

	    SearchView.prototype.render = function() {
		$(this.el).html(this.template({query: this.query}));
		return this;
	    };

	    return SearchView;

	})(Backbone.View);

	this.app = (_ref = window.app) != null ? _ref : {};
	this.app.HomeView = HomeView;
	this.app.SearchView = SearchView;
	return this;
    });

}).call(this);
