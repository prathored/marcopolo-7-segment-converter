module.exports = {
    getListOfNumbers: (req, res) => {
        let allData = "";
        for (let i = 1; i <= 1000000; i++) {
            if ((i % 4 === 0) && (i % 7 === 0)) {
                allData = allData + "marcopolo,";
            } else if (i % 4 === 0) {
                allData = allData + "marco,";
            } else if (i % 7 === 0) {
                allData = allData + "polo,";
            } else {
                allData = allData + i + ",";
            }
            if (i % 1000 === 0) {
                allData = allData + "\n";
            }
        }
        res.send(allData);
    }
};