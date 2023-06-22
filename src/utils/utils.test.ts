import { getCommonElements } from './utils';

describe('getCommonElements', () => {
    test('should return common elements from multiple arrays', () => {
        const arrays = [
            [1, 2, 3],
            [2, 3, 4],
            [3, 4, 5],
        ];
        const result = getCommonElements(arrays);
        expect(result).toEqual([3]);
    });

    test('should return an empty array if no common elements are found', () => {
        const arrays = [
            [1, 2],
            [3, 4],
            [5, 6],
        ];
        const result = getCommonElements(arrays);
        expect(result).toEqual([]);
    });

    test('should return the first array if only one array is provided', () => {
        const arrays = [[1, 2]];
        const result = getCommonElements(arrays);
        expect(result).toEqual([1, 2]);
    });
});
