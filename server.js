const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
//start a next-application
const app = next({ dev })
const handle = app.getRequestHandler()

// app server config
app.prepare()
  .then(()=> {
    const server = express()

    // special custom logic for user-profiles, especially when reload on a profile page
    server.get('/users/profile/:id', (req,res)=>{
      const actualPage = '/users/profile';
      const queryParams = { userId: req.params.id, hello: 'hi' }
      app.render(req, res, actualPage, queryParams)
    })

    // please handle all url requests
    server.get('*', (req,res)=> {
      return handle(req, res)
    })

    server.listen(3000, (err)=>{
      if(err) throw err
      console.log('->hey mr. Filix! your Express server is ready on http://localhost:3000');
    })

  })
  .catch((ex)=> {
    console.error(ex.stack)
    process.exit(1)
  })
