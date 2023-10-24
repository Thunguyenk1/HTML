var listSV = [
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'},
    {'Ten': 'Nguyen Thi Xuan Thu', 'Tuoi': '22', 'Dia chi': 'Ha noi', 'Email': 'thunguyenhtay@gmail.com', 'SDT': '0869122700'}
]

function SinhVien(){
    for(i = 0; i < 21; i++){
        document.write(
            `<tr>
                <td>${i+1}</td>
                <td>${listSV[i].Ten}</td>
                <td>${listSV[i].Tuoi}</td>
                <td>${listSV[i]["Dia chi"]}</td>
                <td>${listSV[i].Email}</td>
                <td>${listSV[i].SDT}</td>
            </tr>`
        )
    }
}