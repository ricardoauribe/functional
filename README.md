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


## 