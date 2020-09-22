//Use this variable to set the id's for the individual notes once they are created
document.getElementById("submitButton").onclick = function () {
  //Run only if the text field isn't empty
  if (document.getElementById("note").value.length > 0) {
    //set content to the new diary entry
    let content = document.getElementById("note").value;
    let selectedColour = document.getElementById("colour").value;
    //create new div element for each new diary entry
    let newDiv = document.createElement("div");
    //append the new div to the output section
    document.getElementById("output").appendChild(newDiv);
    let currentNote = document.getElementById("output").lastElementChild;
    //Set class of new entries to 'myNotes'
    currentNote.className = "myNotes";

    /*Count how many notes have been created so that we can use this count as the ID's as we create
          each new entry (the id will always be unique this way) */
    IdCount = document.getElementsByClassName("myNotes").length;

    //set the ID to the entry
    currentNote.id = IdCount;
    //alert("The ID of the newest note is: " + currentNote.id);

    //////////////////DELETE FUNCTION///////////////////////

    //create new button element
    let deleteButton = document.createElement("BUTTON");
    deleteButton.className = "deleteButton";
    deleteButton.innerHTML = "Delete";
    deleteButton.type = "button";
    /*set the id of the delete button to the id of its div container followed with the letter d
        This will make sure the id is unique and easily partnered with its container div*/
    deleteButton.id = currentNote.id + "d";

    /*when the button is clicked, remove the element with the id of the delete button 
        without the last character (d) using .remove()*/
    deleteButton.onclick = function () {
      document.getElementById(deleteButton.id.slice(0, -1)).remove();
    };

    /////////////////EDIT FUNCTION/////////////////////
    let editButton = document.createElement("BUTTON");
    editButton.className = "editButton";
    editButton.innerHTML = "Edit";
    editButton.type = "button";
    editButton.id = currentNote.id + "e";

    editButton.onclick = function () {
      /*when the edit button is clicked, the user is prompted 
            to enter in what they would like to change the contents of the note to */
      let editedText = prompt(
        "What would you like to change the contents of this entry to?"
      );
      if (editedText !== null) {
        document.getElementById(currentNote.id).innerHTML = editedText + "<br>";
        //The delete and edit buttons are then added back into the edited note
        document.getElementById(currentNote.id).appendChild(deleteButton);
        document.getElementById(currentNote.id).appendChild(editButton);
      }
    };
    ////////////////////////////////////////////////////////////////////////////////////

    //set the text of the new note to be the usets input from the text field
    document.getElementById(currentNote.id).innerHTML = content + "<br>";
    //append the edit and delete buttons to the note div
    document.getElementById(currentNote.id).appendChild(deleteButton);
    document.getElementById(currentNote.id).appendChild(editButton);
    //set the background colour of the note div to the colour the user selected from the list
    document.getElementById(
      currentNote.id
    ).style.backgroundColor = selectedColour;
  }
};
