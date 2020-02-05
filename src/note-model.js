(function(exports) {
  function Note(text) {
    this.text = text
  }

  Note.prototype.viewNote = function () {
    return this.text
  }
  
  var note = function(text) {
    return new Note(text)
  }
  exports.Note = note
})(this)