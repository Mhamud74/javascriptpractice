let a = 2 + 1;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}


switch (new Date().getDay()){
case 1:
day="Saturday";
alert( 'Today Saturday' );
break;
case 2:
day="Sunday";
alert( 'Today Saturday' );
break;
case 3:
day="Monday";
alert( 'Today Monday' );
break;
case 4:
day="Tuesday";
alert( 'Today Tuesday' );
break;
case 5:
day="Wednesday";
alert( 'Today Wednesday' );
break;
case 6:
day="Thursday";
alert( 'Today Thursday' );
break;
case 7:
day="Friday";
alert( 'Today Friday' );
break;

}