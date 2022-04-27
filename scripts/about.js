 document.getElementById("myButton").onclick = function () {
        location.href = 'contact.html';
    };
	
	function ValidateForm(frm) {
if (frm.Name.value == "") { alert('Name is required.'); frm.Name.focus(); return false; }
if (frm.FromEmailAddress.value == "") { alert('Email address is required.'); frm.FromEmailAddress.focus(); return false; }
if (frm.FromEmailAddress.value.indexOf("@") < 1 || frm.FromEmailAddress.value.indexOf(".") < 1) { alert('Please enter a valid email address.'); frm.FromEmailAddress.focus(); return false; }
if (frm.Comments.value == "") { alert('Please enter comments or questions.'); frm.Comments.focus(); return false; }
return true; }

$.ajax({
    url: 'about.json',
    error: function(xhr, status, error){
      alert("Error: " + xhr.status + " - " + error);
  
    },
    dataType: 'json',
    success: function(data){
      $(data)[0].images.forEach(function(image){
        $('#image').append("<a href=" + '"' + image.image + '"' + "data-lightbox=" + '"images"' + "</a>")
  
      })
    }
  })