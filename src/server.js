import express from 'express';
require('dotenv').config()
import connectDB from './db/db';
const app = express();

const PORT = process.env.PORT;

const data={
  "login": "satyadev-mishra",
  "id": 60403870,
  "node_id": "MDQ6VXNlcjYwNDAzODcw",
  "avatar_url": "https://avatars.githubusercontent.com/u/60403870?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/satyadev-mishra",
  "html_url": "https://github.com/satyadev-mishra",
  "followers_url": "https://api.github.com/users/satyadev-mishra/followers",
  "following_url": "https://api.github.com/users/satyadev-mishra/following{/other_user}",
  "gists_url": "https://api.github.com/users/satyadev-mishra/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/satyadev-mishra/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/satyadev-mishra/subscriptions",
  "organizations_url": "https://api.github.com/users/satyadev-mishra/orgs",
  "repos_url": "https://api.github.com/users/satyadev-mishra/repos",
  "events_url": "https://api.github.com/users/satyadev-mishra/events{/privacy}",
  "received_events_url": "https://api.github.com/users/satyadev-mishra/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Satyadev Mishra",
  "company": null,
  "blog": "",
  "location": "Faridabad, Haryana - INDIA",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2020-01-28T18:45:40Z",
  "updated_at": "2025-02-15T13:29:09Z"
}

app.get('/', (req, res) => {
    res.send('<h1>Hello this is Flyairnova Backend</h1>');
})

app.get('/api/myprofile', (req, res) => {
    res.json(data);
})

app.post('/auth/login', (req, res) => {
          const data=req.body ||"Could not get the data"
        console.log(data)
        res.json({success:true,data:[{token:"78r7ehriut387982787rtfgegytfr387ywr8732iuebjnbjhdgfieuf972"}]});
    
    
})

app.listen(PORT, (req, res) => {
    console.log("listining on port :" + PORT);
})