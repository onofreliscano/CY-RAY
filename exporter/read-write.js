console.log ("********************************");
console.log ("read-write.js JSON format for Xray  ");
console.log ("********************************");

const fs = require('fs');
const { moveMessagePortToContext } = require('worker_threads');
const today = new Date();
const month = ('0'+today.getMonth()).slice(-2);
const day = ('0'+today.getDate()).slice(-2);
const hours = ('0'+today.getHours()).slice(-2);
const mins = ('0'+today.getMinutes()).slice(-2);
const secs = ('0'+today.getSeconds()).slice(-2);
//const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'T'+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
const date = today.getFullYear()+'-'+month+'-'+day+'T'+hours+':'+mins+':'+secs+"+01:00";


var xraySquema ={
  tests: []
}


fs.readFile('./mochawesome-report/mochawesome.json', 'utf8', (err, jsonString) =>{
  if (err) {
    console.log("File read failed:", err)
    return
  }
  try {
    const issue = JSON.parse(jsonString)
 
    console.log(date)
    console.log("----------------------------------")

    console.log("CONTENT: " + issue.suites.suites[0].tests[0].title)
    console.log("CONTENT: " + issue.suites.suites[1].tests[0].title)
    for (let suitCounter=0; suitCounter< issue.suites.suites.length; suitCounter++) {

        for (let testCounter=0; testCounter < issue.suites.suites[suitCounter].tests.length; testCounter++){
    
          xraySquema.tests.push({
            testKey: issue.suites.suites[suitCounter].tests[testCounter].title, 
            start: date,
            finish: date,
            comment: "X Done by QA Team",
            status:issue.suites.suites[suitCounter].tests[testCounter].state,
           
 
          });
 
         fs.writeFile ("results/test-results.json", JSON.stringify(xraySquema), function(err) {
         if (err) throw err;
          console.log('complete');
         })
        } 

        
          
    }


      
  }catch(err){
  console.log('File data ERROR: ', jsonString)}
})

 //console.log("STATE: ", issue.suites.suites[1].test[0].fail)