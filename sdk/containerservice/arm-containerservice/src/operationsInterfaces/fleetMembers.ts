/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  FleetMember,
  FleetMembersListByFleetOptionalParams,
  FleetMembersCreateOrUpdateOptionalParams,
  FleetMembersCreateOrUpdateResponse,
  FleetMembersGetOptionalParams,
  FleetMembersGetResponse,
  FleetMembersDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FleetMembers. */
export interface FleetMembers {
  /**
   * Lists the members of a fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param options The options parameters.
   */
  listByFleet(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetMembersListByFleetOptionalParams
  ): PagedAsyncIterableIterator<FleetMember>;
  /**
   * A member contains a reference to an existing Kubernetes cluster. Creating a member makes the
   * referenced cluster join the Fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param fleetMemberName The name of the Fleet member resource.
   * @param parameters The Fleet member to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
    parameters: FleetMember,
    options?: FleetMembersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<FleetMembersCreateOrUpdateResponse>,
      FleetMembersCreateOrUpdateResponse
    >
  >;
  /**
   * A member contains a reference to an existing Kubernetes cluster. Creating a member makes the
   * referenced cluster join the Fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param fleetMemberName The name of the Fleet member resource.
   * @param parameters The Fleet member to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
    parameters: FleetMember,
    options?: FleetMembersCreateOrUpdateOptionalParams
  ): Promise<FleetMembersCreateOrUpdateResponse>;
  /**
   * Gets a Fleet member.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param fleetMemberName The name of the Fleet member resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
    options?: FleetMembersGetOptionalParams
  ): Promise<FleetMembersGetResponse>;
  /**
   * Deleting a Fleet member results in the member cluster leaving fleet. The Member azure resource is
   * deleted upon success. The underlying cluster is not deleted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param fleetMemberName The name of the Fleet member resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
    options?: FleetMembersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deleting a Fleet member results in the member cluster leaving fleet. The Member azure resource is
   * deleted upon success. The underlying cluster is not deleted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param fleetMemberName The name of the Fleet member resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
    options?: FleetMembersDeleteOptionalParams
  ): Promise<void>;
}