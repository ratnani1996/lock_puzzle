


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
        $("#lock_area").empty();
    })

} )


var DrawLocks = (numberOfLocks) =>{
    for(var i = 1; i<=numberOfLocks; i++){
        $("#lock_area").append(`<img src="source/lock.png" id="lock_${i}" class="lock locked">`)
    }
}


var SolvePuzzle = (timeInMilliseconds, numberOfLocks)=>{
    var numberOfFlips = 0;
    var numberOfLocked = numberOfLocks;
    let counter = 1;
    let i = 1;
    while( counter <= numberOfLocks ){
        for(let incremental = counter; incremental <= numberOfLocks; incremental += counter, i++){
            setTimeout(()=>{
                if( $(`#lock_${incremental}`).hasClass("locked") ){
                    $(`#lock_${incremental}`).removeClass(`locked`);
                    $(`#lock_${incremental}`).addClass(`unlocked`);
                    $(`#lock_${incremental}`).attr(`src`, `source/unlock.png`)
                    numberOfLocked--;
                    numberOfFlips++;
                }
                else if( $(`#lock_${incremental}`).hasClass("unlocked") ){
                    $(`#lock_${incremental}`).removeClass(`unlocked`);
                    $(`#lock_${incremental}`).addClass(`locked`);
                    $(`#lock_${incremental}`).attr(`src`, `source/lock.png`);
                    numberOfFlips++;
                    numberOfLocked++;
                }
            }, i * timeInMilliseconds)
            console.log(i*timeInMilliseconds)
        }
        counter++;
    }
    
    setTimeout(()=>{
        console.log(`Number of Flips are ${numberOfFlips} and Number of Locks are ${numberOfLocked}`);
    }, 10000)
}
