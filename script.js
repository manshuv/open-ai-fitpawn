  const targetWeight = document.getElementById("target-weight").value;
  function calculatePlates(targetWeight, barbellWeight, plateWeights) {
    // First, we need to get the target weight entered by the user.
    

      // First, we need to calculate the weight of the plates that we need to add to the barbell
      // to reach the target weight. We do this by subtracting the weight of the barbell from the
      // target weight and dividing by two, since we have to add equal sized plates on either side
      // of the barbell.
      const weightToAdd = (targetWeight - barbellWeight) / 2;
    
      // Then, we need to calculate the number and sizes of bumper plates we need to add to the barbell
      // to reach the target weight. We start by initializing two empty arrays, one to keep track of
      // the number of plates of each size we need, and one to keep track of the weights of the plates
      // we have added to the barbell.
      const plateCounts = [];
      const platesAdded = [];
    
      // We also initialize a variable to keep track of the remaining weight that we need to add to the
      // barbell, and set it to the weight we calculated earlier.
      let remainingWeight = weightToAdd;
    
      // Next, we sort the array of available plate weights in descending order. This will make it easier
      // for us to add the heaviest plates first and then move on to lighter plates.
      plateWeights.sort((a, b) => b - a);
    
      // Then, we loop through the sorted array of plate weights, starting from the heaviest plate.
      for (const weight of plateWeights) {
        // For each plate weight, we calculate the number of plates of that size we need to add to the
        // barbell to reach the target weight. We do this by dividing the remaining weight by the weight
        // of the plate, rounding down to the nearest whole number.
        const plateCount = Math.floor(remainingWeight / weight);
    
        // If the number of plates is greater than zero, we add that many plates to the barbell and
        // update the remaining weight and the arrays we initialized earlier.
        if (plateCount > 0) {
          plateCounts.push(plateCount);
          platesAdded.push(...Array(plateCount).fill(weight));
          remainingWeight -= plateCount * weight;
        }
      }
    
      // Finally, we print the number and sizes of bumper plates we need to add to the barbell to reach
      // the target weight, and return an object containing the same information.
      console.log("Plate counts:", plateCounts);
      console.log("Plates added:", platesAdded);
      document.getElementById("plates").innerHTML = platesAdded;
      return {
        plateCounts,
        platesAdded
      
      }
      
    }


    // Here is an example of how you can use the function to calculate the number and sizes of bumper
    // plates needed to reach a target weight of 150 lbs, given a barbell weight of 45 lbs
    // and a set of bumper plates with the following weights:
    // - two plates of 25 kilograms each
    // - two plates of 20 kilograms each
    // - two plates of 15 kilograms each
    // - two plates of 10 kilograms each
    const result = calculatePlates(targetWeight, 45, [25, 25, 20, 20, 15, 15, 10, 10, 5, 5, 2.5, 2.5]);
 
    

