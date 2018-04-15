// @flow

export type GroupedItem<T> = {
  letter: string,
  items: Array<T>,
};

const groupByFirstLetter = <T: { title: string }>(
  items: Array<T>,
  letterTransformer?: string => string,
): Array<GroupedItem<T>> => {
  const group: Array<GroupedItem<T>> = [];

  items.forEach(item => {
    const letter = letterTransformer ? letterTransformer(item.title[0]) : item.title[0];
    const prevIndex = group.findIndex(p => p.letter === letter);

    if (prevIndex === -1) {
      group.push({ letter, items: [item] });
    } else {
      group[prevIndex].items.push(item);
    }
  });

  return group
    .sort((a, b) => a.letter.localeCompare(b.letter))
    .map(item => ({ ...item, items: item.items.sort((a, b) => a.title.localeCompare(b.title)) }));
};

export default groupByFirstLetter;
