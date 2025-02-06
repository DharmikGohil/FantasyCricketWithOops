import { Shot } from "../src/Shot";

describe("Testing Shot class", () => {
    let shot : Shot ;
    beforeEach(() => {
        shot = new Shot();
    })
    test("Testing Shot constructor", () => {
        expect(shot).not.toBeNull();
    })
    test("it shuold be return random runs", () => {
        expect(shot.getRuns()).toBeGreaterThanOrEqual(-1);
        expect(shot.getRuns()).toBeLessThanOrEqual(6);
    }) 
    test("it should be return fantasy points as per rule", () => {
        expect(shot.getFantasyPoints()).toBeGreaterThanOrEqual(1);
        expect(shot.getFantasyPoints()).toBeLessThanOrEqual(10);
    }) 

})