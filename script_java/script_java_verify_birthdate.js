function validareCNP(){
    const cnp=document.getElementById('cnp').value;
    const dbate=new Date(document.getElementById('bdate').value);
    if(cnp.length!==13|| isNaN(cnp)){
        alert("CNP must be 13 digits!");
        return false;
    }
    const sexCentury=parseInt(cnp.charAt(0),10);
    const year=parseInt(cnp.substring(1,3),10);
    const month=parseInt(cnp.substring(3,5),10);
    const day=parseInt(cnp.substring(5,7),10);
    const controlDigitt=parseInt(cnp.charAt(12),10);
    let century;
    if(sexCentury===1||sexCentury===2){
        century=1900;
    }
    else if(sexCentury===5||sexCentury===6){
        century=2000;
    }
    else if(sexCentury===7||sexCentury===8){
        century=2100;
    }
    else {
        alert('Invalid CNP century digit.');
        return false;
    }
    const controlSequence = "279146358279";
            let sum = 0;

            for (let i = 0; i < 12; i++) {
                sum += parseInt(cnp.charAt(i), 10) * parseInt(controlSequence.charAt(i), 10);
            }

            const remainder = sum % 11;
            const calculatedControlDigit = (remainder === 10) ? 1 : remainder;

            if (calculatedControlDigit !== controlDigit) {
                alert('Invalid CNP control digit.');
                return false;
            }

            return true;
         document.addEventListAener('DOMContentLoaded', function () {
                const form = document.querySelector('.login-form');
                form.addEventListener('submit', function (event) {
                    if (!validateCNP()) {
                        event.preventDefault();
                    }
                });
            });
        }
