(function(exports) {
  var noteList
  var controller
  var note1
  var note2

  function addNoteFromController() {
    testSetup()
    console.log('add note to array from controller')
    controller.addNote('note1')
    expect(controller.noteListModel.list[0].viewNote()).toEqual('note1')
  }

  function changeTextFromController() {
    fakeDiv()
    console.log("Changing text from controller");
    console.log("getting the div element: ", (JSON.stringify(document.getElementById("app").innerHTML)));
    testSetup()
    controller.changeText('wassup')
    expect(document.getElementById("app").textContent).toEqual('wassup')
  }

  function insertNoteinHtml() {
    console.log("Inserting text from controller");
    fakeDiv()
    testSetup()
    controller.addNote("Hello Partner")
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
  }

  function showSingleNote() {
    console.log("Showing Single Note on Page")
    fakeDiv();
    console.log(document.getElementById("16"))
    document.getElementById('16').click();
    expect(document.getElementById("app").innerHTML).toEqual('<div>Howdy Partner</div>')
  }

  function findNote() {
    console.log("Finding a note")
    fakeDiv();
    testSetup();
    controller.addNote("Howdy Partner")
    console.log(controller.noteListModel.viewAll())
    expect(controller.noteListModel.findNote('18').text).toEqual("Howdy Partner")
  }

  showSingleNote();
  addNoteFromController();
  changeTextFromController();
  insertNoteinHtml();
  findNote();
  // showSingleNote();
  // viewAllNotes()
})(this)