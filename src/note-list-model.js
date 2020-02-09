(function(exports) {
  function NoteList() {
    this.list = []
  }
  NoteList.prototype.addNote = function(note) {
    this.list.push(note)
  }

  NoteList.prototype.viewAll = function () {
    return this.list
  }

  NoteList.prototype.findNote = function(id) {
    console.log(this.viewAll());
    return this.list.find(element => element.id === id);
  };

  var noteList = function() { return new NoteList }

  exports.NoteList = noteList;
})(this)