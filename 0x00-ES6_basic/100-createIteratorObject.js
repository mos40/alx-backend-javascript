export default function createIteratorObject(report) {
  // Define a generator function to yield each employee
  function* iterateEmployees() {
    // Iterate through each department in the report
    for (const department in report.allEmployees) {
      // Iterate through each employee in the current department
      for (const employee of report.allEmployees[department]) {
        yield employee;
      }
    }
  }

  // Return an object with Symbol.iterator property pointing to the generator function
  return {
    [Symbol.iterator]: iterateEmployees
  };
}
