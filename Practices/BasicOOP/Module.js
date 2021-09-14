//Module
let funModule = (function(){
    return {

        isCuteMixin :function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin : function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }

    }
})();


console.log(funModule)

let testObject ={};
funModule.isCuteMixin(testObject);
funModule.singMixin(testObject);

console.log(testObject);

