var _ = require("lodash");
var Chan = require("./chan");

module.exports = Network;

function Network(attr) {
	_.merge(this, _.extend({
		id: global.id = ++global.id || 1,
		client: null,
		connected: false,
		host: "",
		name:  "CS61A" || attr.host,
		channels: [],
	}, attr));
	
	// Add lobby
	this.channels.unshift(
		new Chan({name: this.name, type: "lobby"})
	);
};

Network.prototype.addChan = function(chan) {
		chan.network = this;
		this.channels.push(chan);
};

Network.prototype.toJSON = function() {
	var clone = _.omit(this, [
		"client",
		"connected",
	]);
	return clone;
};

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}
