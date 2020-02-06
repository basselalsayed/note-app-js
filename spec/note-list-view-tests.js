
(function(exports) {
  let noteListView
  // let noteList = new NoteList()
  // noteList.addNote('hello')

  function notesDisplay() {
    console.log('displayNotes')

    let noteList = new NoteList()
    noteList.addNote('hello')

    noteListView = new NoteListView(noteList)
    
    expect(noteListView.displayNotes()).toEqual('<ul><li><div>hello</div></li></ul>')
  }

  function notesDisplayMultiple() {
    console.log('displayNotesMultiple')

    let noteList = new NoteList()
    noteList.addNote("The text in a note could be too long to be shown in full in the main note list. In this challenge, youll update your note list view code to only show the first few characters ")
    noteList.addNote('howdy')

    noteListView = new NoteListView(noteList)
    
    expect(noteListView.displayNotes()).toEqual('<ul><li><div>The text in a note c</div></li><li><div>howdy</div></li></ul>')
  }


  function notesDisplayNone() {
    console.log('displayNotesNone')

    let noteList = new NoteList()
    noteListView = new NoteListView(noteList)
    
    expect(noteListView.displayNotes()).toEqual('Nothing to see here...')
  }
  
  
  notesDisplay()
  notesDisplayMultiple()
  notesDisplayNone()
})(this)

