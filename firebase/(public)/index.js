const postlist = document.querySelector(".post");

const setupPosts = (data) => {
    let html = "";
    data.forEach(doc => {
        const post = doc.data();
        const li = `
            <p>${post.title}<p>
            <div class="content">
                <p>${post.content}</p>
            </div>
        `;
        var html2 = html + li;
        document.getElementById("postss").innerHTML(html2);
        console.log(html2);
    });
}
