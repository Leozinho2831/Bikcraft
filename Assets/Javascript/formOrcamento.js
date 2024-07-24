function choiceItem(){

    const checkedInsurance = document.querySelector('#Seguro');
    const checkedBike = document.querySelector('#Bikcraft');
    const optionsBike = document.querySelector('.budget__bike');
    const optionsInsurance = document.querySelector('.budget__insurance');

    if (checkedInsurance.checked && checkedBike.checked){
        optionsBike.classList.remove('disableOption');
        optionsInsurance.classList.remove('disableOption');
    } else if(checkedBike.checked){
        optionsBike.classList.remove('disableOption');
        optionsInsurance.classList.add('disableOption');
    } else if(checkedInsurance.checked){
        optionsBike.classList.add('disableOption');
        optionsInsurance.classList.remove('disableOption');
    } else {
        optionsBike.classList.add('disableOption');
        optionsInsurance.classList.add('disableOption');
    }

};