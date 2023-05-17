import * as cdk from "aws-cdk-lib";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, "Pipeline", {
      pipelineName: "MyPipeline",
      crossAccountKeys: false,
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.gitHub("akmalpopalzi98/awsPipeline", "main"),
        commands: ['cdk synth'],
      }),
    });
  }
}
