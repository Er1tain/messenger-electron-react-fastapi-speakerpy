from fastapi import FastAPI

app = FastAPI(swagger_ui_parameters={"syntaxHighlight": False})

@app.get("/")
async def root():
    return {"message": "Hello World"}