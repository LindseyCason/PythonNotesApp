function deleteNote(noteId){
    fetch('deletenote', {
        method: 'POST',
        body: JSON.stringify({noteId: noteId}),
    }).then((_res)=>{
        window.location.href = "/";
    });
}

function noteCount(user_notes){
    console.log(user_notes)
    return user_notes.length()
}