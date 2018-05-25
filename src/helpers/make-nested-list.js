function makeNestedList(list) {
  const clonedList = list.map((item, index) => (
    {
      ...item,
      children: [],
      absolutePosition: index,
    }
  ));
  const nestedList = [];
  const map = {};

  for (let index = 0; index < clonedList.length; index += 1) {
    map[clonedList[index].ID] = index;
  }

  clonedList.filter(i => !i.removed).forEach((item) => {
    if (item.parentID) {
      clonedList[map[item.parentID]].children.push(item);
    } else {
      nestedList.push(item);
    }
  });
  return nestedList;
}

export default makeNestedList;
