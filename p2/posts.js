const axios = require('axios')

axios({ url: "https://jsonplaceholder.typicode.com/posts/2/comments" })
.then((r)=>{
    console.log(r.data)
})