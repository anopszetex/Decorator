import http from 'http'

// curl -i localhost:3000 
function handleRequest (request, response) {
  response.end('Heey!')
}

const server = http.createServer(handleRequest)

const port = 3000

server.listen(port, () => {
  console.log('server running at', server.address().port)
})