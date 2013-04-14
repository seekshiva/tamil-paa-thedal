(function() {
    var _ref;

    $.ajaxSetup({
	cache: false
    });

    this.app = (_ref = window.app) != null ? _ref : {};

    jQuery(function() {
	return $(document).ready(function() {
	    var _ref1;
	    this.app = (_ref1 = window.app) != null ? _ref1 : {};
	    this.app.router = new this.app.ApplicationRouter();
	    $.ajaxSetup({
		global: true,
		beforeSend: function(xhr) {
		    return xhr.setRequestHeader("X-CSRF-Token", $("meta[name='csrf-token']").attr("content"));
		}
	    });
	    Backbone.history.start({
		pushState: false
	    });
	    return this;
	});
    });

}).call(this);
