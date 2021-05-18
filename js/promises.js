const userLastCommit = username => {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_ACCESS_TOKEN}`}})
        .then(resp => resp.json())
        .then(data => {
            // console.log(data);
            let lastPush;
            for(let event of data) {
                if(event.type === "PushEvent") {
                    lastPush = new Date(event.created_at);
                    break;
                }
            }
            console.log(lastPush);
        });
}

userLastCommit("davidandstephens");


const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`You'll see this after ${ms/1000} second(s).`);
        }, ms);
    })
}

wait(1000).then(message => console.log(message));
wait(3000).then(message => console.log(message));
wait(5000).then(message => console.log(message));
