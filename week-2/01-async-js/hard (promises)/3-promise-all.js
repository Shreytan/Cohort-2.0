/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function calculateTime(t1, t2, t3) {
    const startTime = new Date().getTime();
  
    return wait1(t1)
      .then(() => {
        console.log("First promise done");
        return wait2(t2);
      })
      .then(() => {
        console.log("Second promise done");
        return wait3(t3);
      })
      .then(() => {
        const endTime = new Date().getTime();
        console.log("Third promise done");
        console.log(`took ${endTime - startTime} milliseconds`);
        return endTime - startTime;
      });
  }
 //giving incorrect result idk why