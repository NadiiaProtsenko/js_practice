
async function getPostBodyById(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await response.json();
        console.log("Post body:", post.body);
    } catch (error) {
        console.error("Error fetching post:", error);
    }
}

async function getUsersWithPostCounts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        for (const user of users) {
            const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
            const posts = await postResponse.json();
            console.log(`User ${user.name} has ${posts.length} posts.`);
        }
    } catch (error) {
        console.error("Error fetching users or posts:", error);
    }
}

getPostBodyById(1);

getUsersWithPostCounts();
