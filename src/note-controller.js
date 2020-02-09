(function(exports) {
  function Controller(noteListModel) {
    this.noteListModel = noteListModel;
    this.noteListView = NoteListView(this.noteListModel);

  }



  // Controller.prototype.changeText = function(text) {
  //   console.log('inside the change text element')
  //   let element = document.getElementById("app");
  //   element.innerHTML = text;
  // }

  Controller.prototype.addNote = function(note) {
    this.noteListModel.addNote(Note(note));
  }
  Controller.prototype.insertHTML = function() {
    document
      .getElementById("app")
      .innerHTML = (this.noteListView.displayNotes());
  }
  // var notelist = this.noteListModel.viewAll()

  Controller.prototype.listenForClick = function() {
    var a = this.noteListModel
    window.addEventListener("hashchange", function() {
      var id = location.hash.split("#notes/")[1];
      console.log('this', this)
      // a.findNote(id);
      document
        .getElementById("app")
        .innerHTML = new SingleNoteView(a.findNote(id)).returnHTML()
    })
  };

  // Controller.prototype = (function() {
    
    Controller.prototype.changeText = function(text) {
      console.log('inside the change text element')
      let element = document.getElementById("app");
      element.innerHTML = text;
    }


  //   // function listenForClick() {
  //   //   window.addEventListener("hashchange", () => {this.showNoteForCurrentPage()});
  //   // };

  //   function showNoteForCurrentPage() {
  //     showNote(getNoteIdFromUrl(window.location));
  //   };

  //   function getNoteIdFromUrl(location) {
  //     console.log(location.hash.split("#notes/")[1])
  //     return location.hash.split("#notes/")[1];
  //   };

  //   function showNote(id) {
  //     console.log('this');
  //     console.log(this);
  //     let a = new SingleNoteView(this.noteListModel.findNote(id));
  //     console.log(a);
  //     let b = document.getElementById("app");
  //     console.log(b);
  //     document
  //       .getElementById("app")
  //       .innerHTML = b.text
  //     // b.innerHTML = (new SingleNoteView(a).returnHTML());
  //   };

  //   function findNote(id) {
  //     console.log(this.noteListModel.viewAll());
  //     return this.noteListModel.viewAll().find(element => element.id === id);
  //   };

  //   return {
  //     findNote: findNote,
  //     changeText: changeText,
  //     addNote: addNote,
  //     insertHTML: insertHTML,
  //     // listenForClick: listenForClick,
  //     showNote: showNote,
  //     showNoteForCurrentPage: showNoteForCurrentPage
  //   }
  // })();

  // function findNote = function(id) {
  //   return this.noteListModel.list.find(element => element.id === id);
  // }

  var controller = function(noteList) {
    return new Controller(noteList)
  }

  exports.Controller = controller;
})(this);


// let a = NoteList();
// let c = Controller(a);
// c.addNote("Fuck You");
// c.addNote("Love You");
// c.insertHTML();
// let d = document.getElementById('app');
// let f = c.noteListModel.list.find(element => element.id === '0').text;
