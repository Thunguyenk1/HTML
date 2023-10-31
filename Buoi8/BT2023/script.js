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

loadData()

function selectUnitPrice() {
    let product = productTag.value
    if(product != ''){
		unitPriceTag.value = product
		quantityTag.disabled = false
	}
	else{
		unitPrice.value = '0'
		quantityTag.disabled = true
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
		ccn1Tag.disabled = false
		ccn2Tag.disabled = false
		ccn3Tag.disabled = false
		ccn4Tag.disabled = false
	}else {
		ccn1Tag.disabled = true
		ccn2Tag.disabled = true
		ccn3Tag.disabled = true
		ccn4Tag.disabled = true
	}
}

function saveData() {
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

	localStorage.setItem('product', product)
	localStorage.setItem('uniPrice', unitPrice)
	localStorage.setItem('quantity', quantity)
	localStorage.setItem('totalPrive', totalPrive)
	localStorage.setItem('fullname', fullname)
	localStorage.setItem('shippingAddress', shippingAddress)
	localStorage.setItem('creditCard', creditCard)
	localStorage.setItem('ccn1', ccn1)
	localStorage.setItem('ccn2', ccn2)
	localStorage.setItem('ccn3', ccn3)
	localStorage.setItem('ccn4', ccn4)

	return false
}

function loadData() {
	productTag.value = localStorage.getItem('product')
	unitPriceTag.value = localStorage.getItem('uniPrice')
	quantityTag.value = localStorage.getItem('quantity')
	totalPriveTag.value = localStorage.getItem('totalPrive')
	fullnameTag.value = localStorage.getItem('fullname')
	shippingAddressTag.value = localStorage.getItem('shippingAddress')
	creditCardTag.value = localStorage.getItem('creditCard')
	ccn1Tag.value = localStorage.getItem('ccn1')
	ccn2Tag.value = localStorage.getItem('ccn2')
	ccn3Tag.value = localStorage.getItem('ccn3')
	ccn4Tag.value = localStorage.getItem('ccn4')
}

function resetData() {
	localStorage.removeItem('product')
	localStorage.removeItem('uniPrice')
	localStorage.removeItem('quantity')
	localStorage.removeItem('totalPrive')
	localStorage.removeItem('fullname')
	localStorage.removeItem('shippingAddress')
	localStorage.removeItem('creditCard')
	localStorage.removeItem('ccn1')
	localStorage.removeItem('ccn2')
	localStorage.removeItem('ccn3')
	localStorage.removeItem('ccn4')
}