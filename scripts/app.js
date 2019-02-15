


$(document).ready( ()=>{
    $(".btn-success").on('click', (e)=>{
        //get time and number of locks
        var timeInMilliseconds = $("#time").val();
        var numberOfLocks = $("#locks").val();
        
        timeInMilliseconds = parseInt(timeInMilliseconds);
        numberOfLocks = parseInt(numberOfLocks);
        
        
        //if a user enters invalid input then popup alert
        if( isNaN(timeInMilliseconds) || isNaN(numberOfLocks) ){
            alert("Invalid Input");
            $(".btn-success").prop('disabled', false);
        }
        //else calculate the solution and make start button disabled
        else{
            $(".btn-success").prop('disabled', true)
            $("#noOfFlips").text(`Flips 0`)
            $("#noOfLocks").text(`Locks 0`)
        
        //draw locks and solve the problem
            DrawLocks(numberOfLocks);
            SolvePuzzle(timeInMilliseconds, numberOfLocks);
        }
        //once the user has clicked the start button disable it make flips = 0 and locks = 0 in their respective buttons
        
    })
    // if reset button is clicked
    $(".btn-danger").on('click', (e)=>{
        //empty everything in lock area id element
        //and make flips and locks = 0
        $("#lock_area").empty();
        $(".btn-success").prop('disabled', false);
        $("#noOfFlips").text(`Flips 0`)
        $("#noOfLocks").text(`Locks 0`)
        
        //make form fields blank
        $("#time").val("");
        $("#locks").val("");
    })

} )



var DrawLocks = (numberOfLocks) =>{
//    $("#status").append(`<button type="button" class="btn btn-info" id="noOfFlips">Flips 0</button>
//              <button type="button" class="btn btn-info" id="noOfLocks">Locks 0</button>`)
    
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
                if( $(`#lock_${incremental}`).
                   hasClass("locked") ){
                    $(`#lock_${incremental}`).removeClass(`locked`);
                    $(`#lock_${incremental}`).addClass(`unlocked`);
                    $(`#lock_${incremental}`).attr(`src`, `source/unlock.png`)
                    numberOfFlips++;
                    $("#noOfFlips").text(`Flips ${numberOfFlips}`);
                }
                else if( $(`#lock_${incremental}`).hasClass("unlocked") ){
                    $(`#lock_${incremental}`).removeClass(`unlocked`);
                    $(`#lock_${incremental}`).addClass(`locked`);
                    $(`#lock_${incremental}`).attr(`src`, `source/lock.png`);
                    numberOfFlips++;
                    $("#noOfFlips").text(`Flips ${numberOfFlips}`);
                }
                numberOfLocked = $(".locked")
                $("#noOfLocks").text(`Locks ${numberOfLocked.length}`);
            }, i * timeInMilliseconds)
            console.log(i*timeInMilliseconds)
        }
        counter++;
    }
    
    setTimeout(()=>{
        console.log(`Number of Flips are ${numberOfFlips} and Number of Locks are ${numberOfLocked}`);
    }, 10000)
}



