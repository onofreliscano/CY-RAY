console.log('********************************')
console.log('read-write.js JSON format for Xray OUTPUT v.010 VIDEATE')
console.log('********************************')

const fs = require('fs')

// Read stats-test.json file for main test conf

console.log('********************************')
console.log('1. READ CONF FILE')
console.log('********************************')

// fs.readFile(
//   'videate-test.json',
//   'utf8',
//   (err, jsonString) => {
//     if (err) {
//       console.log('File read failed:', err)
//       return
//     }
//     try {
//       const file = JSON.parse(jsonString)

//       console.log('----------------------------------')

//       for (
//         let testsCounter = 0;
//         testsCounter <  file.jenkinsConfiguration.tests.length;
//         testsCounter++
//       ) {

//         var projectKeyConf = file.jenkinsConfiguration.tests[testsCounter].projectKey
//         var testPlanKeyConf = file.jenkinsConfiguration.tests[testsCounter].testPlanKey
//         var testExecutionKeyConf = file.jenkinsConfiguration.tests[testsCounter].testExecutionKey


//         var arguments= process.argv

//           console.log ("From conf file projectKey: " + projectKeyConf)
//           console.log ("From conf file testPlanKey: " + testPlanKeyConf)
//           console.log ("From conf file testExecutionKey: " + testExecutionKeyConf)



//         }

   
//       }
//      catch (err) {
//       console.log('File data ERROR: ', jsonString)
//       console.log('ERROR: ', err)
//     }

//   }
// )

var arguments= process.argv

var projectKeyConf = (arguments[2])
var testPlanKeyConf = (arguments[3])
var testExecutionKeyConf = (arguments[4])

console.log('projectKeyConf: ' + projectKeyConf)
console.log('testPlanKeyConf: ' + testPlanKeyConf)
console.log('testExecutionKeyConf: ' + testExecutionKeyConf)

console.log('********************************')
console.log('2. CLEAN OUTPUT FILE')
console.log('********************************')

// // write test-results.json file with no data for clearing

fs.writeFile('./mochawesome-report/mochawesome.json',
             '', function()
                  {
                    console.log('Clearing past results in mochawesome-report')
                  });


console.log('********************************')
console.log('3. DEFINE XRAY SQUEMA')
console.log('********************************')

let xraySchema = {
  testExecutionKey:testExecutionKeyConf ,
  info: {
    project: projectKeyConf,
    summary: 'QA Daily Execution',
    description: 'Daily test - 001',
    user: 'onofre.liscano',
    startDate: '',
    finishDate: '',
    testPlanKey: testPlanKeyConf,
  },
  tests: [],
}

// // Read output.json and write test-results.json file with merged report

fs.readFile(
  './report/output.json',
  'utf8',
  (err, jsonString) => {
    if (err) {
      console.log('File read failed:', err)
      return
    }
    try {

      const file = JSON.parse(jsonString)
      console.log('---------------parsed-------------------')
      console.log(file)
      for (resultCounter = 0;resultCounter < file.results.length;resultCounter++)
      {
        //console.log('--------------resultCounter='+ resultCounter +'--------------------')
        for (testCounter = 0;testCounter < file.results[resultCounter].suites[0].tests.length;testCounter++)
        { 
            //console.log('--------------testCounter ='+ testCounter +'--------------------')
            xraySchema.tests.push({
              testKey: file.results[resultCounter].suites[0].tests[testCounter].title,
              start: file.results[0].start,
              finish: file.results[0].finish,
              comment: 'Just test',
              status: file.results[resultCounter].suites[0].tests[testCounter].state
            })

              xraySchema.info.startDate = file.results[0].start;
              xraySchema.info.finishDate = file.results[0].finish;
              //console.log('---------------Done loop-------------------')
        }
      }

      fs.writeFile(
        './xray-results/testresults.json',

        JSON.stringify(xraySchema),
        function (err) {
          if (err) throw err
        },
      )

    } catch (err) {
      console.log('File data ERROR: ', jsonString)
      console.log('ERROR: ', err)
    }

      // const file = JSON.parse(jsonString)

      // for (
      //   let resultCounter = 0;
      //   resultCounter < file.results.length;
      //   resultCounter++
      // ) {
      //   xraySquema.tests.push({
      //     testKey: file.results[resultCounter].suites[0].tests[0].title,
      //     start: file.results[0].start,
      //     finish: file.results[0].finish,
      //     comment: 'Done by the QA Team #1',
      //     status: file.results[resultCounter].suites[0].tests[0].state
      //   })

      //   xraySquema.info.startDate = file.results[0].start;
      //   xraySquema.info.finishDate = file.results[0].finish;
      // }

      // fs.writeFile(
      //   '../results/test-results.json',
      //   JSON.stringify(xraySquema),
      //   function (err) {
      //     if (err) throw err
      //   },
      // )

  },
)



























































































// console.log ("********************************");
// console.log ("read-write.js JSON format for Xray  ");
// console.log ("********************************");

// const fs = require('fs');
// const { moveMessagePortToContext } = require('worker_threads');
// const today = new Date();
// const month = ('0'+today.getMonth()).slice(-2);
// const day = ('0'+today.getDate()).slice(-2);
// const hours = ('0'+today.getHours()).slice(-2);
// const mins = ('0'+today.getMinutes()).slice(-2);
// const secs = ('0'+today.getSeconds()).slice(-2);
// //const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'T'+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
// const date = today.getFullYear()+'-'+month+'-'+day+'T'+hours+':'+mins+':'+secs+"+01:00";


// var xraySquema ={
//   tests: []
// }

// //local
// fs.readFile('../mochawesome-report/mochawesome.json', 'utf8', (err, jsonString) =>{
// //remote
// //fs.readFile('./mochawesome-report/mochawesome.json', 'utf8', (err, jsonString) =>{
//   if (err) {
//     console.log("File read failed:", err)
//     return
//   }
//   try {
//     const issue = JSON.parse(jsonString)
 
//     console.log(date)
//     console.log("----------------------------------")

//     console.log("CONTENT: " + issue.suites.suites[0].tests[0].title)
//     console.log("CONTENT: " + issue.suites.suites[0].tests[1].title)
//     for (let suitCounter=0; suitCounter< issue.suites.suites.length; suitCounter++) {

//         for (let testCounter=0; testCounter < issue.suites.suites[suitCounter].tests.length; testCounter++){
    
//           xraySquema.tests.push({
//             testKey: issue.suites.suites[suitCounter].tests[testCounter].title, 
//             start: date,
//             finish: date,
//             comment: "XX2 Done by QA Team",
//             status:issue.suites.suites[suitCounter].tests[testCounter].state,
           
 
//           });
//          //local
//          fs.writeFile ("../results/test-results.json", JSON.stringify(xraySquema), function(err) {
//          //remote
//          //fs.writeFile ("./results/test-results.json", JSON.stringify(xraySquema), function(err) {
//           if (err) throw err;
//           //console.log('complete');
//          })
//         } 

        
          
//     }


      
//   }catch(err){
//   console.log('MY ERROR DATA: ', jsonString)}
// })

//  //console.log("STATE: ", issue.suites.suites[1].test[0].fail)