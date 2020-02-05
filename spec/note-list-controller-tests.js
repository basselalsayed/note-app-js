(function(exports) {
  var noteList


  function addNoteFromController() {
    noteList = NoteList()
    controller = Controller(noteList)
    console.log('add note to array from controller')
    controller.addNote('note1')
    expect(controller.noteListModel.list[0].viewNote()).toEqual('note1')
  }

  function changeTextFromController() {
    
    var mockElement = document.createElement("div");
    mockElement.id = "app";
    document.getElementById("app").appendChild("hello");
    console.log(document);
    noteList = NoteList()
    controller = Controller(noteList)
    console.log('change text from controller')
    controller.changeText('wassup')
    expect(document.getElementById("app").textContent).toEqual('wassup')
  }

  // function viewAllNotes() {
  //   noteList = new NoteList()
  //   console.log('viewAllNotes')
  //   noteList.addNote('note1')
  //   noteList.addNote('note2')
  //   expect(noteList.viewAll()[0]).toBe(new Note)
  // }

  addNoteFromController()
  changeTextFromController()
  // viewAllNotes()
})(this)