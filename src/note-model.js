(function(exports) {

  let id = 0
  function Note(text) {
    this.text = text;
    this.id = id++;
  }

  Note.prototype.viewNote = function () {
    return this.text
  }
  
  var note = function(text) {
    return new Note(text)
  }
  exports.Note = note
})(this)