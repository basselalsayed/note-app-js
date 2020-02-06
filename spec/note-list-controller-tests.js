(function(exports) {
  var noteList
  var controller
  var note1
  var note2

  function addNoteFromController() {
    testSetup()
    console.log('add note to array from controller')
    controller.addNote(note1)
    expect(controller.noteListModel.list[0].viewNote()).toEqual('note1')
  }

  function changeTextFromController() {
    fakeDiv()
    console.log("Changing text from controller");
    console.log("getting the div element: ", (JSON.stringify(document.getElementById("app").innerHTML)));
    testSetup()
    controller.changeText('wassup')
    console.log("changed the div element: ", (typeof JSON.stringify(document.getElementById("app"))));
    expect(document.getElementById("app").textContent).toEqual('wassup')
  }

  function insertNoteinHtml() {
    console.log("Inserting text from controller");
    fakeDiv()
    testSetup()
    controller.insertHTML()
    expect(document.getElementsByTagName('li').item(0).innerText).toEqual('Hello Partner')
  }

  fakeDiv = function() {
    var mockElement = document.createElement('div');
    mockElement.id = 'app'
    document.getElementsByTagName('body').item(0).appendChild(mockElement)
  }

  testSetup = function() {
    noteList = NoteList()
    controller = Controller(noteList)
    note1 = Note('note1')
    note2 = Note('"Hello Partner"')
    noteList.addNote(note1)
    noteList.addNote(note2)
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
  insertNoteinHtml()
  // viewAllNotes()
})(this)