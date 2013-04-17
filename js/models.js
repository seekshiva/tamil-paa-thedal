(function() {
    var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    jQuery(function() {
	var Kural, Kurals, _ref;
	
	Kural = (function(_super) {
	    
	    __extends(Kural, _super);

	    function Kural() {
		return Kural.__super__.constructor.apply(this.arguments);
	    }
	    
	    Kural.prototype.defaults = {
		
	    };
	})(Backbone.Model);

	this.app = (_ref = window.app) != null ? _ref : {};
	this.app.Kural = Kural;
	this.app.Kurals = Kurals;
	return this;
	
    });

}).call(this);
