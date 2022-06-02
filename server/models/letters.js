export default (function letters() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = [-1];

  return {
    gen: function* () {
      if (result[result.length - 1] === 25) { // Last letter in result is 'z'

        if (result.filter(x => x === 25).length === result.length) {
          // All letters are 'z', meaning we change them all to 'a' and add an 'a' (eg: 'zzz' -> 'aaaa')

          result = result.map(element => element = 0);
          result[result.length] = 0;
          yield (result.map(element => alphabet[element])).join("");

        } else {// Only some letters are 'z' so we go through each one, make it be an a and increment the first letter which is not 'z'

          for (let i = result.length - 1; i >= 0; i--) {
            if (result[i] === 25) { // If letter is 'z', we change it to 'a'
              result[i] = 0;
            } else { // If letter is not 'z', we increment it
              result[i]++;
              yield (result.map(element => alphabet[element])).join("");
            };
          };

        };

      } else { // Else, we just increment the last letter
        result[result.length - 1]++;
        yield (result.map(element => alphabet[element])).join("");
      };
    },
    reset: () => result = [-1]
  };
})();