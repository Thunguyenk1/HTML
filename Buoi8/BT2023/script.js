// Product Information
var productTag = document.getElementById('product_id')
var unitPriceTag = document.getElementById('UnitPrice_id')
var quantityTag = document.getElementById('quantity_id')
var totalPriveTag = document.getElementById('totalPrive_id')

//Shipping Information
var fullnameTag = document.getElementById('fullname_id')
var shippingAddressTag = document.getElementById('shippingAddress_id')
var creditCardTag = document.getElementById('creditCard_id')
var ccn1Tag = document.getElementById('ccn1_id')
var ccn2Tag = document.getElementById('ccn2_id')
var ccn3Tag = document.getElementById('ccn3_id')
var ccn4Tag = document.getElementById('ccn4_id')

function selectUnitPrice() {
    let product = productTag.value
    if(product != ''){
		unitPriceTag.value = product
		document.getElementById('quantity_id').disabled = false
	}
	else{
		unitPrice.value = '0'
		document.getElementById('quantity_id').disabled = true
	}
}

function updateQuantity(){
	quantity = quantityTag.value
	unitPrice = unitPriceTag.value
	totalPriveTag.value = quantity * unitPrice
}

function selectCreditCard(){
	let creditcard = creditCardTag.value

	if(creditcard != ''){
		document.getElementById('ccn1_id').disabled = false
		document.getElementById('ccn2_id').disabled = false
		document.getElementById('ccn3_id').disabled = false
		document.getElementById('ccn4_id').disabled = false
	}else {
		document.getElementById('ccn1_id').disabled = true
		document.getElementById('ccn2_id').disabled = true
		document.getElementById('ccn3_id').disabled = true
		document.getElementById('ccn4_id').disabled = true
	}
}

function submitData() {
	// Product Information
	let product = productTag.value
	let unitPrice = unitPriceTag.value
	let quantity = quantityTag.value
	let totalPrive = totalPriveTag.value

	//Shipping Information
	let fullname = fullnameTag.value
	let shippingAddress = shippingAddressTag.value
	let creditCard = creditCardTag.value
	let ccn1 = ccn1Tag.value
	let ccn2 = ccn2Tag.value
	let ccn3 = ccn3Tag.value
	let ccn4 = ccn4Tag.value

	if(product == "" || quantity == "" || fullname == "" || shippingAddress == "" || creditCard == "" || ccn1 == "" || ccn2 == ""|| ccn3 == "" || ccn4 == "") {
        alert("Noi dung khong dung dinh dang")
        return
    }

	alert("Luu thanh cong")
}

function resetData() {
	productTag.value =  ""
	unitPriceTag.value =  ""
	quantityTag.value =  ""
	unitPriceTag.value =  ""
	totalPriveTag.value =  ""
	fullnameTag.value =  ""
	shippingAddressTag.value =  ""
	creditCardTag.value =  ""
	ccn1Tag.value =  ""
	ccn2Tag.value =  ""
	ccn3Tag.value =  ""
	ccn4Tag.value =  ""
}