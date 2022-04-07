import {sum} from '../src/sum-array';

test('Test sum array to be 4', () => {
    expect(sum([2,2])).toBe(4);

});

test('Test sum array to be 52', () => {
    expect(sum([50,2])).toBe(52);

});
test('Test sum array to be 11.5', () => {
    expect(sum([9.5,2])).toBe(11.5);

});