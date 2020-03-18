var solve = false;
var lastArray = null;

var data = [{
    oldPosition: null,
    logChanges: [],
    array: [[7, 0, 3], [4, 2, 5], [8, 1, 6]]
}];

function verifyMove(position, data) {
    if (verifyTop(position.row) && verifyOldPositionTop(position, data)) {
        moveToTop(position, data);
    }
    if (verifyBot(position.row) && verifyOldPositionBot(position, data)) {
        moveToBot(position, data);
    }
    if (verifyRight(position.column) && verifyOldPositionRight(position, data)) {
        moveToRight(position, data);
    }
    if (verifyLeft(position.column) && verifyOldPositionLeft(position, data)) {
        moveToLeft(position, data);
    }
}

function verifyTop(indexEmpty) {
    if (indexEmpty > 0)
        return true;
    return false;
}

function verifyLeft(indexEmpty) {
    if (indexEmpty > 0)
        return true;
    return false;
}

function verifyBot(indexEmpty) {
    if (indexEmpty < 2)
        return true;
    return false;
}

function verifyRight(indexEmpty) {
    if (indexEmpty < 2)
        return true;
    return false;
}

function verifyOldPositionTop(actualPosition, data) {
    let newPosition = { row: actualPosition.row - 1, column: actualPosition.column };
    return verifyOldPosition(newPosition, data);
}

function verifyOldPositionBot(actualPosition, data) {
    let newPosition = { row: actualPosition.row + 1, column: actualPosition.column };
    return verifyOldPosition(newPosition, data);
}

function verifyOldPositionRight(actualPosition, data) {
    let newPosition = { row: actualPosition.row, column: actualPosition.column + 1 };
    return verifyOldPosition(newPosition, data);
}

function verifyOldPositionLeft(actualPosition, data) {
    let newPosition = { row: actualPosition.row, column: actualPosition.column - 1 };
    return verifyOldPosition(newPosition, data);
}

function verifyOldPosition(actualPosition, data) {
    if (data.oldPosition && actualPosition.row === data.oldPosition.row && actualPosition.column === data.oldPosition.column) {
        return false;
    }
    return true;
}

function moveToTop(position, actualData) {
    let newArray = JSON.parse(JSON.stringify(actualData.array));
    newArray[position.row][position.column] = newArray[position.row - 1][position.column];
    newArray[position.row - 1][position.column] = 0;

    addNewData(actualData, newArray, position);
}

function moveToBot(position, actualData) {
    let newArray = JSON.parse(JSON.stringify(actualData.array));
    newArray[position.row][position.column] = newArray[position.row + 1][position.column];
    newArray[position.row + 1][position.column] = 0;

    addNewData(actualData, newArray, position);
}

function moveToRight(position, actualData) {
    let newArray = JSON.parse(JSON.stringify(actualData.array));
    newArray[position.row][position.column] = newArray[position.row][position.column + 1];
    newArray[position.row][position.column + 1] = 0;

    addNewData(actualData, newArray, position);
}

function moveToLeft(position, actualData) {
    let newArray = JSON.parse(JSON.stringify(actualData.array));
    newArray[position.row][position.column] = newArray[position.row][position.column - 1];
    newArray[position.row][position.column - 1] = 0;

    addNewData(actualData, newArray, position);
}

function addNewData(actualData, newArray, oldPosition) {
    data.push({
        oldPosition: oldPosition,
        logChanges: [...actualData.logChanges, actualData.array],
        array: newArray
    });
}

function startVerification() {

    if (verifyCanSolve(data[0].array)) {
        for (let i = 0; i < data.length; i++) {
            if (verifySolved(data[i])) {
                lastArray = data[i];
                break;
            }
            console.log("Iterações: ", i)
            let position = getWithoutValue(data[i].array);
            verifyMove(position, data[i]);
        }
        console.log("Acabou", lastArray)

        lastArray.logChanges.forEach(element => {
            console.log("Array: ", [...element[0], ...element[1], ...element[2]])
        });
        console.log("Last Array: ", [...lastArray.array[0], ...lastArray.array[1], ...lastArray.array[2]])


    } else {
        console.log("Não é possivel resolver esse puzzle!");
    }
}

function verifySolved(actualData) {
    if (actualData.array[0][0] == 1
        && actualData.array[0][1] == 2
        && actualData.array[0][2] == 3
        && actualData.array[1][0] == 4
        && actualData.array[1][1] == 5
        && actualData.array[1][2] == 6
        && actualData.array[2][0] == 7
        && actualData.array[2][1] == 8
        && actualData.array[2][2] == 0) {
        return true;
    }
    return false;
}

function getWithoutValue(array) {
    let position;
    for (let row = 0; row <= 2; row++) {
        for (let column = 0; column <= 2; column++) {
            if (array[row][column] == 0) {
                position = { row, column };
            }
        }
    }

    return position;
}

function verifyCanSolve(array) {
    let newArray = [...array[0], ...array[1], ...array[2]]
    let count = 0;

    for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = i + 1; j < newArray.length; j++) {
            if (newArray[j] && newArray[i] && newArray[i] > newArray[j])
                count++
        }
    }

    if (count % 2 !== 0) {
        return false;
    }

    return true
}

startVerification()