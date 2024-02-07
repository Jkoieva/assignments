import {chromium, test, Page, BrowserContext, expect} from "@playwright/test"

test.describe.serial("API tests",()=>{

test("Get many users", async({request})=>{
    let result = await request.get("https://reqres.in/api/users?page=2")
    let data = await result.json()
    // console.log(data)
    expect(result.ok()).toBeTruthy()
})

test("Get a single user", async({request})=>{
    let result = await request.get("https://reqres.in/api/users/2")
    let data = await result.json()
    console.log(data)
    expect(data).toEqual(expect.objectContaining({
        "data": {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    }))
})

test("Update user",async({request})=>{
    let result = await request.put("https://reqres.in/api/users/2")
    expect(result.status()).toBe(200)
})

test("Create user", async({request})=>{
    let result = await request.post("https://reqres.in/api/users")
    expect(result.status()).toBe(201)

})

test("Delete user", async({request})=>{
    let result = await request.delete("https://reqres.in/api/users/2")
    expect(result.status()).toBeTruthy()
})

})