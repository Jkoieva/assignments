import {chromium, test, Page, BrowserContext, expect} from "@playwright/test"

test.describe.serial("API tests",()=>{

test("Get many users", async({request})=>{
    let result = await request.get("http://localhost:3000/users")
    let data = await result.json()
    // console.log(data)
    expect(result.ok()).toBeTruthy()
})

test("Get a single user", async({request})=>{
    let result = await request.get("http://localhost:3000/users/2")
    let data = await result.json()
    data.map((obj)=>{
        
        expect(obj).toEqual(expect.objectContaining({
    
            "id": 2,
            "name": "Kate",
            "age": "25",
            "sex": "female"
        
    }))

    })
    
})

test("Create user", async({request})=>{
    let result = await request.post( `http://localhost:3000/users`,{
        data:{
            name:'Jack',
            age:'50',
            sex:'male'
        }
    })
    expect(result.status()).toBeTruthy();

    const result1 = await request.get("http://localhost:3000/users");
    expect(await result1.json()).toContainEqual(expect.objectContaining({
        name:'Jack',
        age:'50',
        sex:'male'
    }))

})

test("Delete user", async({request})=>{
    let result = await request.delete("http://localhost:3000/users/2")
    expect(result.status()).toBeTruthy()
})

})