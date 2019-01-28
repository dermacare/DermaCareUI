function stop(event) {
	event.stopPropagation();
	event.preventDefault();
	return event;
}

module.exports = {
	stop
};
