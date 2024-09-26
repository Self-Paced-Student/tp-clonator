
// Clonator (30 mins)

// Write a function that can create a deep copy of anything
// it gets passed. The generated copy should have the same own
// enumerable properties as the source, but modifying
// the copy should not affect the source in any way.

// Now it should really pass

function clonator (source) {
   if (Array.isArray(source)) {
    return source.map(function (el) {
      return clonator(el);
    });
  } else if (typeof source === 'object' && source !== null) {
    var res = {};
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        res[key] = clonator(source[key]);
      }
    }
    return res;
  } else return source;
}

module.exports = clonator;
