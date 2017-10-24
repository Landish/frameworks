import Collection from '../../core/Collection';

describe('Collection.js Test', () => {
  it('should count size correctly', () => {
    const collection = new Collection(['foo', 'bar']);

    collection.add('baz');
    expect(collection.size()).toBe(3);

    collection
      .removeFirst()
      .removeFirst()
      .removeFirst();

    // there are only 3 elements in this collection, but calling
    // the .removeFirst() method should mess up the count
    collection.removeFirst().removeFirst();
    expect(collection.size()).toBe(0);
  });

  it('should find items with .has method', () => {
    const collection = new Collection(['foo', 'bar']);

    expect(collection.has('bar')).toBeTruthy();
    expect(collection.has('foo')).toBeTruthy();
    expect(collection.has('baz')).toBeFalsy();
    expect(collection.has('')).toBeFalsy();
    expect(collection.has()).toBeFalsy();
  });

  it('should not add duplicate entries', () => {
    const collection = new Collection(['foo', 'bar']);

    // trying to add duplicates in collection
    collection.add('foo').add('bar');

    collection.add('baz');

    // in other type of collection total items would be 5
    expect(collection.size()).toBe(3);
  });

  it('should remove items correctly', () => {
    const collection = new Collection(['foo', 'bar', 'baz']);

    collection.remove('bar');

    // shouldn't mess up the count and data
    // by "removing" the non existed item
    collection.remove('NON_EXISTING_ITEM');

    expect(collection.has('foo')).toBeTruthy();
    expect(collection.has('bar')).toBeFalsy();
    expect(collection.size()).toBe(2);
    expect(collection.all()).toEqual(['foo', 'baz']);
  });
});
