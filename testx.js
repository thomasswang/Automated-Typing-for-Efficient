/** @format */

// Define a synchronous function
function doTask(taskNumber) {
	console.log(`Starting task ${taskNumber}`);
	for (let i = 0; i < 1000000000; i++) {
		// Simulate a time-consuming task
	}
	console.log(`Completed task ${taskNumber}`);
}

// Call the synchronous function
doTask(1);
doTask(2);
doTask(3);

console.log("All tasks are done");
