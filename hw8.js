async function getComments(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments/1')
        const comments = await response.json();
        return comments;
    } catch (error) {
        console.log(error)
    }
}

async function getPosts(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2')
        const posts = await response.json();
        return posts;
    } catch {
        console.log(error)
    }
}




async function getData(){
    const data = Promise.all([getComments(),getPosts()])
    .then ((data) => {
        console.log(data)

    })
    .catch((error)=>{
        console.log(error)
    });
}



async function getData(){
    const data = Promise.all([getComments(),getPosts()])
    .then ((data) => {
        console.log(data)

    })
    .catch((error)=>{
        console.log(error)
    });
}



async function getStatuses(){
    try {
    const promises = [getComments(), getPosts()];
    const results = await Promise.allSettled(promises);

    results.forEach((result, index) => {
        if (result.state === 'fulfilled') {
            console.log (result.state);
        } else {
            console.error (result.reason);
        }
    });
} catch (error) {
    console.error (error.message);
}
}

async function main() {
    await getData();
    await getStatuses();
}

main();