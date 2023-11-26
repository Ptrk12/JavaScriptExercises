window.onload = function(){
    const createNewButton = document.getElementById("add-new-fields");

    createNewButton.onclick = function(){
        const submitButton = document.getElementById("submit-button")
        const form = document.forms[0]
        const newTextInputField = document.createElement('input');
        newTextInputField.setAttribute('type','text');
        const newCheckboxInputField = document.createElement('input');
        newCheckboxInputField.setAttribute('type','checkbox');
        form.insertBefore(newTextInputField,submitButton);
        form.insertBefore(newCheckboxInputField,submitButton);
    }

    const submitButton = document.getElementById("submit-button");

    submitButton.onclick = function(e){
        e.preventDefault();
        if(isValid()){
            console.log("submit")
        }
    }
    function isValid(){
        let checkbxArray = [];
        let inputTextArray = [];
        const form = document.getElementById("form");
        const checkBx = form.querySelectorAll('input[type="checkbox"]:checked')
        checkbxArray = Array.from(checkBx).map(x=>x.value);
        const inputs = form.querySelectorAll('input[type="text"]')
        for(let input of inputs){
            if(input.value.trim() !== ""){
                inputTextArray.push(input)
            }
        }
        if(checkbxArray.length > 0 && inputTextArray.length > 0){
            return true;
        }
      return false;
    }
}

