export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
	  console.log(request.body);
	  console.log(request.headers);
  
	  const url = new URL(request.url);
  
	  if (url.pathname === "/users") {
		if (request.method === "GET") {
		  return Response.json({
			message: "you sent a get request"
		  });
		} else {
		  return Response.json({
			message: "you did not send a get request"
		  });
		}
	  }
  
	  return new Response("Not found", { status: 404 });
	},
  };
  