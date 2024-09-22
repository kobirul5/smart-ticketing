
const selectedSeatEl = document.getElementById('list-select-seat')
const availableSeat = document.getElementById('total-seat-decrees')
const totalPriceEl = document.getElementById('total-price');
const cupoonBtnEl = document.getElementById('cupoon-btn')
const cupoonInputEl = document.getElementById('cupoon-input')
const grandPriceEl =  document.getElementById('grand-price')

const seatLength = [];
let totalPrice = 0;
function handleSetSelect(event) {
    const eventValue = event.innerText

    if(seatLength.includes(eventValue)){
        return alert("seat already booked")
    }
    else if(seatLength.length < 4){
        event.classList.add('bg-primaryGreen', 'text-white')
    seatLength.push(event.innerText)
    document.getElementById('count-seat').innerText = seatLength.length
    // decrees seat
    const availableSeatValue = parseFloat(availableSeat.innerText);
    const newAvailableSeatValue = availableSeatValue -1;
    availableSeat.innerText = newAvailableSeatValue

//    total price
    totalPrice+= 550;
    totalPriceEl.innerText = totalPrice.toFixed(2)

    selectedSeatEl.innerHTML += `<li class="flex justify-between py-2">
    <span>${event.innerText}</span> 
    <span>Economy</span>
    <span>BDT 550</span>
    </li>`

    // active cupon
    if(seatLength.length > 3){
        cupoonBtnEl.removeAttribute('disabled')
        cupoonInputEl.removeAttribute('disabled')
    }
    }
    else{
        return alert('Maximum seat Booked')
    }
}

document.getElementById('cupoon-btn').addEventListener('click', function(){
    let cupoonSave = 0;
    if(cupoonInputEl.value !== 'NEW50' && cupoonBtnEl.valu !== 'Couple 20'){
         return alert('Invalid cupoon number')
    }else if(cupoonInputEl.value === 'NEW50'){
        cupoonSave = totalPrice * .15
        grandPriceEl.innerText = totalPrice - cupoonSave
    }   
    else if(cupoonBtnEl.value === 'Couple 20'){
        cupoonSave = totalPrice * .20
        grandPriceEl.innerText = totalPrice - cupoonSave
    }
})