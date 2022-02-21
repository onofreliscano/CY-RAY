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
    //console.log(jsonString)
    // console.log("TITLE: ", issue.suites.suites[1].tests[0].title)
    // console.log("DURATION: ", issue.suites.suites[1].duration)
    // console.log("STATUS: ", issue.suites.suites[1].tests[0].state)
    console.log(date)
    console.log("----------------------------------")
    console.log("KLENGHT: " + issue.suites.suites[0].tests.length)
    for (let suitCounter=0; suitCounter<issue.stats.suites; suitCounter++) {
      //console.log("SUITE: ", issue.suites.suites[suitCounter].title)
        for(let testCounter=0; testCounter < issue.suites.suites[suitCounter].tests.length; testCounter++){
          //console.log("TITLE: ", issue.suites.suites[1].tests[0].title)
          //console.log("STATUS: ", issue.suites.suites[1].tests[0].state)

          let testResult = {
            "testKey": issue.suites.suites[1].tests[0].title,
            "start": "2022-02-19T17:47:35+01:00",
            "duration": issue.suites.suites[1].tests[0].duration,
            "speed": issue.suites.suites[1].tests[0].speed,
            "status": issue.suites.suites[1].tests[0].state
          }
         
          console.log("TITLE: ", testResult.testKey)
          console.log("STATUS: ", testResult.status)
          console.log("DURATION: ", testResult.duration)
          console.log("SPEED: ", testResult.speed)
          console.log("----------------------------------")
        } 
        var durationSeconds = issue.suites.suites[suitCounter].tests[testCounter].duration+date;
        console.log(durationSeconds)
         xraySquema.tests.push({
           testKey: issue.suites.suites[suitCounter].tests[testCounter].title, 
           start: date,
           finish: date,
           comment: "Done by QA Team",
           status:issue.suites.suites[suitCounter].tests[testCounter].state,
          

         });
        //var json = JSON.stringify(xraySquema);
      //   fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
      //     if (err){
      //         console.log(err);
      //     } else {
      //       xraySquema = JSON.parse(data); //now it an object
      //       xraySquema.tests.push({"id": 9, "square":9}); //add some data
      //       let json = JSON.stringify(xraySquema); //convert it back to json
      //       fs.writeFile('myjsonfile.json', json, 'utf8', readFileCallback); // write it back 
      // }});
      fs.writeFile ("results/test-results.json", JSON.stringify(xraySquema), function(err) {
        if (err) throw err;
        console.log('complete');
        })
          
    }


      
  }catch(err){
  console.log('File data ERROR: ', jsonString)}
})

 //console.log("STATE: ", issue.suites.suites[1].test[0].fail)