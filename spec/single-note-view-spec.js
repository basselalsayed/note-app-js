(function(exports){

  let note
  let noteList
  let noteListView

  function singleNoteViewModel() {
    console.log('Single Note View Test')
    note = new Note("hello");
    singleNoteView = new SingleNoteView(note);
    expect(singleNoteView.returnHTML()).toEqual('<div>hello</div>')
  }

  singleNoteViewModel()
})(this)