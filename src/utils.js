function findWinner(boxes) {
    //array with winning combinations
    const rows = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    // iterate over array with winning combinations
    for (let i = 0; i< rows.length; i++) {
        const [a,b,c] = rows[i]
        // Check if the game board contains winning combination
        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            // return the winner ('x' or 'o')
            return boxes[a]
        }
    }
    //otherwise return null
    return null
}

function areAllBoxesClicked(boxes) {
    // declare variable to store number of clicked boxes
    let count = 0

    // iterate over all boxes
    boxes.forEach(function(item){
        if (item !== null) {
            count++
        }
    })

    if (count === 9) {
        return true
    } else {
        return false
    }
}

export {
    findWinner,
    areAllBoxesClicked,
}