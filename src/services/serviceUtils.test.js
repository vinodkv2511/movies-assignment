import { add_query_params } from "./serviceUtils"

describe("Add query params", ()=>{
    let query_params=[
        {
            key: "testKey1",
            value:"testValue1"
        },
        {
            key: "testKey2",
            value: 12
        },
        {
            key: "testKey3",
            value: 99.7
        }
    ]

    let baseUrlString = "https://test.com/mmm"
    it("Should take a string and an array of header and return appended string", () => {
        expect(add_query_params(baseUrlString, query_params)).toEqual(baseUrlString+"?"+"testKey1=testValue1&testKey2=12&testKey3=99.7")
    })
})