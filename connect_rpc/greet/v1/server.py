from greet_connect import GreetServiceSync, GreetServiceWSGIApplication
from greet_pb2 import GreetResponse

class Greeter(GreetServiceSync):
    def greet(self, request, ctx):
        print("Request headers: ", ctx.request_headers())
        response = GreetResponse(greeting=f"Hello, {request.name}!")
        ctx.response_headers()["greet-version"] = "v1"
        return response

app = GreetServiceWSGIApplication(Greeter())