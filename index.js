const dnaSeq = 

const markers = [

]

function findPattern(dnaSeq, markers){
    var matches = [];
    for(let j = 0; j < markers.length; j++){
        for(let i = 0; i < dnaSeq.length-3; i++){
            if(dnaSeq.substring(i, i+3) == markers[j].marker){
                matches.push({name: markers[j].name, marker: markers[j].marker, foundAt: i});
            }
        }
    }
    return matches;

}

console.log(findPattern(dnaSeq, markers));