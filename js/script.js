 var text = "Submit"
 document.getElementById("kirim").addEventListener('click', function() {
   console.log(text)
 })

document.getElementById("name_full").
addEventListener('input', function() {
  var nama = document.getElementById("name_full").value
  console.log(nama)
})

 document.getElementById("tgl").
 addEventListener('input', function() {
  var Lahir = document.getElementById("tgl").
  value
  console.log(Lahir)
})


document.getElementById('Pria').
addEventListener('change', function() {
 var lakiLaki = document.getElementById("Pria").
 value 
 console.log(lakiLaki)
})


document.getElementById('wanita').
addEventListener('change', function() {
 var women = document.getElementById("wanita").
 value 
 console.log(women)
})





document.getElementById("pesan").
addEventListener('input', function(){
var message = document.getElementById("pesan").
value
 console.log(message)
})





