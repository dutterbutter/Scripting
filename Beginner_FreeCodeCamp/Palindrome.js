// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.


function palindrome(str) {
    let string = str.toLowerCase()
    if(string === string.split("")
                        .reverse()
                        .join("")) 
                    {
                      return true
                    }else {
                      return false
                  }
                }

palindrome("racecar")