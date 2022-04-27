function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
$.ajax({
  url: 'gallery.json',
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