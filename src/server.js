/*

  - TODO 1: Criar um servidor que recebe requisições HTTP na porta 8000 e responde com o conteúdo de um arquivo HTML.
  - TODO 2: Se for acessada a URL http://localhost:8000/about deve mostrar o conteúdo da pagina `pages/about.html`
  - TODO 3: Se for acessada a URL http://localhost:8000/ ou http://localhost:8000/home deve mostrar o conteúdo da pagina `pages/index.html`
  - TODO 4: Se for acessada qualquer outro caminho deve mostrar o conteúdo da pagina `pages/404.html`
 

  OBS: Deve ser utilizado apenas os módulos nativos do NODE (http, path, fs, etc), nada de instalar outras libs ( ˘︹˘ )
*/
const host = 'localhost',
      port = '8000',
      path = require('path'),
      http = require('http'),
      fs   = require('fs');

const indexPath = path.join(__dirname,'pages','index.html');
const errorPath = path.join(__dirname,'pages','404.html');
const aboutPath = path.join(__dirname,'pages','about.html');

const indexFile = fs.readFileSync(indexPath)
const errorFile = fs.readFileSync(errorPath)
const aboutFile = fs.readFileSync(aboutPath)

const requestListener = function(req, res) {

  res.setHeader("Content-type","text/html");
  switch (req.url) {
    case '/':
      res.writeHead(200);
      res.end(indexFile);
      break;

    case '/home':
      res.writeHead(200);
      res.end(indexFile);
      break;
    
    case '/about':
      res.writeHead(200);
      res.end(aboutFile);
      break;

    default:
      res.writeHead(404);
      res.end(errorFile);
      break
  }
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});