import { serve } from './deps.ts';


const addr = ":8080";

const handler = (request: Request): Response => {
	  const headers = setBaseHeaders();
	  headers.set("content-type", "text/html");
 
  let body = `<!DOCTYPE html><html><head><title>Random Number</title><style>h1 {position: fixed;color: #e8e5dd;text-align: center;top: 50%;left: 50%;};</style></head><body style="background-color:black"><h1>${getRandomInt(666)}</h1></body></html>`;
  return new Response(body, { 
			      status: 200, 
			      statusText: "200 OK", 
			      headers
		      });
};


function setBaseHeaders(): Headers {
  const headers = new Headers();
  headers.set("server", "deno");

  // Set "accept-ranges" so that the client knows it can make range requests on future requests
  headers.set("accept-ranges", "bytes");
  headers.set("date", new Date().toUTCString());

  return headers;
}

function getRandomInt(max: any) {
  return Math.floor(Math.random() * max);
}


console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { addr });
