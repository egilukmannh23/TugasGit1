function tambah(){
    var frm = document.getElementById('frm');
    var angka1 =  parseFloat(frm.angka1.value);
    var angka2 = parseFloat(frm.angka2.value);
    var total = angka1 + angka2;
    frm.hasil.value = total; 
}

function kurang(){
    var frm = document.getElementById('frm');
    var angka1 = parseFloat(frm.angka1.value);
    var angka2 = parseFloat(frm.angka2.value);
    var total = angka1 - angka2;
    frm.hasil.value = total;
}

function kali(){
    var frm = document.getElementById('frm');
    var angka1 = parseFloat(frm.angka1.value);
    var angka2 = parseFloat(frm.angka2.value);
    var total = angka1 * angka2;
    frm.hasil.value = total;
}

function bagi(){
    var frm = document.getElementById('frm');
    var angka1 = parseFloat(frm.angka1.value);
    var angka2 = parseFloat(frm.angka2.value);
    var total = angka1 / angka2;
    frm.hasil.value = total;
}