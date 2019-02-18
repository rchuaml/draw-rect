// draw MVP

// drawRectangle(1,1);

// function drawRectangle(width,height){
//         if(width>1&&height>1){
//         var spacing = " ".repeat(width-2);
//         var topcover = "*".repeat(width-2);
//         console.log("o" + topcover + "o");
//         for(var k = 0; k < height-2; k++){
//             console.log("|" + spacing + "|");
//         }
//         console.log("o" + topcover + "o");
//     }else if(width === 1&&height!=1){
//         console.log("o")
//         for(var l = 0 ; l < height - 2; l++){
//             console.log("|")
//         }
//         console.log("o");
//     }else if (height ===1&&width!=1){
//         var topline = "-".repeat(width-2);
//         console.log("o" + topline + "o");
//     }else if (height ===1&&width===1){
//         console.log("o");
//     }
// };


// draw further part 1

drawRectangleStar(5,7);

function drawRectangleStar(width,height){
        if(width>1&&height>1){
        var spacing = " ".repeat(width-2);
        var topcover = "*".repeat(width-2);
        console.log("/" + topcover + "\\");
        for(var k = 0; k < height-2; k++){
            console.log("*" + spacing + "*");
        }
        console.log("\\" + topcover + "/");
    }else if(width === 1&&height!=1){
        console.log("*")
        for(var l = 0 ; l < height - 2; l++){
            console.log("*")
        }
        console.log("*");
    }else if (height ===1&&width!=1){
        var topline = "*".repeat(width-2);
        console.log("*" + topline + "*");
    }else if (height ===1&&width===1){
        console.log("*");
    }
};