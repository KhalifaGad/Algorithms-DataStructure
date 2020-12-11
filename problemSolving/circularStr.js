function isItCircular(str1, str2) {
  if (str1 === str2) {
    return 0;
  }
  let shiftedStr = str1;

  for (let i = 0; i < str1.length; i++) {
    let [c, ...rest] = shiftedStr.split("");

    // let c = shiftedStr[0]
    // let rest = shiftedStr.slice(1)
    // shiftedStr = rest + c
    shiftedStr = rest.join("") + c;

    if (shiftedStr === str2) {
      return 1;
    }
  }
  console.log(t);
  return 0;
}

console.log(isItCircular("AABC", "ABCA"));

/* 
  AABC -> CAAB -> BCAA -> ABCA

*/


/*
  ABC -> CAB -> BCA
*/
