# Functional Programming Playground

Basic functionality for Map, Filter and Reduce functions

Using Javascript as a base

## Map

It's applied to an array, it receives a function that returns "something", that
"something" will be appended to a resulting array.

```
my_result_array = my_source_array.map(
	function(item_at_source_array, index, array){
		return item_at_source_array.value
	}
)
```


## Filter

Also applied to an array, in this case it will receive a function that will
stablish a criteria that will filter certain elements from the array, the ones
that return true will be appended to the resulting array.

```
my_result_array = my_source_array.filter(
	function(item_at_source_array, index, array){
		return item_at_source_array.value > 5
	}
)
```

## Reduce

Applied to an array, with the intention of reducing certain property of the 
array to an scalable value, it is useful to create aggregations of numeric 
values. It will receive a function setting the reduction criteria and a initial 
value for the accumulator, in this example is '0'.

This function will receive the previous and current value at the iteration and
the body of the function will perform the reduction.

For this last example, the function is anonymous thorugh js arrow functions.

```
my_result_number = my_source_array.reduce(
	(current, previous, index, array)=>{
		return current.value + previous.value
	}
, 0)
```

## All Together

The true power of these functions come from chaining the together to execute 
various opperations one after the other and obtaining a final result without 
the need of creating intermediate containers.

```
my_result_value = my_source_array
	.filter((my_array_item) => my_array_item.value > 5)
	.map((my_array_item) => my_array_item.value * 100)
	.reduce((prev, curr) => prev + curr, 0)
```