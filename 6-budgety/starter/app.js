//Budget Controller
var budgetController = (function() {
    
})();

//UI Controller
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: ".add__btn"
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }  
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputButton).addEventListener("click", crtlAddItem);
    
        document.addEventListener("keypre  ss", function(event) { 
            if (event.keyCode === 13 || event.which === 13) {
                crtlAddItem();
            }
        });
    }
    
    var crtlAddItem = function() {
        //1. Get the field input data
        var input = UICtrl.getInput();
        //2. Add the item to the buget controller
        //3. Add the item to the UI
        //4. Calculate the budget
        //5. Display the budget on the UI
    }

    return {
        init: function() {
            console.log("Application has started");
            setupEventListeners();
        }
    }
})(budgetController, UIController);

controller.init();