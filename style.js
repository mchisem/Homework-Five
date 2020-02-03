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

    var words5 = $("#13").val();
    localStorage.setItem('13', words5);

    var words6 = $("#14").val();
    localStorage.setItem('14', words6);

    var words7 = $("#15").val();
    localStorage.setItem('15', words7);

    var words8 = $("#16").val();
    localStorage.setItem('16', words8);

    var words9 = $("#17").val();
    localStorage.setItem('17', words9);

})

 function init() {
     //console.log(localStorage.getItem("words"))
       $("#9").val(localStorage.getItem('9')); 
       $("#10").val(localStorage.getItem('10'));
       $("#11").val(localStorage.getItem('11'));
       $("#12").val(localStorage.getItem('12'));
       $("#13").val(localStorage.getItem('13'));
       $("#14").val(localStorage.getItem('14'));
       $("#15").val(localStorage.getItem('15'));
       $("#16").val(localStorage.getItem('16'));
       $("#17").val(localStorage.getItem('17'));
    }

    init();

    var events = $(".event")
    //console.log(events);

    for(var i = 0; i < events.length; i++){
        localStorage.setItem(i, i);
    }


// change the color of the text section in relation to the time. 
function colorChange(){

    String = [9,10,11,12,13,14,15,16,17];

    for(var i = 0; i <= String.length; i++) {

        var hour = moment().hour();
        
        if(hour <= String[i]){
            console.log(hour <= String[i])
            $('#' + String[i]+"").css({"background-image": "linear-gradient(60deg, #f8b400, #ffcc00)"});
    
        } else if(hour >= String[i]){
            console.log(hour);
            $('#' + String[i]+"").css({"background-image": "linear-gradient(60deg, #330033, purple)"});
            // $('.words').css({"background-color":"#330033"});
            //"background-image": "linear-gradient(60deg, #fbc531, gold)"
            //"background-image": "linear-gradient(60deg, #330033, purple)"
            //$('#' + String[i]+"").css({"background-image": "linear-gradient(60deg, #f8b400, #ffcc00)"});
        } 
       
    }//console.log(String.length);
} colorChange ();



