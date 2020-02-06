(function(exports){

  let note
  let noteList
  let noteListView

  function singleNoteViewModel() {
    note = new Note("hello");
    singleNoteView = new SingleNoteView(note);
    expect(singleNoteView.returnHTML()).toEqual('<div>hello</div>')
  }

  singleNoteViewModel()
})(this)