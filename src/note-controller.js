(function(exports) {
  function Controller(noteListModel) {
    this.noteListModel = noteListModel;
    this.noteListView = NoteListView(this.noteListModel);

  }

  Controller.prototype.changeText = function(text) {
    let element = document.getElementById("app");
    element.innerHTML = text;
  }

  Controller.prototype.addNote = function(note) {
    this.noteListModel.addNote(note);
  }
  Controller.prototype.insertHTML = function() {
    document.write(this.noteListView.displayNotes());
  }

  var controller = function(noteList) {
    return new Controller(noteList)
  }

  exports.Controller = controller
})(this)









