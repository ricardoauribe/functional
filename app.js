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