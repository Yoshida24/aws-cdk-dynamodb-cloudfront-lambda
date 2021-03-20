#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkLearningStack } from '../lib/aws-cdk-learning-stack';

const app = new cdk.App();
new AwsCdkLearningStack(app, 'AwsCdkLearningStack');
