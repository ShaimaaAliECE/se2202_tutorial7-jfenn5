
/**
 * Given an array of 2D point(x,y) objects, 
 * find the maximum distance between the origin point (0,0) and any point that doesn’t lie on any axes.
 * ---	The euclidean distance between (0,0) and (x,y)= Math.sqrt(x*x + y*y)
 */

let points = [ {x:35, y:16}, {x:30, y:71} , {x:28, y:0}, {x:19, y:10} , {x:5, y:4} , {x:0, y:15} ];

// Call the filter function with a test that eliminates any points that have x=0 or y=0

// Transform each point to its distance from the origin based on the euclidean distance

// Find the maximum among these distances using the reduce function and store it in maxDist
let maxDist;

// Don't change this line
console.log(maxDist);
