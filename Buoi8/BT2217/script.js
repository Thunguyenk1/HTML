var tieudeTag = document.getElementById('tieude_id')
var hinhanhTag = document.getElementById('img_id')
var noidungTag = document.getElementById('noidung_id')

var dialogTag = document.getElementById('dialog_id')

function submitData() {
    let td = tieudeTag.value
    let ha = hinhanhTag.value
    let nd = noidungTag.value

    if(td == "" || ha == "" || nd == "") {
        alert("Tieu de | Hinh anh | Noi dung khong dung dinh dang")
        return
    }
    
    dialogTag.style.display = "block"
}

function resetData() {
    tieudeTag.value = ""
    hinhanhTag.value = ""
    noidungTag.value = ""
}

function closeDialog() {
    dialogTag.style.display = "none"
}