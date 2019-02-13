

$("document").ready(()=>{
    $(".btn-success").on('click', (e)=>{
        var inputTime = $("#time").val();
        var inputLocks = $("#locks").val();
        DrawLocks(inputLocks);
        SolvePuzzle(inputTime, inputLocks);
    })
})


var DrawLocks = (inputLocks) => {
    if( !isNaN(inputLocks) ){
        while( inputLocks-- ){
            $("#lock_area").append(`<i class="fas fa-lock fa-4x"></i>`)
        }
    }
    else{
        alert("Invalid input")
    }
}

var SolvePuzzle = (inputTime, inputLocks) =>{
    var counter = 1;
    setInterval( ()=>{
        while(counter<inputLocks){
            for(var incremental = counter; incremental <= inputLocks; incremental += counter){
                $(".fa-lock .fa-unlock").toggleClass('fa-lock', 'fa-unlock');
                counter++;
            }
        }
    } , inputTime)
}