// task 1

let value = prompt("Who's there?");
if(value == 'Admin'){
    let pass = prompt("Password?");
if(pass == 'TheMaster'){
    alert( 'Welcome!' );
}else if(pass == "" || pass == null){
    alert( 'cancel' );
}else {
    alert( 'Wrong password' );
}
if(value == "" || value == null){
    alert( 'cancel' );
}else {
    alert( 'Wrong password' );
}
}