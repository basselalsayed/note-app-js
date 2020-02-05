(function(exports) {
  function NoteList() {
    this.list = []
  }

  NoteList.prototype.addNote = function (note) {
    this.list.push(Note(note))
  }

  NoteList.prototype.viewAll = function () {
    return this.list
  }

  var noteList = function() { return new NoteList }

  exports.NoteList = noteList
})(this)