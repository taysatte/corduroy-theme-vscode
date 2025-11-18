/**
 * Group an array of items by a key function.
 *
 * Example:
 *   const people = [{name: 'A', age: 20}, {name: 'B', age: 30}, {name: 'C', age: 20}];
 *   const byAge = groupBy(people, p => p.age);
 *   // byAge => { '20': [{...}, {...}], '30': [{...}] }
 */
export function groupBy<T, K extends keyof any>(
  items: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  return items.reduce((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<K, T[]>);
}
