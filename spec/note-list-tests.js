(function(exports) {
  var noteList
  var note
  var note2

  function addNoteToArray() {
    setUp()
    console.log('addNoteToArray')
    expect(noteList.list[0].viewNote()).toEqual('note1')
  }

  function viewAllNotes() {
    setUp()
    console.log('viewAllNotes')
    expect(noteList.viewAll()[0]).toBe(new Note)
  }

  function setUp () {
    noteList = new NoteList();
    note = new Note('note1');
    note2 = new Note('note2');
    noteList.addNote(note);
    noteList.addNote(note2);
  }

  addNoteToArray()
  viewAllNotes()
})(this)