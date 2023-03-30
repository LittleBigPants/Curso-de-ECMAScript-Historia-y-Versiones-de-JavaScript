function newUser (name, age, country) {
    var name = name || "juan";
    var age = age || "30";
    var country = country || "mx";
    console.log(name, age, country);

}

newUser();
newUser("pedro", 19, "arg");

function newAdmin (name = "juan", age = 30, country= "col"){
    console.log(name, age, country);
}

newAdmin();
newAdmin("pepe", 20, "pe");

