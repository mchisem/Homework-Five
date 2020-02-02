 // current date displayed
 $('.day').text(moment().format("dddd, MMM Do, YYYY")); 
 //$('.day').text(moment().format('LLLL'));
 
 // need to make a function so that when you click the copyboard btn, you save your input in the local storage*
 $(".btn").on('click', function(){
    
    var words = $("#9am").val();
    localStorage.setItem('9am', words);

    var words2 = $("#10am").val();
    localStorage.setItem('10am', words2);

    var words3 = $("#11am").val();
    localStorage.setItem('11am', words3);

    var words4 = $("#12pm").val();
    localStorage.setItem('12pm', words4);

    var words5 = $("#1pm").val();
    localStorage.setItem('1pm', words5);

    var words6 = $("#2pm").val();
    localStorage.setItem('2pm', words6);

    var words7 = $("#3pm").val();
    localStorage.setItem('3pm', words7);

    var words8 = $("#4pm").val();
    localStorage.setItem('4pm', words8);

    var words9 = $("#5pm").val();
    localStorage.setItem('5pm', words9);

})

 function init() {
     //console.log(localStorage.getItem("words"))
       $("#9am").val(localStorage.getItem('9am')); 
       $("#10am").val(localStorage.getItem('10am'));
       $("#11am").val(localStorage.getItem('11am'));
       $("#12pm").val(localStorage.getItem('12pm'));
       $("#1pm").val(localStorage.getItem('1pm'));
       $("#2pm").val(localStorage.getItem('2pm'));
       $("#3pm").val(localStorage.getItem('3pm'));
       $("#4pm").val(localStorage.getItem('4pm'));
       $("#5pm").val(localStorage.getItem('5pm'));
    }

    init();

    var events = $(".event")
    //console.log(events);

    for(var i = 0; i < events.length; i++){
        localStorage.setItem(i, i);
    }


// change the color of the text section in relation to the time. 