const ageCtrl = (function(){

    return {
        getCurDate: function(){
            const d = new Date();

            let month = d.getMonth() + 1;

            // check if month value is only single digit. If so add a zero on the beginning
            if(month.toString().length === 1){
                month = `0${month.toString()}`;
            }

            let day = d.getDate();

            // check if day value is only single digit. If so add a zero on the beginning
            if(day.toString().length === 1) {
                day = `0${day.toString()}`
            }

            const date = `${d.getFullYear()}-${month}-${day}`;

            return date;

        },
        calcAge:function(){
            
        }
    };

})();

const uiCtrl = (function(){
    const DOM = {
        calcBtn: '.calc-age',
        yearOfBirth: '.date-of-birth'
    };

    return {
        getDOM: function() {
            return DOM; // return the DOM Strings
        },
        getInput: function(){
            return {
                // get the value of the date input field and assign it to the variable yearOfBirth
                yearOfBirth: document.querySelector(DOM.yearOfBirth).value 
            }
        },
        setDefaultDate: function(date){
            document.querySelector(DOM.yearOfBirth).value = date;
        }
    };
})();

const controller = (function(uiCtrl,ageCtrl){

    const DOM = uiCtrl.getDOM();

    const setupEventListener = function(){
        document.querySelector(DOM.calcBtn).addEventListener('click',function(){
           
        });
    };

    return {
        init: function(){
            uiCtrl.setDefaultDate(ageCtrl.getCurDate());
            setupEventListener();
        }
    }

})(uiCtrl,ageCalc);

controller.init();