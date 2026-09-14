require('dotenv').config()
const express = require('express');
const app = express();
const port = 8080;
const githubdata = 
    {
  "login": "sindhwalrishabh",
  "id": 76862401,
  "node_id": "MDQ6VXNlcjc2ODYyNDAx",
  "avatar_url": "https://avatars.githubusercontent.com/u/76862401?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sindhwalrishabh",
  "html_url": "https://github.com/sindhwalrishabh",
  "followers_url": "https://api.github.com/users/sindhwalrishabh/followers",
  "following_url": "https://api.github.com/users/sindhwalrishabh/following{/other_user}",
  "gists_url": "https://api.github.com/users/sindhwalrishabh/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sindhwalrishabh/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sindhwalrishabh/subscriptions",
  "organizations_url": "https://api.github.com/users/sindhwalrishabh/orgs",
  "repos_url": "https://api.github.com/users/sindhwalrishabh/repos",
  "events_url": "https://api.github.com/users/sindhwalrishabh/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sindhwalrishabh/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-01-02T06:48:57Z",
  "updated_at": "2026-03-22T09:22:53Z"
}


app.get('/',(req,res) => {
    res.send('hello request for the response')
});

app.get('/twiitter',(req,res) => {
    res.send('hello hello')
});

app.get('/login', (req,res)=>{
    res.send('your successfully login into my backend')
});

app.get('/githubdata',(req,res) =>{
       res.json(githubdata)
})
app.listen(process.env.port,()=> {
    console.log(`hello world this backend http://localhost:${port}`);
})

