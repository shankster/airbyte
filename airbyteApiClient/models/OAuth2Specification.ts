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
/**
 * An object containing any metadata needed to describe this connector's Oauth flow
 * @export
 * @interface OAuth2Specification
 */
export interface OAuth2Specification {
    /**
     * A list of strings representing a pointer to the root object which contains any oauth parameters in the ConnectorSpecification.
     * Examples:
     * if oauth parameters were contained inside the top level, rootObject=[] If they were nested inside another object {'credentials': {'app_id' etc...}, rootObject=['credentials'] If they were inside a oneOf {'switch': {oneOf: [{client_id...}, {non_oauth_param]}},  rootObject=['switch', 0] 
     * @type {Array<any>}
     * @memberof OAuth2Specification
     */
    rootObject: Array<any>;
    /**
     * Pointers to the fields in the rootObject needed to obtain the initial refresh/access tokens for the OAuth flow. Each inner array represents the path in the rootObject of the referenced field. For example. Assume the rootObject contains params 'app_secret', 'app_id' which are needed to get the initial refresh token. If they are not nested in the rootObject, then the array would look like this [['app_secret'], ['app_id']] If they are nested inside an object called 'auth_params' then this array would be [['auth_params', 'app_secret'], ['auth_params', 'app_id']]
     * @type {Array<Array<string>>}
     * @memberof OAuth2Specification
     */
    oauthFlowInitParameters: Array<Array<string>>;
    /**
     * Pointers to the fields in the rootObject which can be populated from successfully completing the oauth flow using the init parameters. This is typically a refresh/access token. Each inner array represents the path in the rootObject of the referenced field.
     * @type {Array<Array<string>>}
     * @memberof OAuth2Specification
     */
    oauthFlowOutputParameters: Array<Array<string>>;
}

export function OAuth2SpecificationFromJSON(json: any): OAuth2Specification {
    return OAuth2SpecificationFromJSONTyped(json, false);
}

export function OAuth2SpecificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuth2Specification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rootObject': json['rootObject'],
        'oauthFlowInitParameters': json['oauthFlowInitParameters'],
        'oauthFlowOutputParameters': json['oauthFlowOutputParameters'],
    };
}

export function OAuth2SpecificationToJSON(value?: OAuth2Specification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rootObject': value.rootObject,
        'oauthFlowInitParameters': value.oauthFlowInitParameters,
        'oauthFlowOutputParameters': value.oauthFlowOutputParameters,
    };
}

