const ageCtrl = (function(){

    const d = new Date();
    const oneDay = 1000*3600*24;

    let Age = function(birthDate){
        this.birthDate = new Date(birthDate);
    }

    Age.prototype.compareNow = function(){
        return d - this.birthDate;
    };

    Age.prototype.getDiffDays = function(timeDiff){
        return Math.round(timeDiff / oneDay);
    };



    return {
        getCurDate: function(){
            

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
        calcAge:function(birthDate){

            let age = new Age(birthDate);

            let ageMill = age.compareNow();
            let diffDays = age.getDiffDays(ageMill);

            if(ageMill < 0) {
                alert('Please check your birthdate');
            }
            if(diffDays > 7) {
                return 'Age is greater than 7 days';
            } else if(diffDays > 0) {
                return `${diffDays} ${(diffDays > 1) ? 'days' : 'day'}`;
            } else {
                return -1;
            }
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
        //    ageCtrl.calcAge(birthDate.yearOfBirth);
            const birthDate = uiCtrl.getInput();
            const age = ageCtrl.calcAge(birthDate.yearOfBirth);
            console.log(age);
        });
    };

    return {
        init: function(){
            uiCtrl.setDefaultDate(ageCtrl.getCurDate());
            setupEventListener();
        }
    }

})(uiCtrl,ageCtrl);

controller.init();