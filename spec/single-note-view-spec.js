(function(exports){

  let note
  let noteList
  let noteListView

  function singleNoteViewModel() {
    note = new Note("hello");
    singleNoteView = new SingleNoteView(note);
    expect(singleNoteView.returnHTML()).toEqual('<div>hello</div>')
  }

  
  // function singleNoteView () {
  //   console.log('Single Note View')
  //   document.getElementById("note-1").click();
  //   expect(document.getElementsByTagName('body').items(0)).toEqual('Favourite drink: seltzer');
  // }

  singleNoteViewModel()
})(this)