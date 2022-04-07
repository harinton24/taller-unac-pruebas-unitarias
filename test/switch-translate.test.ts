import { translateUnac } from '../src/switch-translate';


test(" Test translate unac expcted hi = hola", ()=>{
    
    expect(translateUnac("hi")).toBe("hola");

});

test(" Test translate unac expcted moon = luna", ()=>{
    
    expect(translateUnac("moon")).toBe("luna");

});

test(" Test translate unac expcted nothing = luna", ()=>{
    
    expect(translateUnac("")).toBe("default");

});