 // current date displayed
 $('.day').text(moment().format("dddd, MMM Do, YYYY")); 
 //$('.day').text(moment().format('LLLL'));
 
 // need to make a function so that when you click the copyboard btn, you save your input in the local storage*
 $(".btn").on('click', function(){
    
    var words = $("#9").val();
    localStorage.setItem('9', words);

    var words2 = $("#10").val();
    localStorage.setItem('10', words2);

    var words3 = $("#11").val();
    localStorage.setItem('11', words3);

    var words4 = $("#12").val();
    localStorage.setItem('12', words4);

    var words5 = $("#1").val();
    localStorage.setItem('1', words5);

    var words6 = $("#2").val();
    localStorage.setItem('2', words6);

    var words7 = $("#3").val();
    localStorage.setItem('3', words7);

    var words8 = $("#4").val();
    localStorage.setItem('4', words8);

    var words9 = $("#5").val();
    localStorage.setItem('5', words9);

})

 function init() {
     //console.log(localStorage.getItem("words"))
       $("#9").val(localStorage.getItem('9')); 
       $("#10").val(localStorage.getItem('10'));
       $("#11").val(localStorage.getItem('11'));
       $("#12").val(localStorage.getItem('12'));
       $("#1").val(localStorage.getItem('1'));
       $("#2").val(localStorage.getItem('2'));
       $("#3").val(localStorage.getItem('3'));
       $("#4").val(localStorage.getItem('4'));
       $("#5").val(localStorage.getItem('5'));
    }

    init();

    var events = $(".event")
    //console.log(events);

    for(var i = 0; i < events.length; i++){
        localStorage.setItem(i, i);
    }


// change the color of the text section in relation to the time. 
//var currentEvent = $('#text');
//var currentTime = 0
//var time = $('#nineAM');

//for(var i = 0; i < 24; i++) {
  //  if(currentTime == i){
 //   currentEvent.addClass('.present');
//}
//}

//function colorChange() {
    //currentEvent.classList.add('present')};

String = [1,2,3,4,5,8,9,10,11,12];

function colorChange() {

}
