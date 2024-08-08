import { hello } from '../src/app/Service';


describe("Hello Test", () =>{
    test("Service Test", () =>{
        const serviceTest = hello();
        const expected = "Robot 2.0 Activate";
        expect(serviceTest).toBe(expected);
    })
})