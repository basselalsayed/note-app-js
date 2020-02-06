
(function(exports) {
  let noteListView
  let noteList
  let note
  let note2
  let note3
  // noteList.addNote('hello')

  function notesDisplay() {
    console.log('displayNotes')
    setUp()
    // note = Note('hello')
    noteList.addNote(note)
    noteListView = new NoteListView(noteList)
    expect(noteListView.displayNotes()).toEqual(`<ul><li><div><a href='#notes/${note.id}'>hello</a></div></li></ul>`)
  }

  function notesDisplayMultiple() {
    console.log('displayNotesMultiple')
    setUp()
    // note2 = new Note('howdy')
    // note3 = new Note("The text in a note could be too long to be shown in full in the main note list. In this challenge, youll update your note list view code to only show the first few characters ")
    noteList.addNote(note3)
    noteList.addNote(note2)
    noteListView = new NoteListView(noteList)
    expect(noteListView.displayNotes()).toEqual(`<ul><li><div><a href='#notes/${note3.id}'>The text in a note c</a></div></li><li><div><a href='#notes/${note2.id}'>howdy</a></div></li></ul>`)
  }


  function notesDisplayNone() {
    console.log('displayNotesNone')
    setUp()
    noteListView = new NoteListView(noteList)
    expect(noteListView.displayNotes()).toEqual('Nothing to see here...')
  }
  
  function setUp() {
    noteList = new NoteList();
    note = Note('hello');
    note2 = Note('howdy');
    note3 = Note("The text in a note could be too long to be shown in full in the main note list. In this challenge, youll update your note list view code to only show the first few characters ");
  }
  
  notesDisplay()
  notesDisplayMultiple()
  notesDisplayNone()
})(this)

