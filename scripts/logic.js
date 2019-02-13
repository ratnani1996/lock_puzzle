


$(document).ready( ()=>{
    $(".btn-success").on('click', (e)=>{
        console.log("success button is clicked");
        var timeInMilliseconds = $("#time").val();
        var numberOfLocks = $("#locks").val();
        timeInMilliseconds = parseInt(timeInMilliseconds);
        numberOfLocks = parseInt(numberOfLocks);
        DrawLocks(numberOfLocks);
        SolvePuzzle(timeInMilliseconds, numberOfLocks);
    })

    $(".btn-danger").on('click', (e)=>{

    })

} )


var DrawLocks = (numberOfLocks) =>{
    var htmlLockText  = ``;
    for(var i = 1; i<=numberOfLocks; i++){
        htmlLockText += `<i class="fas fa-lock fa-4x" id="lock_${i}"></i>`
        $("#lock_area").html(htmlLockText);
    }
}


var SolvePuzzle = (timeInMilliseconds, numberOfLocks)=>{
    // var counter = 1;
    // while(counter <= numberOfLocks){
    //     for(var incremental = counter; incremental<=numberOfLocks; incremental += counter){
    //         console.log(incremental);
    //     }
    //     counter++;
    // }

    //get all the elements with class fas
    var fasElements = document.getElementsByClassName("svg-inline--fa");
    var counter = 1;
    while( counter <= numberOfLocks ){
        for(var incremental = counter; incremental <= numberOfLocks; incremental += counter){
            //toggle classes over here
            if( $(`#lock_${incremental}`).hasClass("fa-lock") ){
                $(`#lock_${incremental}`).toggleClass(`fa-unlock`);
            }
            else if( $(`#lock_${incremental}`).hasClass("fa-unlock") ){
                $(`#lock_${incremental}`).toggleClass("fa-lock");
            }
            console.log(incremental);
        }
        counter++;
    }
}
