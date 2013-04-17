(function() {
    var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
    
    jQuery(function() {
	var AppView, HomeView, SearchView, _ref;
	
	AppView = (function(_super) {

	    __extends(AppView, _super);
	    
	    function AppView() {
		this.render = __bind(this.render, this);
		return HomeView.__super__.constructor.apply(this, arguments);
	    }
	    
	    AppView.prototype.el = "body";

	    AppView.prototype.events = {
		"keyup #searchInput": "debounceSearch",
	    };
	    
	    AppView.prototype.initialize = function(options) {
		var _ref;
		this.app = (_ref = window.app) != null ? _ref : {};
		return this;
	    };
	    
	    AppView.prototype.debounceSearch = function() {
		clearTimeout(this.searchTimeout);
		this.searchTimeout = setTimeout(function() {
		    this.app = (_ref = window.app) != null ? _ref : {};
		    this.app.router.navigate("/search?q=" + encodeURIComponent($("#searchInput").val()), {trigger: true});
		}, 300);
	    }
	    return AppView;

	})(Backbone.View);

	HomeView = (function(_super) {

	    __extends(HomeView, _super);
	    
	    function HomeView() {
		this.render = __bind(this.render, this);
		return HomeView.__super__.constructor.apply(this, arguments);
	    }
	    
	    HomeView.prototype.template = Handlebars.compile($("#home-template").html());
	    
	    HomeView.prototype.el = "#app-root";
	    
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
	    
	    SearchView.prototype.initialize = function(options) {
		var _ref, temp_kural;
		this.query = options.query;
		this.result = [];
		for(var i=0;i<kurals.length;++i) {
		    for(var j=0;j<kurals[i]["Kural"].length;++j) {
			temp_kural = Object.create(kurals[i]["Kural"][j]);
			if(temp_kural["Line1"].indexOf(this.query) != -1 || temp_kural["Line2"].indexOf(this.query) != -1) {
			    temp_kural["Line1"] = temp_kural["Line1"].replace(this.query, '<span class="label label-success">' +this.query+'</span>');
			    temp_kural["Line2"] = temp_kural["Line2"].replace(this.query, '<span class="label label-success">' +this.query+'</span>');
			    temp_kural["Number"] %= 10;
			    this.result.push(temp_kural);
			}
		    }
		}
		this.render();
		return this;
	    };

	    SearchView.prototype.render = function() {
		$(this.el).html(this.template({query: this.query, results: this.result}));
		return this;
	    };

	    return SearchView;

	})(Backbone.View);

	this.app = (_ref = window.app) != null ? _ref : {};
	this.app.AppView = AppView;
	this.app.HomeView = HomeView;
	this.app.SearchView = SearchView;
	new AppView();
	return this;
    });

}).call(this);
