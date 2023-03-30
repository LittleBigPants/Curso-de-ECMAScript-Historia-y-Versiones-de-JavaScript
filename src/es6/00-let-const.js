 var nombre = "juan";
 var nombre = "pedro";

 console.log(nombre)


 const fruits = () => {
    
    if(true){
    var fruit1 = "apple"; //function  scope
    let fruit2 = "kiwi"; //block scope
    const fruit3 = "pear"; //block scope
}
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
 }

 fruits ();