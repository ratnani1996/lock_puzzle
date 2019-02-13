
$("document").ready(()=>{
    $(".btn-success").on('click', (e)=>{
        var inputTime = $("#time").val();
        var inputLocks = $("#locks").val();
        DrawLocks(inputLocks);
        SolvePuzzle(inputTime, inputLocks);
    })
    
    
    $(".btn-danger").on('click', (e)=>{
        $("#lock_area").empty();
    })
})


var DrawLocks = (inputLocks) => {
    inputLocks = parseInt(inputLocks);
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
    inputTime = parseInt(inputTime);
    inputLocks = parseInt(inputLocks);
    var counter = 1;
    
    while(counter<inputLocks){
        for(var incremental = counter; incremental <= inputLocks; incremental += counter){
            $(".fas").toggleClass(`fa-lock`, `fa-unlock`);
        }
        counter+=1;
    }
    
//    setInterval(
//    (()=>{
//        while(counter<inputLocks){
//            for(var incremental = counter; incremental <= inputLocks; incremental += counter){
//                $(".fa-lock .fa-unlock").toggleClass('fa-lock', 'fa-unlock');
//                counter++;
//            }
//        })()
//    } , inputTime)
}