var modal = document.getElementById("modal-detail-batch"); //untuk mengambil modal
var button = document.getElementById("detail-batch"); //mengambil elemen button untuk buka modal
var span = document.getElementsByClassName("close")[0]; //mengambil elemen span untuk close modal

//ketika user mengklik button, maka akan membuka modal
button.onclick = function(){
    modal.style.display = "block";
}
//ketika user mengklik span, maka akan menutup modal
span.onclick = function(){
    modal.style.display = "none";
}
//ketika user mengklik dimana saja atau di luar modal, maka akan otomatis menutup modal
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}