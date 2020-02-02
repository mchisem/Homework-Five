 // current date displayed
 $('.day').text(moment().format("dddd, MMM Do, YYYY : h:mma")); 

 // need to make a function so that when you click the copyboard btn, you save your input in the local storage*
 

 $(".btn").on('click', function(){
    
    var words = $("#10am").val();
    localStorage.setItem('10am', words);

})

 function init() {
     //console.log(localStorage.getItem("words"))
       $("#10am").val(localStorage.getItem("10am")); 
    }

    init();

    var events = $(".event")
    console.log(events);

    for(var i = 0; i < events.length; i++){
        localStorage.setItem(i, i);
    }
