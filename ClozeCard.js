function ClozeCard (answer, sentence) {
	this.answer = answer;
	this.sentence = sentence;
}

ClozeCard.prototype.showIncomplete = function() {
	var incomplete = this.sentence.replace(this.answer, "...");
	console.log(incomplete);
}

ClozeCard.prototype.showComplete = function() {
	console.log(this.sentence);
}

module.exports = ClozeCard;