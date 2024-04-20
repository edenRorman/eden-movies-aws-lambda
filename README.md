# Movies API lambda

This is a project i'm working on in order to showcase my fullstack-development skills.
This is the backend of the project hosted on [AWS Lambda](https://aws.amazon.com/pm/lambda/), and an [RDS](https://aws.amazon.com/pm/rds/) mysql DB.
It is written in node with typescript.

The frontend code can be found on my github [here](https://github.com/edenRorman/movies-app).

## Project strcture

The project relies on multiple libraries in order to expose a web-api on AWS lambda:

- [serverless](https://www.serverless.com/) - in order to configure the lambda itself (with its api-gw) and wrap our code in a lambda handler
- [express](https://expressjs.com/) - in order to host an http server with its different routes

## Running locally

You can run the server locally by runnig `serverless offline`. This will setup a local server available at `http://localhost:4000/dev`.
Notice that the DB functionality won't work (at least for now) as the DB is hosted on AWS under a VPC (not accessible from the internet).

## Deploy

To deploy the code simply run `npm run deploy`. This will complie the typescript code, and deploy it to AWS. Of course you need to setup the AWS CLI.
