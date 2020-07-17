//Budget Controller
var budgetController = (function() {
    
})();

//UI Controller
var UIController = (function() {


});

//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    
    var crtlAddItem = function() {
        //1. Get the field input data
        //2. Add the item to the buget controller
        //3. Add the item to the UI
        //4. Calculate the budget
        //5. Display the budget on the UI
        console.log("b");
    }

    document.querySelector(".add__btn").addEventListener("click", crtlAddItem);
    
    document.addEventListener("keypress", function(event) {
        
        if (event.keyCode === 13 || event.which === 13) {
            crtlAddItem();
        }
    });
})(budgetController, UIController);