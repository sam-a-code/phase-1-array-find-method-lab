// function superbowlWin(record){
//     result === 'W';
//     return (record.year)
// }

// const superbowlWin = record.find(result => result === 'W')

// ['year: "2015", result: "w"'].find(superbowlWin);
// ['year: "2014", result: "N/A"'].find(superbowlWin);
// ['year: "2013", result: "L"'].find(superbowlWin);


// function superbowlWin(record){
//     record.find(record.result === 'W')
//     return record.year 
// }


// function superbowlWin(record){
// for (let item of record){
//     if(item.result === "W")
//     {return item.year}
// }} 

superbowlWin = (record) => {
    const result = record.find(element => element.result === "W")
    return result ? (result.year) : undefined 
}