InjectHttpInterceptor()

import http from 'http'
import { InjectHttpInterceptor } from '../src/agent.js'

// curl -i localhost:5000 
function handleRequest (request, response) {
  response.end('Heey!')
}

const server = http.createServer(handleRequest)

const port = 5000

server.listen(port, () => {
  console.log('server running at', server.address().port)
})