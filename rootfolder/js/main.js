function orderNumbers() {

  //Converts all of the textboxes into a var, with an int value
  var num1 = parseFloat(document.querySelector("#num1").value);
  var num2 = parseFloat(document.querySelector("#num2").value);
  var num3 = parseFloat(document.querySelector("#num3").value);

  //Puts in the inputs into an array to be sorted.
  var array = [num1, num2, num3];

  //Runs sorting algorithm: Insertion Sort
  //Traverses the array, assumes the front value is the shortest.
  for (var i = 1; i < array.length; i++) {
    var temp = array[i];
    var j = i;

    //If a smaller int is found, it is "passed behind" until it
    //reaches an even smaller int.
    while (j >= 1 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }

    array[j] = temp;
    }

    document.querySelector("#result").innerHTML = array.toString();
}
