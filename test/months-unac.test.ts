import { monthsUnac } from '../src/months-unac';


test(" Test array contains Jan", ()=>{
    
    expect(monthsUnac()).toContain("Jan");

});

test(" Test array contains May", ()=>{
    
    expect(monthsUnac()).toContain("May");

});

test(" Test array not contains Lol", ()=>{
    
    expect(monthsUnac()).not.toContain("Lol");

});

test(" Test array not contains WoW", ()=>{
    
    expect(monthsUnac()).not.toContain("Wow");

});
