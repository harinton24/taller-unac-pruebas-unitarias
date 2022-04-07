import {mean} from '../src/mean-array';

test(" Test mean array to be 3", ()=>{
    expect(mean([2,4])).toBe(3);
});


test(" Test mean array to be 5", ()=>{
    expect(mean([4,4])).toBe(4);
});

test(" Test mean array to be 7", ()=>{
    expect(mean([5,9])).toBe(7);
});
test(" Test mean array to be 9.5", ()=>{
    expect(mean([10,9])).toBe(9.5);
});