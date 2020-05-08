module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
      let controlers = new Set(['--discard-next', '--double-next', '--double-prev', '--double-prev'])
      for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
          case '--double-next':
            if (i < arr.length - 1 && !controlers.has(arr[i+1])) {
              arr.splice(i, 1, arr[i+1]);
              i++;
            } else arr.splice(i, 1);
          break;
          case '--double-prev':
            if (i > 0 && !controlers.has(arr[i-1])) {
              arr.splice(i, 1, arr[i-1]);
              i++;
            } else arr.splice(i, 1);
          break;
        }
      }
      for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
          case '--discard-next':
            if (i < arr.length - 1 && !controlers.has(arr[i+1])) {
              arr.splice(i, 2);
              i--;
            } else arr.splice(i, 1);
          break;
          case '--discard-prev':
            if (i > 0 && !controlers.has(arr[i-1])) {
              arr.splice(i-1, 2);
              i--;
            } else arr.splice(i, 1);
          break;
        }
      }
      return arr;
    } else trow(new Error);
  }
