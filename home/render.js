export function layout(title, content){
    return `
    <html>
    <head>
        <title>${title}</title>
        <style>
            body {
                padding: 80px;
                font: 16px Helvetica, Arial;
            }
            h1 {
                font-size: 2em;
            }
            h2 {
                font-size: 1.2em;
            }
            #posts {
                margin: 0;
                padding: 0;
            }
            #posts li {
                margin: 40px 0;
                padding: 0;
                padding-bottom: 20px;
                border-bottom: 1px solid #eee;
                list-style: none;
            }
            #posts li:last-child {
                border-bottom: none;
            }
            textarea {
                width: 500px;
                helght: 300px;
            }
            input[type=text],
            textarea {
                border: 1px solid #eee;
                border-top-color: #ddd;
                border-radius: 2px;
                padding: 15px;
                font-sizw: .8em;
            }
            input[type=text] {
                width:500px;
            }
        </style>
        </head>
        <body>
            <section id="content">
                ${content}
            </section>
        </body>
        </html>
    `
}

export function list(posts) {
    let list = []
    for (let post of posts) {
        list.push(`
            <li>
                <h2>${ post.title }</h2>
                <p>${ post.body}</p>
                <p><a href="/post/${post.id}">Go to event</a></p>
            </li>
        `)
    }
    let content = `
        <h1>Calender</h1>
        <p>You have <strong>${posts.length}</strong> events!</p>
        <p><a href="/post/new">Create a event</a></p>
        <ul id="posts">
            ${list.join('\n')}
        </ul>
    `
    return layout('Posts', content)
}

export function newPost() {
    return layout('New Post', `
        <h1>New Event</h1>
        <p>Create a new event.</p>
        <form action="/post" method="post">
            <p><input type="date" name="title"></p>
            <p><textarea placeholder="Contents" name="body"></textarea></p>
            <p><input type="submit" value="Create"></p>
        </form>
    `)
}

export function show(post) {
    return layout(post.title, `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    `)
}
