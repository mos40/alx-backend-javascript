export default function taskBlock(trueOrFalse) {
  let task = false;  // Use let instead of var
  let task2 = true;  // Use let instead of var

  if (trueOrFalse) {
	const task = true;  // Assign to the outer scoped variable task
	const task2 = false;  // Assign to the outer scoped variable task2
  }

  return [task, task2];
}
