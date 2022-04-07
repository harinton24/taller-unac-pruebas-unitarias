import {crazy} from '../src/crazy-method';

test(" Test crazy Method", ()=>{
    
    expect(crazy(5,2)).toBe(10);

});

test(" Test crazy ", ()=>{
    
    expect(crazy(5,3)).toBeGreaterThanOrEqual(11);

});
test(" Test crazy ", ()=>{
    
    expect(crazy(10,5)).toBeLessThan(19);

});