/* tslint:disable */
/* eslint-disable */
/**
 * Airbyte Configuration API
 * Airbyte Configuration API [https://airbyte.io](https://airbyte.io).  This API is a collection of HTTP RPC-style methods. While it is not a REST API, those familiar with REST should find the conventions of this API recognizable.  Here are some conventions that this API follows: * All endpoints are http POST methods. * All endpoints accept data via `application/json` request bodies. The API does not accept any data via query params. * The naming convention for endpoints is: localhost:8000/{VERSION}/{METHOD_FAMILY}/{METHOD_NAME} e.g. `localhost:8000/v1/connections/create`. * For all `update` methods, the whole object must be passed in, even the fields that did not change.  Change Management: * The major version of the API endpoint can be determined / specified in the URL `localhost:8080/v1/connections/create` * Minor version bumps will be invisible to the end user. The user cannot specify minor versions in requests. * All backwards incompatible changes will happen in major version bumps. We will not make backwards incompatible changes in minor version bumps. Examples of non-breaking changes (includes but not limited to...):   * Adding fields to request or response bodies.   * Adding new HTTP endpoints. * All `web_backend` APIs are not considered public APIs and are not guaranteeing backwards compatibility. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact@airbyte.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AirbyteCatalog,
    AirbyteCatalogFromJSON,
    AirbyteCatalogFromJSONTyped,
    AirbyteCatalogToJSON,
} from './AirbyteCatalog';
import {
    ConnectionSchedule,
    ConnectionScheduleFromJSON,
    ConnectionScheduleFromJSONTyped,
    ConnectionScheduleToJSON,
} from './ConnectionSchedule';
import {
    ConnectionStatus,
    ConnectionStatusFromJSON,
    ConnectionStatusFromJSONTyped,
    ConnectionStatusToJSON,
} from './ConnectionStatus';
import {
    NamespaceDefinitionType,
    NamespaceDefinitionTypeFromJSON,
    NamespaceDefinitionTypeFromJSONTyped,
    NamespaceDefinitionTypeToJSON,
} from './NamespaceDefinitionType';
import {
    ResourceRequirements,
    ResourceRequirementsFromJSON,
    ResourceRequirementsFromJSONTyped,
    ResourceRequirementsToJSON,
} from './ResourceRequirements';

/**
 * 
 * @export
 * @interface ConnectionUpdate
 */
export interface ConnectionUpdate {
    /**
     * 
     * @type {string}
     * @memberof ConnectionUpdate
     */
    connectionId: string;
    /**
     * 
     * @type {NamespaceDefinitionType}
     * @memberof ConnectionUpdate
     */
    namespaceDefinition?: NamespaceDefinitionType;
    /**
     * Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.
     * @type {string}
     * @memberof ConnectionUpdate
     */
    namespaceFormat?: string;
    /**
     * Name that will be set to this connection
     * @type {string}
     * @memberof ConnectionUpdate
     */
    name?: string;
    /**
     * Prefix that will be prepended to the name of each stream when it is written to the destination.
     * @type {string}
     * @memberof ConnectionUpdate
     */
    prefix?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConnectionUpdate
     */
    operationIds?: Array<string>;
    /**
     * 
     * @type {AirbyteCatalog}
     * @memberof ConnectionUpdate
     */
    syncCatalog: AirbyteCatalog;
    /**
     * 
     * @type {ConnectionSchedule}
     * @memberof ConnectionUpdate
     */
    schedule?: ConnectionSchedule | null;
    /**
     * 
     * @type {ConnectionStatus}
     * @memberof ConnectionUpdate
     */
    status: ConnectionStatus;
    /**
     * 
     * @type {ResourceRequirements}
     * @memberof ConnectionUpdate
     */
    resourceRequirements?: ResourceRequirements;
}

export function ConnectionUpdateFromJSON(json: any): ConnectionUpdate {
    return ConnectionUpdateFromJSONTyped(json, false);
}

export function ConnectionUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connectionId': json['connectionId'],
        'namespaceDefinition': !exists(json, 'namespaceDefinition') ? undefined : NamespaceDefinitionTypeFromJSON(json['namespaceDefinition']),
        'namespaceFormat': !exists(json, 'namespaceFormat') ? undefined : json['namespaceFormat'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'operationIds': !exists(json, 'operationIds') ? undefined : json['operationIds'],
        'syncCatalog': AirbyteCatalogFromJSON(json['syncCatalog']),
        'schedule': !exists(json, 'schedule') ? undefined : ConnectionScheduleFromJSON(json['schedule']),
        'status': ConnectionStatusFromJSON(json['status']),
        'resourceRequirements': !exists(json, 'resourceRequirements') ? undefined : ResourceRequirementsFromJSON(json['resourceRequirements']),
    };
}

export function ConnectionUpdateToJSON(value?: ConnectionUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'connectionId': value.connectionId,
        'namespaceDefinition': NamespaceDefinitionTypeToJSON(value.namespaceDefinition),
        'namespaceFormat': value.namespaceFormat,
        'name': value.name,
        'prefix': value.prefix,
        'operationIds': value.operationIds,
        'syncCatalog': AirbyteCatalogToJSON(value.syncCatalog),
        'schedule': ConnectionScheduleToJSON(value.schedule),
        'status': ConnectionStatusToJSON(value.status),
        'resourceRequirements': ResourceRequirementsToJSON(value.resourceRequirements),
    };
}

