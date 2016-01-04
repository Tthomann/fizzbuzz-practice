"use script"
for (var counter = 0; counter <= 100; counter = counter + 1)
{
	if (counter % 15 ==0)
		console.log("fizzbuzz")
	else if (counter % 3 == 0)
		console.log("fizz");
	else if (counter % 5 == 0)
		console.log("buzz");
	else
		console.log(counter);
}