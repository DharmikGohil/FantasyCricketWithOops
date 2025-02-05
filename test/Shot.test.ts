import { Shot } from "../src/Shot";

describe("Testing Shot class", () => {
    let shot : Shot ;
    beforeEach(() => {
        shot = new Shot();
    })
    test("Testing Shot constructor", () => {
        expect(shot).not.toBeNull();
    })
    test("Testing getRuns method", () => {
        expect(shot.getRuns()).toBeGreaterThanOrEqual(-1);
        expect(shot.getRuns()).toBeLessThanOrEqual(6);
    }) 
    test("Testing getFantasyPoints method", () => {
        expect(shot.getFantasyPoints()).toBeGreaterThanOrEqual(1);
        expect(shot.getFantasyPoints()).toBeLessThanOrEqual(10);
    }) 

})