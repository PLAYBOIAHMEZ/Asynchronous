// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
    console.log(value);
  }
}

// Task 02 & Task 03: Awaiting a Call & Handling Errors
async function awaitCall() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Task 04: Awaiting Concurrent Requests
async function concurrentRequests() {
  try {
    const [response1, response2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/todos/2").then((res) =>
        res.json()
      ),
    ]);
    console.log("Concurrent Results:", response1, response2);
  } catch (error) {
    console.error("Error in concurrent requests:", error.message);
  }
}

// Example calls
iterateWithAsyncAwait(["Task A", "Task B", "Task C"]);
awaitCall();
concurrentRequests();
