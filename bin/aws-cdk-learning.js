#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const aws_cdk_learning_stack_1 = require("../lib/aws-cdk-learning-stack");
const app = new cdk.App();
new aws_cdk_learning_stack_1.AwsCdkLearningStack(app, 'AwsCdkLearningStack');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWNkay1sZWFybmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF3cy1jZGstbGVhcm5pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQywwRUFBb0U7QUFFcEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsSUFBSSw0Q0FBbUIsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCB7IEF3c0Nka0xlYXJuaW5nU3RhY2sgfSBmcm9tICcuLi9saWIvYXdzLWNkay1sZWFybmluZy1zdGFjayc7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5uZXcgQXdzQ2RrTGVhcm5pbmdTdGFjayhhcHAsICdBd3NDZGtMZWFybmluZ1N0YWNrJyk7XG4iXX0=