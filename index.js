// imports
const fs = require("fs")

function readFiles(path){
    const dnaSeq = []
    const markers = []
    
    // change into markers directory and read files
    process.chdir(path + "\\markers")
    fs.readdirSync(path + "\\markers").forEach(file => {
        markers.push(
        {
            name: file.split('.')[0],
            sequence: fs.readFileSync(file, {encoding: "utf8"})
        }
        )
    })
    // change into patients directory and read files
    process.chdir(path + "\\patients")
    fs.readdirSync(path + "\\patients").forEach(file => {
        dnaSeq.push(
        {
            name: file.split('.')[0],
            sequence: fs.readFileSync(file, {encoding: "utf8"})
        }
        )
    })
    return {dnaSeq, markers}
}

function findPattern(dnaSeq, markers, patient){
    var matches = [];
    for(let j = 0; j < markers.length; j++){
        for(let i = 0; i < dnaSeq.length-3; i++){
            if(dnaSeq.substring(i, i+3) == markers[j].sequence){
                matches.push({patient : patient, name: markers[j].name, marker: markers[j].sequence, foundAt: i});
            }
        }
    }
    return matches;

}
// set up variables & read files
dnaSeq = []
markers = []
result = readFiles(process.cwd())
dnaSeq = result.dnaSeq
markers = result.markers


// calculate occurances
for(let i = 0; i < dnaSeq.length; i++){
    console.log(findPattern(dnaSeq[i].sequence, markers, dnaSeq[i].name))
}
