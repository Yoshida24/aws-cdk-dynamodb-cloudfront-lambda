"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCorsOptions = exports.AwsCdkLearningStack = void 0;
const cdk = require("@aws-cdk/core");
const aws_dynamodb_1 = require("@aws-cdk/aws-dynamodb");
const aws_lambda_1 = require("@aws-cdk/aws-lambda");
const aws_apigateway_1 = require("@aws-cdk/aws-apigateway");
class AwsCdkLearningStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const dynamoTable = new aws_dynamodb_1.Table(this, "items", {
            partitionKey: {
                name: "id",
                type: aws_dynamodb_1.AttributeType.STRING,
            },
            tableName: "products",
            removalPolicy: cdk.RemovalPolicy.DESTROY,
        });
        const getItemLambda = new aws_lambda_1.Function(this, "getOneItemFunction", {
            code: new aws_lambda_1.AssetCode("lib/lambda"),
            handler: "get-item.handler",
            runtime: aws_lambda_1.Runtime.NODEJS_10_X,
            environment: {
                TABLE_NAME: dynamoTable.tableName,
                PRIMARY_KEY: "datetime_iso",
            },
        });
        // dynamodb読み取り権限をLambdaに付与
        dynamoTable.grantReadData(getItemLambda);
        // ApiGateway
        const api = new aws_apigateway_1.RestApi(this, "sampleApi", {
            restApiName: "Sample API",
        });
        const items = api.root.addResource("items");
        const singleItem = items.addResource("{id}");
        const getItemIntegration = new aws_apigateway_1.LambdaIntegration(getItemLambda);
        singleItem.addMethod("GET", getItemIntegration);
        addCorsOptions(items);
    }
}
exports.AwsCdkLearningStack = AwsCdkLearningStack;
function addCorsOptions(apiResource) {
    apiResource.addMethod("OPTIONS", new aws_apigateway_1.MockIntegration({
        integrationResponses: [
            {
                statusCode: "200",
                responseParameters: {
                    "method.response.header.Access-Control-Allow-Headers": "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent'",
                    "method.response.header.Access-Control-Allow-Origin": "'*'",
                    "method.response.header.Access-Control-Allow-Credentials": "'false'",
                    "method.response.header.Access-Control-Allow-Methods": "'OPTIONS,GET,PUT,POST,DELETE'",
                },
            },
        ],
        passthroughBehavior: aws_apigateway_1.PassthroughBehavior.NEVER,
        requestTemplates: {
            "application/json": '{"statusCode": 200}',
        },
    }), {
        methodResponses: [
            {
                statusCode: "200",
                responseParameters: {
                    "method.response.header.Access-Control-Allow-Headers": true,
                    "method.response.header.Access-Control-Allow-Methods": true,
                    "method.response.header.Access-Control-Allow-Credentials": true,
                    "method.response.header.Access-Control-Allow-Origin": true,
                },
            },
        ],
    });
}
exports.addCorsOptions = addCorsOptions;
const app = new cdk.App();
new AwsCdkLearningStack(app, "AwsCdkLearningStack");
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWNkay1sZWFybmluZy1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF3cy1jZGstbGVhcm5pbmctc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXFDO0FBQ3JDLHdEQUE2RDtBQUM3RCxvREFBbUU7QUFBQyw0REFNbkM7QUFFakMsTUFBYSxtQkFBb0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNoRCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sV0FBVyxHQUFHLElBQUksb0JBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQzNDLFlBQVksRUFBRTtnQkFDWixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsNEJBQWEsQ0FBQyxNQUFNO2FBQzNCO1lBQ0QsU0FBUyxFQUFFLE9BQU87WUFDbEIsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTztTQUN6QyxDQUFDLENBQUM7UUFFSCxNQUFNLGFBQWEsR0FBRyxJQUFJLHFCQUFRLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQzdELElBQUksRUFBRSxJQUFJLHNCQUFTLENBQUMsWUFBWSxDQUFDO1lBQ2pDLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsT0FBTyxFQUFFLG9CQUFPLENBQUMsV0FBVztZQUM1QixXQUFXLEVBQUU7Z0JBQ1gsVUFBVSxFQUFFLFdBQVcsQ0FBQyxTQUFTO2dCQUNqQyxXQUFXLEVBQUUsUUFBUTthQUN0QjtTQUNGLENBQUMsQ0FBQztRQUVILDJCQUEyQjtRQUMzQixXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXpDLGFBQWE7UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLHdCQUFPLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUN6QyxXQUFXLEVBQUUsWUFBWTtTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1QyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxrQ0FBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRSxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hELGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV4QixDQUFDO0NBQ0Y7QUF0Q0Qsa0RBc0NDO0FBQ0QsU0FBZ0IsY0FBYyxDQUFDLFdBQXNCO0lBQ25ELFdBQVcsQ0FBQyxTQUFTLENBQ25CLFNBQVMsRUFDVCxJQUFJLGdDQUFlLENBQUM7UUFDbEIsb0JBQW9CLEVBQUU7WUFDcEI7Z0JBQ0UsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLGtCQUFrQixFQUFFO29CQUNsQixxREFBcUQsRUFDbkQseUZBQXlGO29CQUMzRixvREFBb0QsRUFBRSxLQUFLO29CQUMzRCx5REFBeUQsRUFDdkQsU0FBUztvQkFDWCxxREFBcUQsRUFDbkQsK0JBQStCO2lCQUNsQzthQUNGO1NBQ0Y7UUFDRCxtQkFBbUIsRUFBRSxvQ0FBbUIsQ0FBQyxLQUFLO1FBQzlDLGdCQUFnQixFQUFFO1lBQ2hCLGtCQUFrQixFQUFFLHFCQUFxQjtTQUMxQztLQUNGLENBQUMsRUFDRjtRQUNFLGVBQWUsRUFBRTtZQUNmO2dCQUNFLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixrQkFBa0IsRUFBRTtvQkFDbEIscURBQXFELEVBQUUsSUFBSTtvQkFDM0QscURBQXFELEVBQUUsSUFBSTtvQkFDM0QseURBQXlELEVBQUUsSUFBSTtvQkFDL0Qsb0RBQW9ELEVBQUUsSUFBSTtpQkFDM0Q7YUFDRjtTQUNGO0tBQ0YsQ0FDRixDQUFDO0FBQ0osQ0FBQztBQXJDRCx3Q0FxQ0M7QUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3BELEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiQGF3cy1jZGsvY29yZVwiO1xuaW1wb3J0IHsgVGFibGUsIEF0dHJpYnV0ZVR5cGUgfSBmcm9tIFwiQGF3cy1jZGsvYXdzLWR5bmFtb2RiXCI7XG5pbXBvcnQgeyBBc3NldENvZGUsIEZ1bmN0aW9uLCBSdW50aW1lIH0gZnJvbSBcIkBhd3MtY2RrL2F3cy1sYW1iZGFcIjsgaW1wb3J0IHtcbiAgUmVzdEFwaSxcbiAgTGFtYmRhSW50ZWdyYXRpb24sXG4gIElSZXNvdXJjZSxcbiAgTW9ja0ludGVncmF0aW9uLFxuICBQYXNzdGhyb3VnaEJlaGF2aW9yLFxufSBmcm9tIFwiQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXlcIjtcblxuZXhwb3J0IGNsYXNzIEF3c0Nka0xlYXJuaW5nU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgZHluYW1vVGFibGUgPSBuZXcgVGFibGUodGhpcywgXCJpdGVtc1wiLCB7XG4gICAgICBwYXJ0aXRpb25LZXk6IHtcbiAgICAgICAgbmFtZTogXCJpdGVtSWRcIixcbiAgICAgICAgdHlwZTogQXR0cmlidXRlVHlwZS5TVFJJTkcsXG4gICAgICB9LFxuICAgICAgdGFibGVOYW1lOiBcIml0ZW1zXCIsXG4gICAgICByZW1vdmFsUG9saWN5OiBjZGsuUmVtb3ZhbFBvbGljeS5ERVNUUk9ZLCAvLyBOT1QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gY29kZVxuICAgIH0pO1xuXG4gICAgY29uc3QgZ2V0SXRlbUxhbWJkYSA9IG5ldyBGdW5jdGlvbih0aGlzLCBcImdldE9uZUl0ZW1GdW5jdGlvblwiLCB7XG4gICAgICBjb2RlOiBuZXcgQXNzZXRDb2RlKFwibGliL2xhbWJkYVwiKSxcbiAgICAgIGhhbmRsZXI6IFwiZ2V0LWl0ZW0uaGFuZGxlclwiLFxuICAgICAgcnVudGltZTogUnVudGltZS5OT0RFSlNfMTBfWCxcbiAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIFRBQkxFX05BTUU6IGR5bmFtb1RhYmxlLnRhYmxlTmFtZSxcbiAgICAgICAgUFJJTUFSWV9LRVk6IFwiaXRlbUlkXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gZHluYW1vZGLoqq3jgb/lj5bjgormqKnpmZDjgpJMYW1iZGHjgavku5jkuI5cbiAgICBkeW5hbW9UYWJsZS5ncmFudFJlYWREYXRhKGdldEl0ZW1MYW1iZGEpO1xuXG4gICAgLy8gQXBpR2F0ZXdheVxuICAgIGNvbnN0IGFwaSA9IG5ldyBSZXN0QXBpKHRoaXMsIFwic2FtcGxlQXBpXCIsIHtcbiAgICAgIHJlc3RBcGlOYW1lOiBcIlNhbXBsZSBBUElcIixcbiAgICB9KTtcbiAgICBjb25zdCBpdGVtcyA9IGFwaS5yb290LmFkZFJlc291cmNlKFwiaXRlbXNcIik7XG5cbiAgICBjb25zdCBzaW5nbGVJdGVtID0gaXRlbXMuYWRkUmVzb3VyY2UoXCJ7aWR9XCIpO1xuICAgIGNvbnN0IGdldEl0ZW1JbnRlZ3JhdGlvbiA9IG5ldyBMYW1iZGFJbnRlZ3JhdGlvbihnZXRJdGVtTGFtYmRhKTtcbiAgICBzaW5nbGVJdGVtLmFkZE1ldGhvZChcIkdFVFwiLCBnZXRJdGVtSW50ZWdyYXRpb24pO1xuICAgIGFkZENvcnNPcHRpb25zKGl0ZW1zKTtcblxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkQ29yc09wdGlvbnMoYXBpUmVzb3VyY2U6IElSZXNvdXJjZSkge1xuICBhcGlSZXNvdXJjZS5hZGRNZXRob2QoXG4gICAgXCJPUFRJT05TXCIsXG4gICAgbmV3IE1vY2tJbnRlZ3JhdGlvbih7XG4gICAgICBpbnRlZ3JhdGlvblJlc3BvbnNlczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3RhdHVzQ29kZTogXCIyMDBcIixcbiAgICAgICAgICByZXNwb25zZVBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAgIFwibWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCI6XG4gICAgICAgICAgICAgIFwiJ0NvbnRlbnQtVHlwZSxYLUFtei1EYXRlLEF1dGhvcml6YXRpb24sWC1BcGktS2V5LFgtQW16LVNlY3VyaXR5LVRva2VuLFgtQW16LVVzZXItQWdlbnQnXCIsXG4gICAgICAgICAgICBcIm1ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiJyonXCIsXG4gICAgICAgICAgICBcIm1ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIjpcbiAgICAgICAgICAgICAgXCInZmFsc2UnXCIsXG4gICAgICAgICAgICBcIm1ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiOlxuICAgICAgICAgICAgICBcIidPUFRJT05TLEdFVCxQVVQsUE9TVCxERUxFVEUnXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBwYXNzdGhyb3VnaEJlaGF2aW9yOiBQYXNzdGhyb3VnaEJlaGF2aW9yLk5FVkVSLFxuICAgICAgcmVxdWVzdFRlbXBsYXRlczoge1xuICAgICAgICBcImFwcGxpY2F0aW9uL2pzb25cIjogJ3tcInN0YXR1c0NvZGVcIjogMjAwfScsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHtcbiAgICAgIG1ldGhvZFJlc3BvbnNlczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3RhdHVzQ29kZTogXCIyMDBcIixcbiAgICAgICAgICByZXNwb25zZVBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAgIFwibWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiOiB0cnVlLFxuICAgICAgICAgICAgXCJtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfVxuICApO1xufVxuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xubmV3IEF3c0Nka0xlYXJuaW5nU3RhY2soYXBwLCBcIkF3c0Nka0xlYXJuaW5nU3RhY2tcIik7XG5hcHAuc3ludGgoKTtcbiJdfQ==