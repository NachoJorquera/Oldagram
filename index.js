const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492,
        avatarAlt: "Profile image of Vincent van Gogh.",
        postAlt: "Self-portrait by Vincent van Gogh."
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        avatarAlt: "Profile image of Gustave Courbet.",
        postAlt: "The Desperate Man by Gustave Courbet."
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        avatarAlt: "Profile image of Joseph Ducreux.",
        postAlt: "Portrait de l'artiste sous les traits d'un moqueur, Self-portrait by Joseph Ducreux."
    }
]

const containerEl = document.getElementById("container")

for (let i = 0; i < posts.length; i++) {
    containerEl.innerHTML += 
        `<header>
            <img class="user-img" src="${posts[i].avatar}" alt="${posts[i].avatarAlt}">
            <div class="user-info">
                <p class="bold-text mg-zero">${posts[i].name}</p>
                <p class="mg-zero">${posts[i].location}</p>
            </div>
        </header>
        <section id="img-section" class="mg-zero">
            <img class="main-img" src="${posts[i].post}" alt="${posts[i].postAlt}"></img>
        </section>
        <section>
            <div class="icons">
                <a id="like-btn-${i}"><img class="icon" src="images/like.png" alt="Heart icon."></a>
                <a><img class="icon" src="images/comment.png" alt="Comment icon."></a>
                <a><img class="icon" src="images/share.png" alt="Dm icon."></a>
            </div>
            <p id="like-${i}" class="bold-text mg-ten">${posts[i].likes} likes</p>
            <p class="mg-zero in-block"><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
        </section>`
}

window.addEventListener("DOMContentLoaded", (event) => {
    for (let i = 0; i < posts.length; i++) {
        const likeBtn = document.getElementById(`like-btn-${i}`)
        const likeEl = document.getElementById(`like-${i}`)

        likeBtn.addEventListener("dblclick", function() {
            posts[i].likes += 1
            likeEl.textContent = posts[i].likes + ' likes'
        })
    } 
});