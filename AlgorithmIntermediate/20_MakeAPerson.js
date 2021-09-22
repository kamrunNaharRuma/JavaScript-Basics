var Person = function(firstAndLast) {
    var fullName = firstAndLast;
    var firstName = firstAndLast.split(" ")[0];
    var lastName = firstAndLast.split(" ")[1];

    this.setFullName = function(full){
        fullName  = full;
        firstName = full.split(" ")[0];
        lastName  = full.split(" ")[1];
    };
    this.getFullName = function(){
        console.log(fullName)
        return fullName
    };

    this.setFirstName = function(first){
        firstName = first;
        fullName = first + " " +lastName;
    };
    this.getFirstName = function(){
        return firstName
    };

    this.setLastName = function(last){
        lastName = last;
        fullName = firstName + " " +last;
    };
    this.getLastName = function(){
        return lastName
    };
};

var bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry")
console.log(bob.getFirstName());
