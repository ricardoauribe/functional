// Durations are in minutes
 
var tasks = [
  {
    'name'     : 'Test functional programming',
    'duration' : 120
  },
  {
    'name'     : 'Work out',
    'duration' : 60
  },
  {
    'name'     : 'Watch TV',
    'duration' : 240
  }
];

/*
let task_names = [];
for (let i = 0, max = tasks.length; i < max; i += 1) {
    task_names.push(tasks[i].name);
}
*/

//Using Map Function
//Map: function(item, index, array)

let task_names = tasks.map(
	function (task, index, array){
		return task.name;
	}
);

console.log(task_names);

//Using Filter function
//Filter (item, index, array)

let difficult_tasks = tasks.filter(
	(task, index, array) => { return task.duration >= 120}
)

console.log(difficult_tasks)

//Reduce
//Reduce (current, prev, index, array)
let numbers = [1,2,3,4,5,6,7,8,9]

let total = numbers.reduce(function (previous, current) {
	return previous + current;
}, 0);

console.log(total)

var total_time = tasks.reduce(function (acc, current) {
	return acc + current.duration;
}, 0);

console.log(total_time)