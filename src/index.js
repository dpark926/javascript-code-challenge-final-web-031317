$(document).ready(function(){
  $('#photo-form').on('submit', function(event) {
    event.preventDefault()
    const imageURL = $('#image_url').val()
    const textInput = $('#text_input').val()

    // logInputs(imageURL, textInput)
    // debugger

    ifEmpty(imageURL, textInput)
  })
})

function logInputs(imgUrl, txtInput) {
  console.log(imgUrl)
  console.log(txtInput)
}

function append(imageUrl, textInput){
  $('#photo-list').append(`<div><h3>${textInput}</h3><img src=${imageUrl} style="width:304px;height:228px;"></div>`)
}

function clearInputBoxes() {
  $('#image_url').val("")
  $('#text_input').val("")
}

function ifEmpty(imageUrl, textInput) {
  if( imageUrl === "" || textInput === "" ) {
    alert("Please Fill All Required Field");
    clearInputBoxes()
  } else {
    append(imageUrl, textInput)
    clearInputBoxes()
  }
}


// http://oi39.tinypic.com/mrre3a.jpg
