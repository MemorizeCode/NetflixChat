import { valueTransform } from "./valueTransform"

describe("Тест на valueTransform", () => {
    test("1 час", ()=>{
        expect(valueTransform(60)).toBe("1 час 0 минут")
    })
    test("2 часа", ()=>{
        expect(valueTransform(120)).toBe("2 часа 0 минут")
    })
    test("6 часа", ()=>{
        expect(valueTransform(360)).toBe("6 часов 0 минут")
    })

    test("1 минута", ()=>{
        expect(valueTransform(1)).toBe("1 минута")
    })
    test("2 минуты", ()=>{
        expect(valueTransform(2)).toBe("2 минуты")
    })
    test("6 минут", ()=>{
        expect(valueTransform(6)).toBe("6 минут")
    })

    test("1 час 10 минут", ()=>{
        expect(valueTransform(70)).toBe("1 час 10 минут")
    })
    test("3 часа 4 минуты", ()=>{
        expect(valueTransform(184)).toBe("3 часа 4 минуты")
    })
})