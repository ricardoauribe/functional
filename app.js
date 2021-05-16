//reference: https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209

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

//Chain various actions

var monday = [
	{
			'name'     : 'Write a tutorial',
			'duration' : 180
	},
	{
			'name'     : 'Some web development',
			'duration' : 120
	}
];

var tuesday = [
	{
			'name'     : 'Keep writing that tutorial',
			'duration' : 240
	},
	{
			'name'     : 'Some more web development',
			'duration' : 180
	},
	{
			'name'     : 'A whole lot of nothing',
			'duration'  : 240
	}
];

var tasks = [monday, tuesday];

// Concatenate our 2D array into a single list
var result = tasks.reduce((acc, current) => acc.concat(current))
	// Extract the task duration, and convert minutes to hours
	.map((task) => task.duration / 60)
	// Filter out any task that took less than two hours
	.filter((duration) => duration >= 2)
	// Multiply each tasks' duration by our hourly rate
	.map((duration) => duration * 25)
	// Combine the sums into a single dollar amount
	.reduce((acc, current) => [(+acc) + (+current)])
	// Convert to a "pretty-printed" dollar amount
	.map((amount) => '$' + amount.toFixed(2))
	// Pull out the only element of the array we got from map
	.reduce((formatted_amount) =>formatted_amount); 

	console.log(result)