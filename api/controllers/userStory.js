const fs = require("fs");
const path = require("path");


const constants = {
    '0': [
        [false, true, false],
        [true, false, true],
        [true, true, true]
    ],
    '1': [
        [false, false, false],
        [false, false, true],
        [false, false, true]
    ],
    '2': [
        [false, true, false],
        [false, true, true],
        [true, true, false]
    ],
    '3': [
        [false, true, false],
        [false, true, true],
        [false, true, true]
    ],
    '4': [
        [false, false, false],
        [true, true, true],
        [false, false, true]
    ],
    '5': [
        [false, true, false],
        [true, true, false],
        [false, true, true]
    ],
    '6': [
        [false, true, false],
        [true, true, false],
        [true, true, true]
    ],
    '7': [
        [false, true, false],
        [false, false, true],
        [false, false, true]
    ],
    '8': [
        [false, true, false],
        [true, true, true],
        [true, true, true]
    ],
    '9': [
        [false, true, false],
        [true, true, true],
        [false, true, true]
    ]
};

module.exports = {
    getSimplifiedNumbers: (req, res) => {
        fs.readFile(path.join(__dirname, "../../input_user_story_1.txt"), "utf8", (err, data) => {
            if (err) {
                console.log(err);
                return res.send("Something happened at our end");
            }
            const lines = data.split("\n");
            let allData = "";
            for (let i = 0; i <= (lines.length - 1); i = i + 4) {
                for (let j = 0; j < lines[i].length; j = j + 3) {
                    let matrix = [
                        [(lines[i].charAt(j) !== " "), (lines[i].charAt(j + 1) !== " "), (lines[i].charAt(j + 2) !== " ")],
                        [(lines[i + 1].charAt(j) !== " "), (lines[i + 1].charAt(j + 1) !== " "), (lines[i + 1].charAt(j + 2) !== " ")],
                        [(lines[i + 2].charAt(j) !== " "), (lines[i + 2].charAt(j + 1) !== " "), (lines[i + 2].charAt(j + 2) !== " ")]
                    ];
                    // console.log(matrix);
                    const singleNumberData = matchMatrix(matrix);
                    if (singleNumberData) {
                        allData = allData + singleNumberData;
                    }
                }
                allData = allData + "\n";
            }
            console.log(allData);
            fs.writeFile(path.join(__dirname, "../../output_user_story_1.txt"), allData, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.send("Something happened at our end");
                }
                res.send("File with parsed number is created");
            });
        });
    }
};


function matchMatrix(matrix) {
    for (const key in constants) {
        if (constants.hasOwnProperty(key)) {
            const element = constants[key];
            let match = true;
            // Logic to check if matrix === element
            for (let i = 0; i < element.length; i++) {
                for (let j = 0; j < element[i].length; j++) {
                    if (element[i][j] != matrix[i][j]) {
                        match = false;
                    }
                }
            }
            if (match) {
                return key;
            }
        }
    }
    return false;
}