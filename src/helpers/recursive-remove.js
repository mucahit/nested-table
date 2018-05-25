export default function recursiveRemove(list, start) {
  const targetItem = list[start];
  const clonedList = [...list].map((item, index) => {
    if (item.parentID === targetItem.ID) {
      recursiveRemove(list, index);
      return { ...item, removed: true };
    }
    return item;
  });

  clonedList[start].removed = true;

  return clonedList;
}
