
If you are new to Serverless or want a starting point for the AWS Summit hackathon, you can use this starter project to help you get going. This repo also includes sample data which you can use in your hotel booking app. This code contains a SAM template that defines the resources in your application, starter code for a Node.js Lambda function and some instructions to get you off the ground. Feel free to use this template to get started, though you are not required to use it. You are free to use other tools or libraries that you might be already familiar with.

### Getting Started

Here are the instructions to start using the starter project:

1. Checkout the code: `git clone <url>`
1. `cd day-one-space-tours`
1. You will need an Amazon S3 Bucket to be able to deploy the stack. Choose a bucket name and create a bucket first using the command `aws s3 mb <bucketname>`
1. Open `package.json` in an editor and replace the `<sam-package-bucket>` string in the package command script with the bucket name you choose in previous step
1. Now you are ready to get started with development. Use `npm install` to install required modules and start coding!

### Deploying Stack
We have pre-configured simple packaging and deploying instructions in the `package.json` file. In order to deploy a stack, run `npm run package && npm run deploy`. This will upload the code from your computer to the Amazon S3 bucket you had created earlier, and call AWS CloudFormation service to deploy the stack.

### Get API Gateway URL from Stack Output
1. Open [CloudFormation](https://aws.amazon.com/cloudformation/) and sign in if you are not already logged in.
2. In the table containing the list of stacks created, select the stack named day-one-space-tours. (If you are not
   able to see the stack in the console, this might usually be because of the region. Make sure that you are in the right region by checking the current region in the navigation bar)
3. Expand the Outputs section in the stack details page, to find a table similar to the one below containing the required values
| Key | Value | Description |
| --- | --- | --- |
| ApiBaseUrl | Base API URL value | API Gateway endpoint URL for Prod environment |

### Get RDS Instance Connection Details from Stack Output
1. Open [CloudFormation](https://aws.amazon.com/cloudformation/) and sign in if you are not already logged in.
2. In the table containing the list of stacks created, select the stack named day-one-space-tours. (If you are not
   able to see the stack in the console, this might usually be because of the region. Make sure that you are in the right region by checking the current region in the navigation bar)
3. Expand the Outputs section in the stack details page, to find a table similar to the one below containing the required values
| Key | Value | Description |
| --- | --- | --- |
| HotelDBInstanceAddress | Address of the Hotel DB Instance | Address to connect to the MySQL Hotel DB Instance |
| HotelDBInstancePort | Port number of the Hotel DB Instance | Port number to connect to the MySQL Hotel DB Instance |

### Reference

1. [AWS Serverless Express](https://github.com/awslabs/aws-serverless-express): The app is built using this library which makes [Express.js](https://expressjs.com/) apps to work nicely with AWS Lambda and Amazon API Gateway. For the most part, you should be able to use regular Express.js constructs to build your frontend and backend.

### General Instructions and Service Documentation Details

1. This Serverless Application is defined using the [AWS Serverless Architecture Model (SAM) Specification](https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md). Refer [How to create serverless applications using AWS SAM](https://github.com/awslabs/serverless-application-model/blob/master/HOWTO.md) for complete detail on creating and deploying a Serverless Application using AWS SAM.

3. [SAM](https://docs.aws.amazon.com/lambda/latest/dg/serverless_app.html) is deployed using [CloudFormation](https://aws.amazon.com/cloudformation/). [SAM](https://docs.aws.amazon.com/lambda/latest/dg/serverless_app.html) configuration file mainly describes the [Lambda Function](https://aws.amazon.com/lambda/) for processing and [API Gateway](https://aws.amazon.com/api-gateway/?nc2=h_m1) for API Endpoints that fronts the [Lambda Function](https://aws.amazon.com/lambda/).

4. All logs from your Lambda Function are pushed to [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/?nc2=h_m1), which can be used to debug the [Lambda Function](https://aws.amazon.com/lambda/). For more details refer [Monitoring and Troubleshooting Lambda-based Applications](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html).

5. [Amazon DynamoDB](https://aws.amazon.com/dynamodb/?nc2=h_m1) is a fully managed [NoSQL](https://aws.amazon.com/nosql/) database. The [SAM](https://docs.aws.amazon.com/lambda/latest/dg/serverless_app.html) template in this package creates a simple [Amazon DynamoDB](https://aws.amazon.com/dynamodb/?nc2=h_m1) table. Refer to the following documentation to start using DynamoDB in your Serverless Application:
  - [Getting Started with DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.html)
  - [Programming with DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.html)
  - [Working with DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithDynamo.html)
  - [DynamoDB Developer Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)

6. [Amazon Aurora](https://aws.amazon.com/rds/aurora/?nc2=h_m1) is a MySQL and PostgreSQL compatible relational database built for the cloud. The [SAM](https://docs.aws.amazon.com/lambda/latest/dg/serverless_app.html) template in this package creates an instance running MySQL Database in it. Refer to the following documentation to work with MySQL in [Amazon Aurora](https://aws.amazon.com/rds/aurora/?nc2=h_m1):
  - [Connecting to an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Connecting.html)
  - [Aurora User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html)
  - [Invoking Lambda from an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Integrating.Lambda.html)
  - [Configuring Lambda to access RDS](https://docs.aws.amazon.com/lambda/latest/dg/vpc-rds.html)
