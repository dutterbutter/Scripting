// Check if a string (first argument, str) ends with the given target string (second argument, target).


function confirmEnding(str, tar) {
     return str.substr(- tar.length) === tar;
  }
  
  confirmEnding("Bastian", "n");