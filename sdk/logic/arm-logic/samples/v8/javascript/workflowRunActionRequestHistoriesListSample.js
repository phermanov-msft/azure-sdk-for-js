/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { LogicManagementClient } = require("@azure/arm-logic");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to List a workflow run request history.
 *
 * @summary List a workflow run request history.
 * x-ms-original-file: specification/logic/resource-manager/Microsoft.Logic/stable/2019-05-01/examples/WorkflowRunActionRequestHistories_List.json
 */
async function listARequestHistory() {
  const subscriptionId =
    process.env["LOGIC_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["LOGIC_RESOURCE_GROUP"] || "test-resource-group";
  const workflowName = "test-workflow";
  const runName = "08586776228332053161046300351";
  const actionName = "HTTP_Webhook";
  const credential = new DefaultAzureCredential();
  const client = new LogicManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workflowRunActionRequestHistories.list(
    resourceGroupName,
    workflowName,
    runName,
    actionName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listARequestHistory();
}

main().catch(console.error);