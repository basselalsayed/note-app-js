(function(exports) {

  function singleNoteView(note) {
    this.note = note
  }

  singleNoteView.prototype.returnHTML = function() {
    return `<div>${this.note.text}</div>`
  }

  exports.SingleNoteView = singleNoteView;
})(this)