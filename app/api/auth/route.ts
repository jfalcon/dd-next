import { HttpStatusCode, RestResponse } from '@/types';

export async function GET(request: Request) {
  const response: RestResponse<string> = {
    success: false,
  };

  try {
    const body = await request.json();

    // in real life we'd do something with these, but
    // for the demo we accept anyting... nice
    const { user, password } = body; // eslint-disable-line @typescript-eslint/no-unused-vars

    // this will convert the enum into a readable string
    response.payload = HttpStatusCode[HttpStatusCode.Ok];

    return new Response(JSON.stringify(response), {
      status: HttpStatusCode.Ok,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // never send this to the user in production, simply
    // loging it to STDERR on the server for the demo
    console.error(error); // eslint-disable-line no-console

    // reset payload to avoid confusion
    response.payload = undefined;

    // in real life the error code wouldn't be the same as the
    // HTTP codes, but we're just having fun here for the demo
    response.error = {
      code: HttpStatusCode.Unauthorized,
      message: HttpStatusCode[HttpStatusCode.Unauthorized]
    };

    return new Response(JSON.stringify(response), {
      status: HttpStatusCode.Unauthorized,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
