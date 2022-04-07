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
    JobConfigType,
    JobConfigTypeFromJSON,
    JobConfigTypeFromJSONTyped,
    JobConfigTypeToJSON,
} from './JobConfigType';
import {
    JobStatus,
    JobStatusFromJSON,
    JobStatusFromJSONTyped,
    JobStatusToJSON,
} from './JobStatus';

/**
 * 
 * @export
 * @interface JobRead
 */
export interface JobRead {
    /**
     * 
     * @type {number}
     * @memberof JobRead
     */
    id: number;
    /**
     * 
     * @type {JobConfigType}
     * @memberof JobRead
     */
    configType: JobConfigType;
    /**
     * 
     * @type {string}
     * @memberof JobRead
     */
    configId: string;
    /**
     * 
     * @type {number}
     * @memberof JobRead
     */
    createdAt: number;
    /**
     * 
     * @type {number}
     * @memberof JobRead
     */
    updatedAt: number;
    /**
     * 
     * @type {JobStatus}
     * @memberof JobRead
     */
    status: JobStatus;
}

export function JobReadFromJSON(json: any): JobRead {
    return JobReadFromJSONTyped(json, false);
}

export function JobReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobRead {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'configType': JobConfigTypeFromJSON(json['configType']),
        'configId': json['configId'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
        'status': JobStatusFromJSON(json['status']),
    };
}

export function JobReadToJSON(value?: JobRead | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'configType': JobConfigTypeToJSON(value.configType),
        'configId': value.configId,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'status': JobStatusToJSON(value.status),
    };
}

