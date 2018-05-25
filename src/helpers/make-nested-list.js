function makeNestedList(list) {
  const clonedList = list.map(item => ({ ...item, children: [] }));
  const nestedList = [];
  const map = {};

  for (let index = 0; index < clonedList.length; index += 1) {
    map[clonedList[index].ID] = index;
  }

  clonedList.forEach((item) => {
    if (item.parentID) {
      clonedList[map[item.parentID]].children.push(item);
    } else {
      nestedList.push(item);
    }
  });
  return nestedList.reverse();
}

export default makeNestedList;
