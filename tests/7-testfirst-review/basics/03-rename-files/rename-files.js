/* eslint-disable no-unused-vars */
function renameFiles(files) {
  const usedNames = new Set();
  const nameCount = {};
  const result = [];

  for (let file of files) {
    // If file name is not used yet
    if (!usedNames.has(file)) {
      result.push(file);
      usedNames.add(file);
      nameCount[file] = 1;
    } else {
      // Find the smallest available (n)
      let count = nameCount[file] || 1;
      let newName = `${file}(${count})`;

      while (usedNames.has(newName)) {
        count++;
        newName = `${file}(${count})`;
      }

      result.push(newName);
      usedNames.add(newName);
      nameCount[file] = count + 1;
    }
  }

  return result;
}

console.log(renameFiles(["a", "b", "c", "a"]));

//

function renameFiles(files) {
  const usedNames = {};
  const nameCount = {};
  const result = [];

  for (let i = 0; i < files.length; i++) {
    let file = files[i];

    if (!usedNames[file]) {
      result.push(file);
      usedNames[file] = true;
      nameCount[file] = 1;
    } else {
      let count = nameCount[file] || 1;
      let newName = file + "(" + count + ")";

      while (usedNames[newName]) {
        count++;
        newName = file + "(" + count + ")";
      }

      result.push(newName);
      usedNames[newName] = true;
      nameCount[file] = count + 1;
    }
  }

  return result;
}
