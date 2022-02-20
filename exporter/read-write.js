console.log ("********************************");
console.log ("read-write.js JSON format for Xray  ");
console.log ("********************************");

const fs = require('fs');

fs.readFile('./mochawesome-report/mochawesome.json', 'utf8', (err, jsonString) =>{
  if (err) {
    console.log("File read failed:", err)
    return
  }
  try {
    const issue = JSON.parse(jsonString)
    console.log("TITLE: ", issue.suites.suites[1].tests[0].title)
    console.log("DURATION: ", issue.suites.suites[1].duration)
    console.log("STATUS: ", issue.suites.suites[1].tests[0].state)
    //console.log("STATE: ", issue.suites.suites[1].test[0].fail)
  }catch(err){
  console.log('File data: ', jsonString)}
})