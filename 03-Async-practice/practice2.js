function formatName(firstName, lastName, callback) {
    setTimeout(()=>{
        callback(firstName, lastName)
    }, 5000);
}
    function format1(firstName, lastName){
        console.log(`${firstName} ${lastName}`);
    }
    function format2(firstName, lastName){
        console.log(`${lastName.toUpperCase()}, ${firstName}`);
    }
    function format3(firstName, lastName){
        console.log(`${lastName.toUpperCase().charAt(0)}. ${firstName}`);
    }
formatName("aliane", "isimbi", format1);
formatName("aliane", "isimbi", format2);
formatName("aliane", "isimbi", format3);