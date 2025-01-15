/**
 * (C) Copyright IBM Corp. 2024.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * IBM OpenAPI SDK Code Generator Version: 3.96.1-5136e54a-20241108-203028
 */

import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import {
  Authenticator,
  BaseService,
  UserOptions,
  getAuthenticatorFromEnvironment,
  validateParams,
} from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common.ts';

/**
 * The IBM&reg; watsonx&trade; Assistant service combines machine learning, natural language understanding, and an
 * integrated dialog editor to create conversation flows between your apps and your users.
 *
 * The Assistant v2 API provides runtime methods your client application can use to send user input to an assistant and
 * receive a response.
 *
 * You need a paid Plus plan or higher to use the watsonx Assistant v2 API.
 *
 * API Version: 2.0
 * See: https://cloud.ibm.com/docs/assistant
 */

class AssistantV2 extends BaseService {
  static DEFAULT_SERVICE_URL: string = 'https://api.us-south.assistant.watson.cloud.ibm.com';

  static DEFAULT_SERVICE_NAME: string = 'conversation';

  /** Release date of the API version you want to use. Specify dates in YYYY-MM-DD format. The current version is
   *  `2023-06-15`.
   */
  version: string;

  /**
   * Construct a AssistantV2 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} options.version - Release date of the API version you want to use. Specify dates in YYYY-MM-DD
   * format. The current version is `2023-06-15`.
   * @param {string} [options.serviceUrl] - The base URL for the service
   * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {string} [options.serviceName] - The name of the service to configure
   * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service. Defaults to environment if not set
   * @constructor
   * @returns {AssistantV2}
   */
  constructor(options: UserOptions) {
    options = options || {};

    const _requiredParams = ['version'];
    const _validationErrors = validateParams(options, _requiredParams, null);
    if (_validationErrors) {
      throw _validationErrors;
    }
    if (!options.serviceName) {
      options.serviceName = AssistantV2.DEFAULT_SERVICE_NAME;
    }
    // If the caller didn't supply an authenticator, construct one from external configuration.
    if (!options.authenticator) {
      options.authenticator = getAuthenticatorFromEnvironment(options.serviceName);
    }
    super(options);
    this.configureService(options.serviceName);
    if (options.serviceUrl) {
      this.setServiceUrl(options.serviceUrl);
    }
    this.version = options.version;
  }

  /*************************
   * conversationalSkillProviders
   ************************/

  /**
   * Create a conversational skill provider.
   *
   * Create a new conversational skill provider.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.providerId - The unique identifier of the provider.
   * @param {ProviderSpecification} params.specification - The specification of the provider.
   * @param {ProviderPrivate} params._private - Private information of the provider.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.ProviderResponse>>}
   */
  public createProvider(
    params: AssistantV2.CreateProviderParams
  ): Promise<AssistantV2.Response<AssistantV2.ProviderResponse>> {
    const _params = { ...params };
    const _requiredParams = ['providerId', 'specification', '_private'];
    const _validParams = ['providerId', 'specification', '_private', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'provider_id': _params.providerId,
      'specification': _params.specification,
      'private': _params._private,
    };

    const query = {
      'version': this.version,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'createProvider');

    const parameters = {
      options: {
        url: '/v2/providers',
        method: 'POST',
        body,
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List conversational skill providers.
   *
   * List the conversational skill providers associated with a Watson Assistant service instance.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.pageLimit] - The number of records to return in each page of results.
   * @param {boolean} [params.includeCount] - Whether to include information about the number of records that satisfy
   * the request, regardless of the page limit. If this parameter is `true`, the `pagination` object in the response
   * includes the `total` property.
   * @param {string} [params.sort] - The attribute by which returned conversational skill providers will be sorted. To
   * reverse the sort order, prefix the value with a minus sign (`-`).
   * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
   * @param {boolean} [params.includeAudit] - Whether to include the audit properties (`created` and `updated`
   * timestamps) in the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.ProviderCollection>>}
   */
  public listProviders(
    params?: AssistantV2.ListProvidersParams
  ): Promise<AssistantV2.Response<AssistantV2.ProviderCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['pageLimit', 'includeCount', 'sort', 'cursor', 'includeAudit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
      'page_limit': _params.pageLimit,
      'include_count': _params.includeCount,
      'sort': _params.sort,
      'cursor': _params.cursor,
      'include_audit': _params.includeAudit,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'listProviders');

    const parameters = {
      options: {
        url: '/v2/providers',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update a conversational skill provider.
   *
   * Update a new conversational skill provider.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.providerId - Unique identifier of the conversational skill provider.
   * @param {ProviderSpecification} params.specification - The specification of the provider.
   * @param {ProviderPrivate} params._private - Private information of the provider.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.ProviderResponse>>}
   */
  public updateProvider(
    params: AssistantV2.UpdateProviderParams
  ): Promise<AssistantV2.Response<AssistantV2.ProviderResponse>> {
    const _params = { ...params };
    const _requiredParams = ['providerId', 'specification', '_private'];
    const _validParams = ['providerId', 'specification', '_private', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'specification': _params.specification,
      'private': _params._private,
    };

    const query = {
      'version': this.version,
    };

    const path = {
      'provider_id': _params.providerId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'updateProvider');

    const parameters = {
      options: {
        url: '/v2/providers/{provider_id}',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * assistants
   ************************/

  /**
   * Create an assistant.
   *
   * Create a new assistant.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.language] - The language of the assistant.
   * @param {string} [params.name] - The name of the assistant. This string cannot contain carriage return, newline, or
   * tab characters.
   * @param {string} [params.description] - The description of the assistant. This string cannot contain carriage
   * return, newline, or tab characters.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.AssistantData>>}
   */
  public createAssistant(
    params?: AssistantV2.CreateAssistantParams
  ): Promise<AssistantV2.Response<AssistantV2.AssistantData>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['language', 'name', 'description', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'language': _params.language,
      'name': _params.name,
      'description': _params.description,
    };

    const query = {
      'version': this.version,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'createAssistant');

    const parameters = {
      options: {
        url: '/v2/assistants',
        method: 'POST',
        body,
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List assistants.
   *
   * List the assistants associated with a watsonx Assistant service instance.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.pageLimit] - The number of records to return in each page of results.
   * @param {boolean} [params.includeCount] - Whether to include information about the number of records that satisfy
   * the request, regardless of the page limit. If this parameter is `true`, the `pagination` object in the response
   * includes the `total` property.
   * @param {string} [params.sort] - The attribute by which returned assistants will be sorted. To reverse the sort
   * order, prefix the value with a minus sign (`-`).
   * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
   * @param {boolean} [params.includeAudit] - Whether to include the audit properties (`created` and `updated`
   * timestamps) in the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.AssistantCollection>>}
   */
  public listAssistants(
    params?: AssistantV2.ListAssistantsParams
  ): Promise<AssistantV2.Response<AssistantV2.AssistantCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['pageLimit', 'includeCount', 'sort', 'cursor', 'includeAudit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
      'page_limit': _params.pageLimit,
      'include_count': _params.includeCount,
      'sort': _params.sort,
      'cursor': _params.cursor,
      'include_audit': _params.includeAudit,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'listAssistants');

    const parameters = {
      options: {
        url: '/v2/assistants',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete assistant.
   *
   * Delete an assistant.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.EmptyObject>>}
   */
  public deleteAssistant(
    params: AssistantV2.DeleteAssistantParams
  ): Promise<AssistantV2.Response<AssistantV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId'];
    const _validParams = ['assistantId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
    };

    const path = {
      'assistant_id': _params.assistantId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteAssistant');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * sessions
   ************************/

  /**
   * Create a session.
   *
   * Create a new session. A session is used to send user input to a skill and receive responses. It also maintains the
   * state of the conversation. A session persists until it is deleted, or until it times out because of inactivity.
   * (For more information, see the
   * [documentation](https://cloud.ibm.com/docs/assistant?topic=assistant-assistant-settings).).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {RequestAnalytics} [params.analytics] - An optional object containing analytics data. Currently, this data
   * is used only for events sent to the Segment extension.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.SessionResponse>>}
   */
  public createSession(
    params: AssistantV2.CreateSessionParams
  ): Promise<AssistantV2.Response<AssistantV2.SessionResponse>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId'];
    const _validParams = ['assistantId', 'analytics', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'analytics': _params.analytics,
    };

    const query = {
      'version': this.version,
    };

    const path = {
      'assistant_id': _params.assistantId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'createSession');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/sessions',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete session.
   *
   * Deletes a session explicitly before it times out. (For more information about the session inactivity timeout, see
   * the [documentation](https://cloud.ibm.com/docs/assistant?topic=assistant-assistant-settings)).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.sessionId - Unique identifier of the session.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.EmptyObject>>}
   */
  public deleteSession(
    params: AssistantV2.DeleteSessionParams
  ): Promise<AssistantV2.Response<AssistantV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'sessionId'];
    const _validParams = ['assistantId', 'sessionId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'session_id': _params.sessionId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteSession');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/sessions/{session_id}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * message
   ************************/

  /**
   * Send user input to assistant (stateful).
   *
   * Send user input to an assistant and receive a response, with conversation state (including context data) stored by
   * watsonx Assistant for the duration of the session.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.environmentId - Unique identifier of the environment. To find the environment ID in the
   * watsonx Assistant user interface, open the environment settings and click **API Details**. **Note:** Currently, the
   * API does not support creating environments.
   * @param {string} params.sessionId - Unique identifier of the session.
   * @param {MessageInput} [params.input] - An input object that includes the input text.
   * @param {MessageContext} [params.context] - Context data for the conversation. You can use this property to set or
   * modify context variables, which can also be accessed by dialog nodes. The context is stored by the assistant on a
   * per-session basis.
   *
   * **Note:** The total size of the context data stored for a stateful session cannot exceed 100KB.
   * @param {string} [params.userId] - A string value that identifies the user who is interacting with the assistant.
   * The client must provide a unique identifier for each individual end user who accesses the application. For
   * user-based plans, this user ID is used to identify unique users for billing purposes. This string cannot contain
   * carriage return, newline, or tab characters. If no value is specified in the input, **user_id** is automatically
   * set to the value of **context.global.session_id**.
   *
   * **Note:** This property is the same as the **user_id** property in the global system context. If **user_id** is
   * specified in both locations, the value specified at the root is used.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.StatefulMessageResponse>>}
   */
  public message(
    params: AssistantV2.MessageParams
  ): Promise<AssistantV2.Response<AssistantV2.StatefulMessageResponse>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'environmentId', 'sessionId'];
    const _validParams = ['assistantId', 'environmentId', 'sessionId', 'input', 'context', 'userId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'input': _params.input,
      'context': _params.context,
      'user_id': _params.userId,
    };

    const query = {
      'version': this.version,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'environment_id': _params.environmentId,
      'session_id': _params.sessionId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'message');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/sessions/{session_id}/message',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Send user input to assistant (stateless).
   *
   * Send user input to an assistant and receive a response, with conversation state (including context data) managed by
   * your application.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.environmentId - Unique identifier of the environment. To find the environment ID in the
   * watsonx Assistant user interface, open the environment settings and click **API Details**. **Note:** Currently, the
   * API does not support creating environments.
   * @param {StatelessMessageInput} [params.input] - An input object that includes the input text.
   * @param {StatelessMessageContext} [params.context] - Context data for the conversation. You can use this property to
   * set or modify context variables, which can also be accessed by dialog nodes. The context is not stored by the
   * assistant. To maintain session state, include the context from the previous response.
   *
   * **Note:** The total size of the context data for a stateless session cannot exceed 250KB.
   * @param {string} [params.userId] - A string value that identifies the user who is interacting with the assistant.
   * The client must provide a unique identifier for each individual end user who accesses the application. For
   * user-based plans, this user ID is used to identify unique users for billing purposes. This string cannot contain
   * carriage return, newline, or tab characters. If no value is specified in the input, **user_id** is automatically
   * set to the value of **context.global.session_id**.
   *
   * **Note:** This property is the same as the **user_id** property in the global system context. If **user_id** is
   * specified in both locations in a message request, the value specified at the root is used.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.StatelessMessageResponse>>}
   */
  public messageStateless(
    params: AssistantV2.MessageStatelessParams
  ): Promise<AssistantV2.Response<AssistantV2.StatelessMessageResponse>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'environmentId'];
    const _validParams = ['assistantId', 'environmentId', 'input', 'context', 'userId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'input': _params.input,
      'context': _params.context,
      'user_id': _params.userId,
    };

    const query = {
      'version': this.version,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'environment_id': _params.environmentId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'messageStateless');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/message',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * messageStream
   ************************/

  /**
   * Send user input to assistant (stateful).
   *
   * Send user input to an assistant and receive a streamed response, with conversation state (including context data)
   * stored by watsonx Assistant for the duration of the session.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.environmentId - Unique identifier of the environment. To find the environment ID in the
   * watsonx Assistant user interface, open the environment settings and click **API Details**. **Note:** Currently, the
   * API does not support creating environments.
   * @param {string} params.sessionId - Unique identifier of the session.
   * @param {MessageInput} [params.input] - An input object that includes the input text.
   * @param {MessageContext} [params.context] - Context data for the conversation. You can use this property to set or
   * modify context variables, which can also be accessed by dialog nodes. The context is stored by the assistant on a
   * per-session basis.
   *
   * **Note:** The total size of the context data stored for a stateful session cannot exceed 100KB.
   * @param {string} [params.userId] - A string value that identifies the user who is interacting with the assistant.
   * The client must provide a unique identifier for each individual end user who accesses the application. For
   * user-based plans, this user ID is used to identify unique users for billing purposes. This string cannot contain
   * carriage return, newline, or tab characters. If no value is specified in the input, **user_id** is automatically
   * set to the value of **context.global.session_id**.
   *
   * **Note:** This property is the same as the **user_id** property in the global system context. If **user_id** is
   * specified in both locations, the value specified at the root is used.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<NodeJS.ReadableStream>>}
   */
  public messageStream(
    params: AssistantV2.MessageStreamParams
  ): Promise<AssistantV2.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'environmentId', 'sessionId'];
    const _validParams = ['assistantId', 'environmentId', 'sessionId', 'input', 'context', 'userId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'input': _params.input,
      'context': _params.context,
      'user_id': _params.userId,
    };

    const query = {
      'version': this.version,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'environment_id': _params.environmentId,
      'session_id': _params.sessionId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'messageStream');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/environments/{environment_id}/sessions/{session_id}/message_stream',
        method: 'POST',
        body,
        qs: query,
        path,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'text/event-stream',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Send user input to assistant (stateless).
   *
   * Send user input to an assistant and receive a response, with conversation state (including context data) managed by
   * your application.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.environmentId - Unique identifier of the environment. To find the environment ID in the
   * watsonx Assistant user interface, open the environment settings and click **API Details**. **Note:** Currently, the
   * API does not support creating environments.
   * @param {MessageInput} [params.input] - An input object that includes the input text.
   * @param {MessageContext} [params.context] - Context data for the conversation. You can use this property to set or
   * modify context variables, which can also be accessed by dialog nodes. The context is stored by the assistant on a
   * per-session basis.
   *
   * **Note:** The total size of the context data stored for a stateful session cannot exceed 100KB.
   * @param {string} [params.userId] - A string value that identifies the user who is interacting with the assistant.
   * The client must provide a unique identifier for each individual end user who accesses the application. For
   * user-based plans, this user ID is used to identify unique users for billing purposes. This string cannot contain
   * carriage return, newline, or tab characters. If no value is specified in the input, **user_id** is automatically
   * set to the value of **context.global.session_id**.
   *
   * **Note:** This property is the same as the **user_id** property in the global system context. If **user_id** is
   * specified in both locations, the value specified at the root is used.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<NodeJS.ReadableStream>>}
   */
  public messageStreamStateless(
    params: AssistantV2.MessageStreamStatelessParams
  ): Promise<AssistantV2.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'environmentId'];
    const _validParams = ['assistantId', 'environmentId', 'input', 'context', 'userId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'input': _params.input,
      'context': _params.context,
      'user_id': _params.userId,
    };

    const query = {
      'version': this.version,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'environment_id': _params.environmentId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'messageStreamStateless');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/environments/{environment_id}/message_stream',
        method: 'POST',
        body,
        qs: query,
        path,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'text/event-stream',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * bulkClassify
   ************************/

  /**
   * Identify intents and entities in multiple user utterances.
   *
   * Send multiple user inputs to a dialog skill in a single request and receive information about the intents and
   * entities recognized in each input. This method is useful for testing and comparing the performance of different
   * skills or skill versions.
   *
   * This method is available only with Enterprise with Data Isolation plans.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.skillId - Unique identifier of the skill. To find the skill ID in the watsonx Assistant user
   * interface, open the skill settings and click **API Details**.
   * @param {BulkClassifyUtterance[]} params.input - An array of input utterances to classify.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.BulkClassifyResponse>>}
   */
  public bulkClassify(
    params: AssistantV2.BulkClassifyParams
  ): Promise<AssistantV2.Response<AssistantV2.BulkClassifyResponse>> {
    const _params = { ...params };
    const _requiredParams = ['skillId', 'input'];
    const _validParams = ['skillId', 'input', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'input': _params.input,
    };

    const query = {
      'version': this.version,
    };

    const path = {
      'skill_id': _params.skillId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'bulkClassify');

    const parameters = {
      options: {
        url: '/v2/skills/{skill_id}/workspace/bulk_classify',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * logs
   ************************/

  /**
   * List log events for an assistant.
   *
   * List the events from the log of an assistant.
   *
   * This method requires Manager access.
   *
   * **Note:** If you use the **cursor** parameter to retrieve results one page at a time, subsequent requests must be
   * no more than 5 minutes apart. Any returned value for the **cursor** parameter becomes invalid after 5 minutes. For
   * more information about using pagination, see [Pagination](#pagination).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} [params.sort] - How to sort the returned log events. You can sort by **request_timestamp**. To
   * reverse the sort order, prefix the parameter value with a minus sign (`-`).
   * @param {string} [params.filter] - A cacheable parameter that limits the results to those matching the specified
   * filter. For more information, see the
   * [documentation](https://cloud.ibm.com/docs/assistant?topic=assistant-filter-reference#filter-reference).
   * @param {number} [params.pageLimit] - The number of records to return in each page of results.
   *
   * **Note:** If the API is not returning your data, try lowering the page_limit value.
   * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.LogCollection>>}
   */
  public listLogs(
    params: AssistantV2.ListLogsParams
  ): Promise<AssistantV2.Response<AssistantV2.LogCollection>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId'];
    const _validParams = ['assistantId', 'sort', 'filter', 'pageLimit', 'cursor', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
      'sort': _params.sort,
      'filter': _params.filter,
      'page_limit': _params.pageLimit,
      'cursor': _params.cursor,
    };

    const path = {
      'assistant_id': _params.assistantId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'listLogs');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/logs',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * userData
   ************************/

  /**
   * Delete labeled data.
   *
   * Deletes all data associated with a specified customer ID. The method has no effect if no data is associated with
   * the customer ID.
   *
   * You associate a customer ID with data by passing the `X-Watson-Metadata` header with a request that passes data.
   * For more information about personal data and customer IDs, see [Information
   * security](https://cloud.ibm.com/docs/assistant?topic=assistant-information-security#information-security).
   *
   * **Note:** This operation is intended only for deleting data associated with a single specific customer, not for
   * deleting data associated with multiple customers or for any other purpose. For more information, see [Labeling and
   * deleting data in watsonx
   * Assistant](https://cloud.ibm.com/docs/assistant?topic=assistant-information-security#information-security-gdpr-wa).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.customerId - The customer ID for which all data is to be deleted.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.EmptyObject>>}
   */
  public deleteUserData(
    params: AssistantV2.DeleteUserDataParams
  ): Promise<AssistantV2.Response<AssistantV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['customerId'];
    const _validParams = ['customerId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
      'customer_id': _params.customerId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteUserData');

    const parameters = {
      options: {
        url: '/v2/user_data',
        method: 'DELETE',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * environments
   ************************/

  /**
   * List environments.
   *
   * List the environments associated with an assistant.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {number} [params.pageLimit] - The number of records to return in each page of results.
   * @param {boolean} [params.includeCount] - Whether to include information about the number of records that satisfy
   * the request, regardless of the page limit. If this parameter is `true`, the `pagination` object in the response
   * includes the `total` property.
   * @param {string} [params.sort] - The attribute by which returned environments will be sorted. To reverse the sort
   * order, prefix the value with a minus sign (`-`).
   * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
   * @param {boolean} [params.includeAudit] - Whether to include the audit properties (`created` and `updated`
   * timestamps) in the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.EnvironmentCollection>>}
   */
  public listEnvironments(
    params: AssistantV2.ListEnvironmentsParams
  ): Promise<AssistantV2.Response<AssistantV2.EnvironmentCollection>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId'];
    const _validParams = ['assistantId', 'pageLimit', 'includeCount', 'sort', 'cursor', 'includeAudit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
      'page_limit': _params.pageLimit,
      'include_count': _params.includeCount,
      'sort': _params.sort,
      'cursor': _params.cursor,
      'include_audit': _params.includeAudit,
    };

    const path = {
      'assistant_id': _params.assistantId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'listEnvironments');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/environments',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get environment.
   *
   * Get information about an environment. For more information about environments, see
   * [Environments](https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-publish-overview#environments).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.environmentId - Unique identifier of the environment. To find the environment ID in the
   * watsonx Assistant user interface, open the environment settings and click **API Details**. **Note:** Currently, the
   * API does not support creating environments.
   * @param {boolean} [params.includeAudit] - Whether to include the audit properties (`created` and `updated`
   * timestamps) in the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.Environment>>}
   */
  public getEnvironment(
    params: AssistantV2.GetEnvironmentParams
  ): Promise<AssistantV2.Response<AssistantV2.Environment>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'environmentId'];
    const _validParams = ['assistantId', 'environmentId', 'includeAudit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
      'include_audit': _params.includeAudit,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'environment_id': _params.environmentId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'getEnvironment');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/environments/{environment_id}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update environment.
   *
   * Update an environment with new or modified data. For more information about environments, see
   * [Environments](https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-publish-overview#environments).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.environmentId - Unique identifier of the environment. To find the environment ID in the
   * watsonx Assistant user interface, open the environment settings and click **API Details**. **Note:** Currently, the
   * API does not support creating environments.
   * @param {string} [params.name] - The name of the environment.
   * @param {string} [params.description] - The description of the environment.
   * @param {UpdateEnvironmentOrchestration} [params.orchestration] - The search skill orchestration settings for the
   * environment.
   * @param {number} [params.sessionTimeout] - The session inactivity timeout setting for the environment (in seconds).
   * @param {EnvironmentSkill[]} [params.skillReferences] - An array of objects identifying the skills (such as action
   * and dialog) that exist in the environment.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.Environment>>}
   */
  public updateEnvironment(
    params: AssistantV2.UpdateEnvironmentParams
  ): Promise<AssistantV2.Response<AssistantV2.Environment>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'environmentId'];
    const _validParams = ['assistantId', 'environmentId', 'name', 'description', 'orchestration', 'sessionTimeout', 'skillReferences', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'name': _params.name,
      'description': _params.description,
      'orchestration': _params.orchestration,
      'session_timeout': _params.sessionTimeout,
      'skill_references': _params.skillReferences,
    };

    const query = {
      'version': this.version,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'environment_id': _params.environmentId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'updateEnvironment');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/environments/{environment_id}',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * releases
   ************************/

  /**
   * Create release.
   *
   * Create a new release using the current content of the dialog and action skills in the draft environment. (In the
   * watsonx Assistant user interface, a release is called a *version*.).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} [params.description] - The description of the release.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.Release>>}
   */
  public createRelease(
    params: AssistantV2.CreateReleaseParams
  ): Promise<AssistantV2.Response<AssistantV2.Release>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId'];
    const _validParams = ['assistantId', 'description', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'description': _params.description,
    };

    const query = {
      'version': this.version,
    };

    const path = {
      'assistant_id': _params.assistantId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'createRelease');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/releases',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List releases.
   *
   * List the releases associated with an assistant. (In the watsonx Assistant user interface, a release is called a
   * *version*.).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {number} [params.pageLimit] - The number of records to return in each page of results.
   * @param {boolean} [params.includeCount] - Whether to include information about the number of records that satisfy
   * the request, regardless of the page limit. If this parameter is `true`, the `pagination` object in the response
   * includes the `total` property.
   * @param {string} [params.sort] - The attribute by which returned workspaces will be sorted. To reverse the sort
   * order, prefix the value with a minus sign (`-`).
   * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
   * @param {boolean} [params.includeAudit] - Whether to include the audit properties (`created` and `updated`
   * timestamps) in the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.ReleaseCollection>>}
   */
  public listReleases(
    params: AssistantV2.ListReleasesParams
  ): Promise<AssistantV2.Response<AssistantV2.ReleaseCollection>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId'];
    const _validParams = ['assistantId', 'pageLimit', 'includeCount', 'sort', 'cursor', 'includeAudit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
      'page_limit': _params.pageLimit,
      'include_count': _params.includeCount,
      'sort': _params.sort,
      'cursor': _params.cursor,
      'include_audit': _params.includeAudit,
    };

    const path = {
      'assistant_id': _params.assistantId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'listReleases');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/releases',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get release.
   *
   * Get information about a release.
   *
   * Release data is not available until publishing of the release completes. If publishing is still in progress, you
   * can continue to poll by calling the same request again and checking the value of the **status** property. When
   * processing has completed, the request returns the release data.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.release - Unique identifier of the release.
   * @param {boolean} [params.includeAudit] - Whether to include the audit properties (`created` and `updated`
   * timestamps) in the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.Release>>}
   */
  public getRelease(
    params: AssistantV2.GetReleaseParams
  ): Promise<AssistantV2.Response<AssistantV2.Release>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'release'];
    const _validParams = ['assistantId', 'release', 'includeAudit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
      'include_audit': _params.includeAudit,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'release': _params.release,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'getRelease');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/releases/{release}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete release.
   *
   * Delete a release. (In the watsonx Assistant user interface, a release is called a *version*.).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.release - Unique identifier of the release.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.EmptyObject>>}
   */
  public deleteRelease(
    params: AssistantV2.DeleteReleaseParams
  ): Promise<AssistantV2.Response<AssistantV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'release'];
    const _validParams = ['assistantId', 'release', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'release': _params.release,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteRelease');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/releases/{release}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Deploy release.
   *
   * Update the environment with the content of the release. All snapshots saved as part of the release become active in
   * the environment.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.release - Unique identifier of the release.
   * @param {string} params.environmentId - The environment ID of the environment where the release is to be deployed.
   * @param {boolean} [params.includeAudit] - Whether to include the audit properties (`created` and `updated`
   * timestamps) in the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.Environment>>}
   */
  public deployRelease(
    params: AssistantV2.DeployReleaseParams
  ): Promise<AssistantV2.Response<AssistantV2.Environment>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'release', 'environmentId'];
    const _validParams = ['assistantId', 'release', 'environmentId', 'includeAudit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'environment_id': _params.environmentId,
    };

    const query = {
      'version': this.version,
      'include_audit': _params.includeAudit,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'release': _params.release,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'deployRelease');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/releases/{release}/deploy',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create release export.
   *
   * Initiate an asynchronous process which will create a downloadable Zip file artifact (/package) for an assistant
   * release. This artifact will contain Action and/or Dialog skills that are part of the release. The Dialog skill will
   * only be included in the event that coexistence is enabled on the assistant. The expected workflow with the use of
   * Release Export endpoint is to first initiate the creation of the artifact with the POST endpoint and then poll the
   * GET endpoint to retrieve the artifact. Once the artifact has been created, it will last for the duration (/scope)
   * of the release.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.release - Unique identifier of the release.
   * @param {boolean} [params.includeAudit] - Whether to include the audit properties (`created` and `updated`
   * timestamps) in the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.CreateReleaseExportWithStatusErrors>>}
   */
  public createReleaseExport(
    params: AssistantV2.CreateReleaseExportParams
  ): Promise<AssistantV2.Response<AssistantV2.CreateReleaseExportWithStatusErrors>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'release'];
    const _validParams = ['assistantId', 'release', 'includeAudit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
      'include_audit': _params.includeAudit,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'release': _params.release,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'createReleaseExport');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/releases/{release}/export',
        method: 'POST',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get release export.
   *
   * A dual function endpoint to either retrieve the Zip file artifact that is associated with an assistant release or,
   * retrieve the status of the artifact's creation. It is assumed that the artifact creation was already initiated
   * prior to calling this endpoint. In the event that the artifact is not yet created and ready for download, this
   * endpoint can be used to poll the system until the creation is completed or has failed. On the other hand, if the
   * artifact is created, this endpoint will return the Zip file artifact as an octet stream. Once the artifact has been
   * created, it will last for the duration (/scope) of the release. <br /><br /> When you will have downloaded the Zip
   * file artifact, you have one of three ways to import it into an assistant's draft environment. These are as follows.
   * <br /><ol><li>Import the zip package in Tooling via <var>"Assistant Settings" -> "Download/Upload files" ->
   * "Upload" -> "Assistant only"</var>.</li><li>Import the zip package via "Create release import" endpoint using the
   * APIs.</li><li>Extract the contents of the Zip file artifact and individually import the skill JSONs via skill
   * update endpoints.</li></ol>.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.release - Unique identifier of the release.
   * @param {boolean} [params.includeAudit] - Whether to include the audit properties (`created` and `updated`
   * timestamps) in the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.CreateReleaseExportWithStatusErrors>>}
   */
  public downloadReleaseExport(
    params: AssistantV2.DownloadReleaseExportParams
  ): Promise<AssistantV2.Response<AssistantV2.CreateReleaseExportWithStatusErrors>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'release'];
    const _validParams = ['assistantId', 'release', 'includeAudit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
      'include_audit': _params.includeAudit,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'release': _params.release,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'downloadReleaseExport');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/releases/{release}/export',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get release export as stream.
   *
   * A dual function endpoint to either retrieve the Zip file artifact that is associated with an assistant release or,
   * retrieve the status of the artifact's creation. It is assumed that the artifact creation was already initiated
   * prior to calling this endpoint. In the event that the artifact is not yet created and ready for download, this
   * endpoint can be used to poll the system until the creation is completed or has failed. On the other hand, if the
   * artifact is created, this endpoint will return the Zip file artifact as an octet stream. Once the artifact has been
   * created, it will last for the duration (/scope) of the release. <br /><br /> When you will have downloaded the Zip
   * file artifact, you have one of three ways to import it into an assistant's draft environment. These are as follows.
   * <br /><ol><li>Import the zip package in Tooling via <var>"Assistant Settings" -> "Download/Upload files" ->
   * "Upload" -> "Assistant only"</var>.</li><li>Import the zip package via "Create release import" endpoint using the
   * APIs.</li><li>Extract the contents of the Zip file artifact and individually import the skill JSONs via skill
   * update endpoints.</li></ol>.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.release - Unique identifier of the release.
   * @param {boolean} [params.includeAudit] - Whether to include the audit properties (`created` and `updated`
   * timestamps) in the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<NodeJS.ReadableStream>>}
   */
  public downloadReleaseExportAsStream(
    params: AssistantV2.DownloadReleaseExportAsStreamParams
  ): Promise<AssistantV2.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'release'];
    const _validParams = ['assistantId', 'release', 'includeAudit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
      'include_audit': _params.includeAudit,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'release': _params.release,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'downloadReleaseExportAsStream');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/releases/{release}/export',
        method: 'GET',
        qs: query,
        path,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/octet-stream',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create release import.
   *
   * Import a previously exported assistant release Zip file artifact (/package) into an assistant. This endpoint
   * creates (/initiates) an asynchronous task (/job) in the background which will import the artifact contents into the
   * draft environment of the assistant on which this endpoint is called. Specifically, the asynchronous operation will
   * override the action and/or dialog skills in the assistant. It will be worth noting that when the artifact that is
   * provided to this endpoint is from an assistant release which has coexistence enabled (i.e., it has both action and
   * dialog skills), the import process will automatically enable coexistence, if not already enabled, on the assistant
   * into which said artifact is being uploaded to. On the other hand, if the artifact package being imported only has
   * action skill in it, the import asynchronous process will only override the draft environment's action skill,
   * regardless of whether coexistence is enabled on the assistant into which the package is being imported. Lastly, the
   * system will only run one asynchronous import at a time on an assistant. As such, consecutive imports will override
   * previous import's updates to the skills in the draft environment. Once created, you may poll the completion of the
   * import via the "Get release import Status" endpoint.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {NodeJS.ReadableStream | Buffer} params.body - Request body is an Octet-stream of the artifact Zip file that
   * is being imported.
   * @param {boolean} [params.includeAudit] - Whether to include the audit properties (`created` and `updated`
   * timestamps) in the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.CreateAssistantReleaseImportResponse>>}
   */
  public createReleaseImport(
    params: AssistantV2.CreateReleaseImportParams
  ): Promise<AssistantV2.Response<AssistantV2.CreateAssistantReleaseImportResponse>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'body'];
    const _validParams = ['assistantId', 'body', 'includeAudit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = _params.body;
    const query = {
      'version': this.version,
      'include_audit': _params.includeAudit,
    };

    const path = {
      'assistant_id': _params.assistantId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'createReleaseImport');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/import',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/octet-stream',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get release import Status.
   *
   * Monitor the status of an assistant release import. You may poll this endpoint until the status of the import has
   * either succeeded or failed.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {boolean} [params.includeAudit] - Whether to include the audit properties (`created` and `updated`
   * timestamps) in the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.MonitorAssistantReleaseImportArtifactResponse>>}
   */
  public getReleaseImportStatus(
    params: AssistantV2.GetReleaseImportStatusParams
  ): Promise<AssistantV2.Response<AssistantV2.MonitorAssistantReleaseImportArtifactResponse>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId'];
    const _validParams = ['assistantId', 'includeAudit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
      'include_audit': _params.includeAudit,
    };

    const path = {
      'assistant_id': _params.assistantId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'getReleaseImportStatus');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/import',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * skills
   ************************/

  /**
   * Get skill.
   *
   * Get information about a skill.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.skillId - Unique identifier of the skill. To find the skill ID in the watsonx Assistant user
   * interface, open the skill settings and click **API Details**.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.Skill>>}
   */
  public getSkill(
    params: AssistantV2.GetSkillParams
  ): Promise<AssistantV2.Response<AssistantV2.Skill>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'skillId'];
    const _validParams = ['assistantId', 'skillId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'skill_id': _params.skillId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'getSkill');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/skills/{skill_id}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update skill.
   *
   * Update a skill with new or modified data.
   *
   *   **Note:** The update is performed asynchronously; you can see the status of the update by calling the **Get
   * skill** method and checking the value of the **status** property.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {string} params.skillId - Unique identifier of the skill. To find the skill ID in the watsonx Assistant user
   * interface, open the skill settings and click **API Details**.
   * @param {string} [params.name] - The name of the skill. This string cannot contain carriage return, newline, or tab
   * characters.
   * @param {string} [params.description] - The description of the skill. This string cannot contain carriage return,
   * newline, or tab characters.
   * @param {JsonObject} [params.workspace] - An object containing the conversational content of an action or dialog
   * skill.
   * @param {JsonObject} [params.dialogSettings] - For internal use only.
   * @param {SearchSettings} [params.searchSettings] - An object describing the search skill configuration.
   *
   * **Note:** Search settings are not supported in **Import skills** requests, and are not included in **Export
   * skills** responses.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.Skill>>}
   */
  public updateSkill(
    params: AssistantV2.UpdateSkillParams
  ): Promise<AssistantV2.Response<AssistantV2.Skill>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'skillId'];
    const _validParams = ['assistantId', 'skillId', 'name', 'description', 'workspace', 'dialogSettings', 'searchSettings', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'name': _params.name,
      'description': _params.description,
      'workspace': _params.workspace,
      'dialog_settings': _params.dialogSettings,
      'search_settings': _params.searchSettings,
    };

    const query = {
      'version': this.version,
    };

    const path = {
      'assistant_id': _params.assistantId,
      'skill_id': _params.skillId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'updateSkill');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/skills/{skill_id}',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Export skills.
   *
   * Asynchronously export the action skill and dialog skill (if enabled) for the assistant. Use this method to save all
   * skill data so that you can import it to a different assistant using the **Import skills** method.
   *
   *  A successful call to this method only initiates an asynchronous export. The exported JSON data is not available
   * until processing completes.
   *
   *  After the initial request is submitted, you can poll the status of the operation by calling the same request again
   * and checking the value of the **status** property. If an error occurs (indicated by a **status** value of
   * `Failed`), the `status_description` property provides more information about the error, and the `status_errors`
   * property contains an array of error messages that caused the failure.
   *
   *  When processing has completed, the request returns the exported JSON data. Remember that the usual rate limits
   * apply.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {boolean} [params.includeAudit] - Whether to include the audit properties (`created` and `updated`
   * timestamps) in the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.SkillsExport>>}
   */
  public exportSkills(
    params: AssistantV2.ExportSkillsParams
  ): Promise<AssistantV2.Response<AssistantV2.SkillsExport>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId'];
    const _validParams = ['assistantId', 'includeAudit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
      'include_audit': _params.includeAudit,
    };

    const path = {
      'assistant_id': _params.assistantId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'exportSkills');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/skills_export',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Import skills.
   *
   * Asynchronously import skills into an existing assistant from a previously exported file.
   *
   *  The request body for this method should contain the response data that was received from a previous call to the
   * **Export skills** method, without modification.
   *
   *  A successful call to this method initiates an asynchronous import. The updated skills belonging to the assistant
   * are not available until processing completes. To check the status of the asynchronous import operation, use the
   * **Get status of skills import** method.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {SkillImport[]} params.assistantSkills - An array of objects describing the skills for the assistant.
   * Included in responses only if **status**=`Available`.
   * @param {AssistantState} params.assistantState - Status information about the skills for the assistant. Included in
   * responses only if **status**=`Available`.
   * @param {boolean} [params.includeAudit] - Whether to include the audit properties (`created` and `updated`
   * timestamps) in the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.SkillsAsyncRequestStatus>>}
   */
  public importSkills(
    params: AssistantV2.ImportSkillsParams
  ): Promise<AssistantV2.Response<AssistantV2.SkillsAsyncRequestStatus>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId', 'assistantSkills', 'assistantState'];
    const _validParams = ['assistantId', 'assistantSkills', 'assistantState', 'includeAudit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'assistant_skills': _params.assistantSkills,
      'assistant_state': _params.assistantState,
    };

    const query = {
      'version': this.version,
      'include_audit': _params.includeAudit,
    };

    const path = {
      'assistant_id': _params.assistantId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'importSkills');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/skills_import',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get status of skills import.
   *
   * Retrieve the status of an asynchronous import operation previously initiated by using the **Import skills** method.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.assistantId - The assistant ID or the environment ID of the environment where the assistant
   * is deployed, depending on the type of request:
   *  - For message, session, and log requests, specify the environment ID of the environment where the assistant is
   * deployed.
   *  - For all other requests, specify the assistant ID of the assistant.
   *
   *  To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
   * and scroll to the **Environments** section.
   *
   * **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
   * assistant ID in the user interface, open the assistant settings and click API Details.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<AssistantV2.Response<AssistantV2.SkillsAsyncRequestStatus>>}
   */
  public importSkillsStatus(
    params: AssistantV2.ImportSkillsStatusParams
  ): Promise<AssistantV2.Response<AssistantV2.SkillsAsyncRequestStatus>> {
    const _params = { ...params };
    const _requiredParams = ['assistantId'];
    const _validParams = ['assistantId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'version': this.version,
    };

    const path = {
      'assistant_id': _params.assistantId,
    };

    const sdkHeaders = getSdkHeaders(AssistantV2.DEFAULT_SERVICE_NAME, 'v2', 'importSkillsStatus');

    const parameters = {
      options: {
        url: '/v2/assistants/{assistant_id}/skills_import/status',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
}

/*************************
 * interfaces
 ************************/

namespace AssistantV2 {
  /** Options for the `AssistantV2` constructor. */
  export interface Options extends UserOptions {
    /** Release date of the API version you want to use. Specify dates in YYYY-MM-DD format. The current version is
     *  `2023-06-15`.
     */
    version: string;
  }

  /** An operation response. */
  export interface Response<T = any> {
    result: T;
    status: number;
    statusText: string;
    headers: IncomingHttpHeaders;
  }

  /** The callback for a service request. */
  export type Callback<T> = (error: any, response?: Response<T>) => void;

  /** The body of a service request that returns no response data. */
  export interface EmptyObject {}

  /** A standard JS object, defined to avoid the limitations of `Object` and `object` */
  export interface JsonObject {
    [key: string]: any;
  }

  /*************************
   * request interfaces
   ************************/

  /** Parameters for the `createProvider` operation. */
  export interface CreateProviderParams {
    /** The unique identifier of the provider. */
    providerId: string;
    /** The specification of the provider. */
    specification: ProviderSpecification;
    /** Private information of the provider. */
    _private: ProviderPrivate;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listProviders` operation. */
  export interface ListProvidersParams {
    /** The number of records to return in each page of results. */
    pageLimit?: number;
    /** Whether to include information about the number of records that satisfy the request, regardless of the page
     *  limit. If this parameter is `true`, the `pagination` object in the response includes the `total` property.
     */
    includeCount?: boolean;
    /** The attribute by which returned conversational skill providers will be sorted. To reverse the sort order,
     *  prefix the value with a minus sign (`-`).
     */
    sort?: ListProvidersConstants.Sort | string;
    /** A token identifying the page of results to retrieve. */
    cursor?: string;
    /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
    includeAudit?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `listProviders` operation. */
  export namespace ListProvidersConstants {
    /** The attribute by which returned conversational skill providers will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). */
    export enum Sort {
      NAME = 'name',
      UPDATED = 'updated',
    }
  }

  /** Parameters for the `updateProvider` operation. */
  export interface UpdateProviderParams {
    /** Unique identifier of the conversational skill provider. */
    providerId: string;
    /** The specification of the provider. */
    specification: ProviderSpecification;
    /** Private information of the provider. */
    _private: ProviderPrivate;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createAssistant` operation. */
  export interface CreateAssistantParams {
    /** The language of the assistant. */
    language?: string;
    /** The name of the assistant. This string cannot contain carriage return, newline, or tab characters. */
    name?: string;
    /** The description of the assistant. This string cannot contain carriage return, newline, or tab characters. */
    description?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listAssistants` operation. */
  export interface ListAssistantsParams {
    /** The number of records to return in each page of results. */
    pageLimit?: number;
    /** Whether to include information about the number of records that satisfy the request, regardless of the page
     *  limit. If this parameter is `true`, the `pagination` object in the response includes the `total` property.
     */
    includeCount?: boolean;
    /** The attribute by which returned assistants will be sorted. To reverse the sort order, prefix the value with
     *  a minus sign (`-`).
     */
    sort?: ListAssistantsConstants.Sort | string;
    /** A token identifying the page of results to retrieve. */
    cursor?: string;
    /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
    includeAudit?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `listAssistants` operation. */
  export namespace ListAssistantsConstants {
    /** The attribute by which returned assistants will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). */
    export enum Sort {
      NAME = 'name',
      UPDATED = 'updated',
    }
  }

  /** Parameters for the `deleteAssistant` operation. */
  export interface DeleteAssistantParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createSession` operation. */
  export interface CreateSessionParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** An optional object containing analytics data. Currently, this data is used only for events sent to the
     *  Segment extension.
     */
    analytics?: RequestAnalytics;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteSession` operation. */
  export interface DeleteSessionParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the session. */
    sessionId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `message` operation. */
  export interface MessageParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the environment. To find the environment ID in the watsonx Assistant user interface,
     *  open the environment settings and click **API Details**. **Note:** Currently, the API does not support creating
     *  environments.
     */
    environmentId: string;
    /** Unique identifier of the session. */
    sessionId: string;
    /** An input object that includes the input text. */
    input?: MessageInput;
    /** Context data for the conversation. You can use this property to set or modify context variables, which can
     *  also be accessed by dialog nodes. The context is stored by the assistant on a per-session basis.
     *
     *  **Note:** The total size of the context data stored for a stateful session cannot exceed 100KB.
     */
    context?: MessageContext;
    /** A string value that identifies the user who is interacting with the assistant. The client must provide a
     *  unique identifier for each individual end user who accesses the application. For user-based plans, this user ID
     *  is used to identify unique users for billing purposes. This string cannot contain carriage return, newline, or
     *  tab characters. If no value is specified in the input, **user_id** is automatically set to the value of
     *  **context.global.session_id**.
     *
     *  **Note:** This property is the same as the **user_id** property in the global system context. If **user_id** is
     *  specified in both locations, the value specified at the root is used.
     */
    userId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `messageStateless` operation. */
  export interface MessageStatelessParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the environment. To find the environment ID in the watsonx Assistant user interface,
     *  open the environment settings and click **API Details**. **Note:** Currently, the API does not support creating
     *  environments.
     */
    environmentId: string;
    /** An input object that includes the input text. */
    input?: StatelessMessageInput;
    /** Context data for the conversation. You can use this property to set or modify context variables, which can
     *  also be accessed by dialog nodes. The context is not stored by the assistant. To maintain session state, include
     *  the context from the previous response.
     *
     *  **Note:** The total size of the context data for a stateless session cannot exceed 250KB.
     */
    context?: StatelessMessageContext;
    /** A string value that identifies the user who is interacting with the assistant. The client must provide a
     *  unique identifier for each individual end user who accesses the application. For user-based plans, this user ID
     *  is used to identify unique users for billing purposes. This string cannot contain carriage return, newline, or
     *  tab characters. If no value is specified in the input, **user_id** is automatically set to the value of
     *  **context.global.session_id**.
     *
     *  **Note:** This property is the same as the **user_id** property in the global system context. If **user_id** is
     *  specified in both locations in a message request, the value specified at the root is used.
     */
    userId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `messageStream` operation. */
  export interface MessageStreamParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the environment. To find the environment ID in the watsonx Assistant user interface,
     *  open the environment settings and click **API Details**. **Note:** Currently, the API does not support creating
     *  environments.
     */
    environmentId: string;
    /** Unique identifier of the session. */
    sessionId: string;
    /** An input object that includes the input text. */
    input?: MessageInput;
    /** Context data for the conversation. You can use this property to set or modify context variables, which can
     *  also be accessed by dialog nodes. The context is stored by the assistant on a per-session basis.
     *
     *  **Note:** The total size of the context data stored for a stateful session cannot exceed 100KB.
     */
    context?: MessageContext;
    /** A string value that identifies the user who is interacting with the assistant. The client must provide a
     *  unique identifier for each individual end user who accesses the application. For user-based plans, this user ID
     *  is used to identify unique users for billing purposes. This string cannot contain carriage return, newline, or
     *  tab characters. If no value is specified in the input, **user_id** is automatically set to the value of
     *  **context.global.session_id**.
     *
     *  **Note:** This property is the same as the **user_id** property in the global system context. If **user_id** is
     *  specified in both locations, the value specified at the root is used.
     */
    userId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `messageStreamStateless` operation. */
  export interface MessageStreamStatelessParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the environment. To find the environment ID in the watsonx Assistant user interface,
     *  open the environment settings and click **API Details**. **Note:** Currently, the API does not support creating
     *  environments.
     */
    environmentId: string;
    /** An input object that includes the input text. */
    input?: MessageInput;
    /** Context data for the conversation. You can use this property to set or modify context variables, which can
     *  also be accessed by dialog nodes. The context is stored by the assistant on a per-session basis.
     *
     *  **Note:** The total size of the context data stored for a stateful session cannot exceed 100KB.
     */
    context?: MessageContext;
    /** A string value that identifies the user who is interacting with the assistant. The client must provide a
     *  unique identifier for each individual end user who accesses the application. For user-based plans, this user ID
     *  is used to identify unique users for billing purposes. This string cannot contain carriage return, newline, or
     *  tab characters. If no value is specified in the input, **user_id** is automatically set to the value of
     *  **context.global.session_id**.
     *
     *  **Note:** This property is the same as the **user_id** property in the global system context. If **user_id** is
     *  specified in both locations, the value specified at the root is used.
     */
    userId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `bulkClassify` operation. */
  export interface BulkClassifyParams {
    /** Unique identifier of the skill. To find the skill ID in the watsonx Assistant user interface, open the skill
     *  settings and click **API Details**.
     */
    skillId: string;
    /** An array of input utterances to classify. */
    input: BulkClassifyUtterance[];
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listLogs` operation. */
  export interface ListLogsParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** How to sort the returned log events. You can sort by **request_timestamp**. To reverse the sort order,
     *  prefix the parameter value with a minus sign (`-`).
     */
    sort?: string;
    /** A cacheable parameter that limits the results to those matching the specified filter. For more information,
     *  see the [documentation](https://cloud.ibm.com/docs/assistant?topic=assistant-filter-reference#filter-reference).
     */
    filter?: string;
    /** The number of records to return in each page of results.
     *
     *  **Note:** If the API is not returning your data, try lowering the page_limit value.
     */
    pageLimit?: number;
    /** A token identifying the page of results to retrieve. */
    cursor?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteUserData` operation. */
  export interface DeleteUserDataParams {
    /** The customer ID for which all data is to be deleted. */
    customerId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listEnvironments` operation. */
  export interface ListEnvironmentsParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** The number of records to return in each page of results. */
    pageLimit?: number;
    /** Whether to include information about the number of records that satisfy the request, regardless of the page
     *  limit. If this parameter is `true`, the `pagination` object in the response includes the `total` property.
     */
    includeCount?: boolean;
    /** The attribute by which returned environments will be sorted. To reverse the sort order, prefix the value
     *  with a minus sign (`-`).
     */
    sort?: ListEnvironmentsConstants.Sort | string;
    /** A token identifying the page of results to retrieve. */
    cursor?: string;
    /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
    includeAudit?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `listEnvironments` operation. */
  export namespace ListEnvironmentsConstants {
    /** The attribute by which returned environments will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). */
    export enum Sort {
      NAME = 'name',
      UPDATED = 'updated',
    }
  }

  /** Parameters for the `getEnvironment` operation. */
  export interface GetEnvironmentParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the environment. To find the environment ID in the watsonx Assistant user interface,
     *  open the environment settings and click **API Details**. **Note:** Currently, the API does not support creating
     *  environments.
     */
    environmentId: string;
    /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
    includeAudit?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateEnvironment` operation. */
  export interface UpdateEnvironmentParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the environment. To find the environment ID in the watsonx Assistant user interface,
     *  open the environment settings and click **API Details**. **Note:** Currently, the API does not support creating
     *  environments.
     */
    environmentId: string;
    /** The name of the environment. */
    name?: string;
    /** The description of the environment. */
    description?: string;
    /** The search skill orchestration settings for the environment. */
    orchestration?: UpdateEnvironmentOrchestration;
    /** The session inactivity timeout setting for the environment (in seconds). */
    sessionTimeout?: number;
    /** An array of objects identifying the skills (such as action and dialog) that exist in the environment. */
    skillReferences?: EnvironmentSkill[];
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createRelease` operation. */
  export interface CreateReleaseParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** The description of the release. */
    description?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listReleases` operation. */
  export interface ListReleasesParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** The number of records to return in each page of results. */
    pageLimit?: number;
    /** Whether to include information about the number of records that satisfy the request, regardless of the page
     *  limit. If this parameter is `true`, the `pagination` object in the response includes the `total` property.
     */
    includeCount?: boolean;
    /** The attribute by which returned workspaces will be sorted. To reverse the sort order, prefix the value with
     *  a minus sign (`-`).
     */
    sort?: ListReleasesConstants.Sort | string;
    /** A token identifying the page of results to retrieve. */
    cursor?: string;
    /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
    includeAudit?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `listReleases` operation. */
  export namespace ListReleasesConstants {
    /** The attribute by which returned workspaces will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). */
    export enum Sort {
      NAME = 'name',
      UPDATED = 'updated',
    }
  }

  /** Parameters for the `getRelease` operation. */
  export interface GetReleaseParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the release. */
    release: string;
    /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
    includeAudit?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteRelease` operation. */
  export interface DeleteReleaseParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the release. */
    release: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deployRelease` operation. */
  export interface DeployReleaseParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the release. */
    release: string;
    /** The environment ID of the environment where the release is to be deployed. */
    environmentId: string;
    /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
    includeAudit?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createReleaseExport` operation. */
  export interface CreateReleaseExportParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the release. */
    release: string;
    /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
    includeAudit?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `downloadReleaseExport` operation. */
  export interface DownloadReleaseExportParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the release. */
    release: string;
    /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
    includeAudit?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `downloadReleaseExportAsStream` operation. */
  export interface DownloadReleaseExportAsStreamParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the release. */
    release: string;
    /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
    includeAudit?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createReleaseImport` operation. */
  export interface CreateReleaseImportParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Request body is an Octet-stream of the artifact Zip file that is being imported. */
    body: NodeJS.ReadableStream | Buffer;
    /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
    includeAudit?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getReleaseImportStatus` operation. */
  export interface GetReleaseImportStatusParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
    includeAudit?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getSkill` operation. */
  export interface GetSkillParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the skill. To find the skill ID in the watsonx Assistant user interface, open the skill
     *  settings and click **API Details**.
     */
    skillId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateSkill` operation. */
  export interface UpdateSkillParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Unique identifier of the skill. To find the skill ID in the watsonx Assistant user interface, open the skill
     *  settings and click **API Details**.
     */
    skillId: string;
    /** The name of the skill. This string cannot contain carriage return, newline, or tab characters. */
    name?: string;
    /** The description of the skill. This string cannot contain carriage return, newline, or tab characters. */
    description?: string;
    /** An object containing the conversational content of an action or dialog skill. */
    workspace?: JsonObject;
    /** For internal use only. */
    dialogSettings?: JsonObject;
    /** An object describing the search skill configuration.
     *
     *  **Note:** Search settings are not supported in **Import skills** requests, and are not included in **Export
     *  skills** responses.
     */
    searchSettings?: SearchSettings;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `exportSkills` operation. */
  export interface ExportSkillsParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
    includeAudit?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `importSkills` operation. */
  export interface ImportSkillsParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    /** An array of objects describing the skills for the assistant. Included in responses only if
     *  **status**=`Available`.
     */
    assistantSkills: SkillImport[];
    /** Status information about the skills for the assistant. Included in responses only if **status**=`Available`. */
    assistantState: AssistantState;
    /** Whether to include the audit properties (`created` and `updated` timestamps) in the response. */
    includeAudit?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `importSkillsStatus` operation. */
  export interface ImportSkillsStatusParams {
    /** The assistant ID or the environment ID of the environment where the assistant is deployed, depending on the
     *  type of request:
     *   - For message, session, and log requests, specify the environment ID of the environment where the assistant is
     *  deployed.
     *   - For all other requests, specify the assistant ID of the assistant.
     *
     *   To find the environment ID or assistant ID in the watsonx Assistant user interface, open the assistant settings
     *  and scroll to the **Environments** section.
     *
     *  **Note:** If you are using the classic Watson Assistant experience, always use the assistant ID. To find the
     *  assistant ID in the user interface, open the assistant settings and click API Details.
     */
    assistantId: string;
    headers?: OutgoingHttpHeaders;
  }

  /*************************
   * model interfaces
   ************************/

  /**
   * AgentAvailabilityMessage.
   */
  export interface AgentAvailabilityMessage {
    /** The text of the message. */
    message?: string;
  }

  /**
   * AssistantCollection.
   */
  export interface AssistantCollection {
    /** An array of objects describing the assistants associated with the instance. */
    assistants: AssistantData[];
    /** The pagination data for the returned objects. For more information about using pagination, see
     *  [Pagination](#pagination).
     */
    pagination: Pagination;
  }

  /**
   * AssistantData.
   */
  export interface AssistantData {
    /** The unique identifier of the assistant. */
    assistant_id?: string;
    /** The name of the assistant. This string cannot contain carriage return, newline, or tab characters. */
    name?: string;
    /** The description of the assistant. This string cannot contain carriage return, newline, or tab characters. */
    description?: string;
    /** The language of the assistant. */
    language: string;
    /** An array of skill references identifying the skills associated with the assistant. */
    assistant_skills?: AssistantSkill[];
    /** An array of objects describing the environments defined for the assistant. */
    assistant_environments?: EnvironmentReference[];
  }

  /**
   * AssistantSkill.
   */
  export interface AssistantSkill {
    /** The skill ID of the skill. */
    skill_id: string;
    /** The type of the skill. */
    type?: AssistantSkill.Constants.Type | string;
  }
  export namespace AssistantSkill {
    export namespace Constants {
      /** The type of the skill. */
      export enum Type {
        DIALOG = 'dialog',
        ACTION = 'action',
        SEARCH = 'search',
      }
    }
  }

  /**
   * Status information about the skills for the assistant. Included in responses only if **status**=`Available`.
   */
  export interface AssistantState {
    /** Whether the action skill is disabled in the draft environment. */
    action_disabled: boolean;
    /** Whether the dialog skill is disabled in the draft environment. */
    dialog_disabled: boolean;
  }

  /**
   * The search skill orchestration settings for the environment.
   */
  export interface BaseEnvironmentOrchestration {
    /** Whether to fall back to a search skill when responding to messages that do not match any intent or action
     *  defined in dialog or action skills. (If no search skill is configured for the environment, this property is
     *  ignored.).
     */
    search_skill_fallback?: boolean;
  }

  /**
   * An object describing the release that is currently deployed in the environment.
   */
  export interface BaseEnvironmentReleaseReference {
    /** The name of the deployed release. */
    release?: string;
  }

  /**
   * BulkClassifyOutput.
   */
  export interface BulkClassifyOutput {
    /** The user input utterance to classify. */
    input?: BulkClassifyUtterance;
    /** An array of entities identified in the utterance. */
    entities?: RuntimeEntity[];
    /** An array of intents recognized in the utterance. */
    intents?: RuntimeIntent[];
  }

  /**
   * BulkClassifyResponse.
   */
  export interface BulkClassifyResponse {
    /** An array of objects that contain classification information for the submitted input utterances. */
    output?: BulkClassifyOutput[];
  }

  /**
   * The user input utterance to classify.
   */
  export interface BulkClassifyUtterance {
    /** The text of the input utterance. */
    text: string;
  }

  /**
   * CaptureGroup.
   */
  export interface CaptureGroup {
    /** A recognized capture group for the entity. */
    group: string;
    /** Zero-based character offsets that indicate where the entity value begins and ends in the input text. */
    location?: number[];
  }

  /**
   * Information used by an integration to transfer the conversation to a different channel.
   */
  export interface ChannelTransferInfo {
    /** An object specifying target channels available for the transfer. Each property of this object represents an
     *  available transfer target. Currently, the only supported property is **chat**, representing the web chat
     *  integration.
     */
    target: ChannelTransferTarget;
  }

  /**
   * An object specifying target channels available for the transfer. Each property of this object represents an
   * available transfer target. Currently, the only supported property is **chat**, representing the web chat
   * integration.
   */
  export interface ChannelTransferTarget {
    /** Information for transferring to the web chat integration. */
    chat?: ChannelTransferTargetChat;
  }

  /**
   * Information for transferring to the web chat integration.
   */
  export interface ChannelTransferTargetChat {
    /** The URL of the target web chat. */
    url?: string;
  }

  /**
   * CreateAssistantReleaseImportResponse.
   */
  export interface CreateAssistantReleaseImportResponse {
    /** The current status of the artifact import process:
     *   - **Failed**: The asynchronous artifact import process has failed.
     *   - **Processing**: An asynchronous operation to import artifact is underway and not yet completed.
     */
    status?: CreateAssistantReleaseImportResponse.Constants.Status | string;
    /** A unique identifier for a background asynchronous task that is executing or has executed the operation. */
    task_id?: string;
    /** The ID of the assistant to which the release belongs. */
    assistant_id?: string;
    /** An array of skill types in the draft environment which will be overridden with skills from the artifact
     *  being imported.
     */
    skill_impact_in_draft?: CreateAssistantReleaseImportResponse.Constants.SkillImpactInDraft[] | string[];
    /** The timestamp for creation of the object. */
    created?: string;
    /** The timestamp for the most recent update to the object. */
    updated?: string;
  }
  export namespace CreateAssistantReleaseImportResponse {
    export namespace Constants {
      /** The current status of the artifact import process: - **Failed**: The asynchronous artifact import process has failed. - **Processing**: An asynchronous operation to import artifact is underway and not yet completed. */
      export enum Status {
        FAILED = 'Failed',
        PROCESSING = 'Processing',
      }
      /** An array of skill types in the draft environment which will be overridden with skills from the artifact being imported. */
      export enum SkillImpactInDraft {
        ACTION = 'action',
        DIALOG = 'dialog',
      }
    }
  }

  /**
   * CreateReleaseExportWithStatusErrors.
   */
  export interface CreateReleaseExportWithStatusErrors {
    /** The current status of the release export creation process:
     *   - **Available**: The release export package is available for download.
     *   - **Failed**: The asynchronous release export package creation process has failed.
     *   - **Processing**: An asynchronous operation to create the release export package is underway and not yet
     *  completed.
     */
    status?: CreateReleaseExportWithStatusErrors.Constants.Status | string;
    /** A unique identifier for a background asynchronous task that is executing or has executed the operation. */
    task_id?: string;
    /** The ID of the assistant to which the release belongs. */
    assistant_id?: string;
    /** The name of the release. The name is the version number (an integer), returned as a string. */
    release?: string;
    /** The timestamp for creation of the object. */
    created?: string;
    /** The timestamp for the most recent update to the object. */
    updated?: string;
    /** An array of messages about errors that caused an asynchronous operation to fail. Included only if
     *  **status**=`Failed`.
     */
    status_errors?: StatusError[];
    /** The description of the failed asynchronous operation. Included only if **status**=`Failed`. */
    status_description?: string;
  }
  export namespace CreateReleaseExportWithStatusErrors {
    export namespace Constants {
      /** The current status of the release export creation process: - **Available**: The release export package is available for download. - **Failed**: The asynchronous release export package creation process has failed. - **Processing**: An asynchronous operation to create the release export package is underway and not yet completed. */
      export enum Status {
        AVAILABLE = 'Available',
        FAILED = 'Failed',
        PROCESSING = 'Processing',
      }
    }
  }

  /**
   * Dialog log message details.
   */
  export interface DialogLogMessage {
    /** The severity of the log message. */
    level: DialogLogMessage.Constants.Level | string;
    /** The text of the log message. */
    message: string;
    /** A code that indicates the category to which the error message belongs. */
    code: string;
    /** An object that identifies the dialog element that generated the error message. */
    source?: LogMessageSource;
  }
  export namespace DialogLogMessage {
    export namespace Constants {
      /** The severity of the log message. */
      export enum Level {
        INFO = 'info',
        ERROR = 'error',
        WARN = 'warn',
      }
    }
  }

  /**
   * DialogNodeAction.
   */
  export interface DialogNodeAction {
    /** The name of the action. */
    name: string;
    /** The type of action to invoke. */
    type?: DialogNodeAction.Constants.Type | string;
    /** A map of key/value pairs to be provided to the action. */
    parameters?: JsonObject;
    /** The location in the dialog context where the result of the action is stored. */
    result_variable: string;
    /** The name of the context variable that the client application will use to pass in credentials for the action. */
    credentials?: string;
  }
  export namespace DialogNodeAction {
    export namespace Constants {
      /** The type of action to invoke. */
      export enum Type {
        CLIENT = 'client',
        SERVER = 'server',
        WEB_ACTION = 'web-action',
        CLOUD_FUNCTION = 'cloud-function',
      }
    }
  }

  /**
   * Routing or other contextual information to be used by target service desk systems.
   */
  export interface DialogNodeOutputConnectToAgentTransferInfo {
    target?: JsonObject;
  }

  /**
   * DialogNodeOutputOptionsElement.
   */
  export interface DialogNodeOutputOptionsElement {
    /** The user-facing label for the option. */
    label: string;
    /** An object defining the message input to be sent to the assistant if the user selects the corresponding
     *  option.
     */
    value: DialogNodeOutputOptionsElementValue;
  }

  /**
   * An object defining the message input to be sent to the assistant if the user selects the corresponding option.
   */
  export interface DialogNodeOutputOptionsElementValue {
    /** An input object that includes the input text. */
    input?: MessageInput;
  }

  /**
   * An objects containing detailed diagnostic information about a dialog node that was visited during processing of the
   * input message.
   */
  export interface DialogNodeVisited {
    /** A dialog node that was visited during processing of the input message. */
    dialog_node?: string;
    /** The title of the dialog node. */
    title?: string;
    /** The conditions that trigger the dialog node. */
    conditions?: string;
  }

  /**
   * DialogSuggestion.
   */
  export interface DialogSuggestion {
    /** The user-facing label for the suggestion. This label is taken from the **title** or **user_label** property
     *  of the corresponding dialog node, depending on the disambiguation options.
     */
    label: string;
    /** An object defining the message input to be sent to the assistant if the user selects the corresponding
     *  disambiguation option.
     *
     *   **Note:** This entire message input object must be included in the request body of the next message sent to the
     *  assistant. Do not modify or remove any of the included properties.
     */
    value: DialogSuggestionValue;
    /** The dialog output that will be returned from the watsonx Assistant service if the user selects the
     *  corresponding option.
     */
    output?: JsonObject;
  }

  /**
   * An object defining the message input to be sent to the assistant if the user selects the corresponding
   * disambiguation option.
   *
   *  **Note:** This entire message input object must be included in the request body of the next message sent to the
   * assistant. Do not modify or remove any of the included properties.
   */
  export interface DialogSuggestionValue {
    /** An input object that includes the input text. */
    input?: MessageInput;
  }

  /**
   * Environment.
   */
  export interface Environment {
    /** The name of the environment. */
    name?: string;
    /** The description of the environment. */
    description?: string;
    /** The assistant ID of the assistant the environment is associated with. */
    assistant_id?: string;
    /** The environment ID of the environment. */
    environment_id?: string;
    /** The type of the environment. All environments other than the `draft` and `live` environments have the type
     *  `staging`.
     */
    environment?: string;
    /** An object describing the release that is currently deployed in the environment. */
    release_reference?: BaseEnvironmentReleaseReference;
    /** The search skill orchestration settings for the environment. */
    orchestration: BaseEnvironmentOrchestration;
    /** The session inactivity timeout setting for the environment (in seconds). */
    session_timeout: number;
    /** An array of objects describing the integrations that exist in the environment. */
    integration_references?: IntegrationReference[];
    /** An array of objects identifying the skills (such as action and dialog) that exist in the environment. */
    skill_references: EnvironmentSkill[];
    /** The timestamp for creation of the object. */
    created?: string;
    /** The timestamp for the most recent update to the object. */
    updated?: string;
  }

  /**
   * EnvironmentCollection.
   */
  export interface EnvironmentCollection {
    /** An array of objects describing the environments associated with an assistant. */
    environments: Environment[];
    /** The pagination data for the returned objects. For more information about using pagination, see
     *  [Pagination](#pagination).
     */
    pagination: Pagination;
  }

  /**
   * EnvironmentReference.
   */
  export interface EnvironmentReference {
    /** The name of the environment. */
    name?: string;
    /** The unique identifier of the environment. */
    environment_id?: string;
    /** The type of the environment. All environments other than the draft and live environments have the type
     *  `staging`.
     */
    environment?: EnvironmentReference.Constants.Environment | string;
  }
  export namespace EnvironmentReference {
    export namespace Constants {
      /** The type of the environment. All environments other than the draft and live environments have the type `staging`. */
      export enum Environment {
        DRAFT = 'draft',
        LIVE = 'live',
        STAGING = 'staging',
      }
    }
  }

  /**
   * EnvironmentSkill.
   */
  export interface EnvironmentSkill {
    /** The skill ID of the skill. */
    skill_id: string;
    /** The type of the skill. */
    type?: EnvironmentSkill.Constants.Type | string;
    /** Whether the skill is disabled. A disabled skill in the draft environment does not handle any messages at run
     *  time, and it is not included in saved releases.
     */
    disabled?: boolean;
    /** The name of the skill snapshot that is deployed to the environment (for example, `draft` or `1`). */
    snapshot?: string;
    /** The type of skill identified by the skill reference. The possible values are `main skill` (for a dialog
     *  skill), `actions skill`, and `search skill`.
     */
    skill_reference?: string;
  }
  export namespace EnvironmentSkill {
    export namespace Constants {
      /** The type of the skill. */
      export enum Type {
        DIALOG = 'dialog',
        ACTION = 'action',
        SEARCH = 'search',
      }
    }
  }

  /**
   * IntegrationReference.
   */
  export interface IntegrationReference {
    /** The integration ID of the integration. */
    integration_id?: string;
    /** The type of the integration. */
    type?: string;
  }

  /**
   * Log.
   */
  export interface Log {
    /** A unique identifier for the logged event. */
    log_id: string;
    /** A message request formatted for the watsonx Assistant service. */
    request: LogRequest;
    /** A response from the watsonx Assistant service. */
    response: LogResponse;
    /** Unique identifier of the assistant. */
    assistant_id: string;
    /** The ID of the session the message was part of. */
    session_id: string;
    /** The unique identifier of the skill that responded to the message. */
    skill_id: string;
    /** The name of the snapshot (dialog skill version) that responded to the message (for example, `draft`). */
    snapshot: string;
    /** The timestamp for receipt of the message. */
    request_timestamp: string;
    /** The timestamp for the system response to the message. */
    response_timestamp: string;
    /** The language of the assistant to which the message request was made. */
    language: string;
    /** The customer ID specified for the message, if any. */
    customer_id?: string;
  }

  /**
   * LogCollection.
   */
  export interface LogCollection {
    /** An array of objects describing log events. */
    logs: Log[];
    /** The pagination data for the returned objects. For more information about using pagination, see
     *  [Pagination](#pagination).
     */
    pagination: LogPagination;
  }

  /**
   * An object that identifies the dialog element that generated the error message.
   */
  export interface LogMessageSource {
  }

  /**
   * The pagination data for the returned objects. For more information about using pagination, see
   * [Pagination](#pagination).
   */
  export interface LogPagination {
    /** The URL that will return the next page of results, if any. */
    next_url?: string;
    /** Reserved for future use. */
    matched?: number;
    /** A token identifying the next page of results. */
    next_cursor?: string;
  }

  /**
   * A message request formatted for the watsonx Assistant service.
   */
  export interface LogRequest {
    /** An input object that includes the input text. All private data is masked or removed. */
    input?: LogRequestInput;
    /** Context data for the conversation. You can use this property to set or modify context variables, which can
     *  also be accessed by dialog nodes. The context is stored by the assistant on a per-session basis.
     *
     *  **Note:** The total size of the context data stored for a stateful session cannot exceed 100KB.
     */
    context?: MessageContext;
    /** A string value that identifies the user who is interacting with the assistant. The client must provide a
     *  unique identifier for each individual end user who accesses the application. For user-based plans, this user ID
     *  is used to identify unique users for billing purposes. This string cannot contain carriage return, newline, or
     *  tab characters. If no value is specified in the input, **user_id** is automatically set to the value of
     *  **context.global.session_id**.
     *
     *  **Note:** This property is the same as the **user_id** property in the global system context. If **user_id** is
     *  specified in both locations, the value specified at the root is used.
     */
    user_id?: string;
  }

  /**
   * An input object that includes the input text. All private data is masked or removed.
   */
  export interface LogRequestInput {
    /** The type of the message:
     *
     *  - `text`: The user input is processed normally by the assistant.
     *  - `search`: Only search results are returned. (Any dialog or action skill is bypassed.)
     *
     *  **Note:** A `search` message results in an error if no search skill is configured for the assistant.
     */
    message_type?: LogRequestInput.Constants.MessageType | string;
    /** The text of the user input. This string cannot contain carriage return, newline, or tab characters. */
    text?: string;
    /** Intents to use when evaluating the user input. Include intents from the previous response to continue using
     *  those intents rather than trying to recognize intents in the new input.
     */
    intents?: RuntimeIntent[];
    /** Entities to use when evaluating the message. Include entities from the previous response to continue using
     *  those entities rather than detecting entities in the new input.
     */
    entities?: RuntimeEntity[];
    /** For internal use only. */
    suggestion_id?: string;
    /** An array of multimedia attachments to be sent with the message. Attachments are not processed by the
     *  assistant itself, but can be sent to external services by webhooks.
     *
     *   **Note:** Attachments are not supported on IBM Cloud Pak for Data.
     */
    attachments?: MessageInputAttachment[];
    /** An optional object containing analytics data. Currently, this data is used only for events sent to the
     *  Segment extension.
     */
    analytics?: RequestAnalytics;
    /** Optional properties that control how the assistant responds. */
    options?: MessageInputOptions;
  }
  export namespace LogRequestInput {
    export namespace Constants {
      /** The type of the message: - `text`: The user input is processed normally by the assistant. - `search`: Only search results are returned. (Any dialog or action skill is bypassed.) **Note:** A `search` message results in an error if no search skill is configured for the assistant. */
      export enum MessageType {
        TEXT = 'text',
        SEARCH = 'search',
      }
    }
  }

  /**
   * A response from the watsonx Assistant service.
   */
  export interface LogResponse {
    /** Assistant output to be rendered or processed by the client. All private data is masked or removed. */
    output: LogResponseOutput;
    /** Context data for the conversation. You can use this property to access context variables. The context is
     *  stored by the assistant on a per-session basis.
     *
     *  **Note:** The context is included in message responses only if **return_context**=`true` in the message request.
     *  Full context is always included in logs.
     */
    context?: MessageContext;
    /** A string value that identifies the user who is interacting with the assistant. The client must provide a
     *  unique identifier for each individual end user who accesses the application. For user-based plans, this user ID
     *  is used to identify unique users for billing purposes. This string cannot contain carriage return, newline, or
     *  tab characters. If no value is specified in the input, **user_id** is automatically set to the value of
     *  **context.global.session_id**.
     *
     *  **Note:** This property is the same as the **user_id** property in the global system context.
     */
    user_id: string;
  }

  /**
   * Assistant output to be rendered or processed by the client. All private data is masked or removed.
   */
  export interface LogResponseOutput {
    /** Output intended for any channel. It is the responsibility of the client application to implement the
     *  supported response types.
     */
    generic?: RuntimeResponseGeneric[];
    /** An array of intents recognized in the user input, sorted in descending order of confidence. */
    intents?: RuntimeIntent[];
    /** An array of entities identified in the user input. */
    entities?: RuntimeEntity[];
    /** An array of objects describing any actions requested by the dialog node. */
    actions?: DialogNodeAction[];
    /** Additional detailed information about a message response and how it was generated. */
    debug?: MessageOutputDebug;
    /** An object containing any custom properties included in the response. This object includes any arbitrary
     *  properties defined in the dialog JSON editor as part of the dialog node output.
     */
    user_defined?: JsonObject;
    /** Properties describing any spelling corrections in the user input that was received. */
    spelling?: MessageOutputSpelling;
  }

  /**
   * MessageContext.
   */
  export interface MessageContext {
    /** Session context data that is shared by all skills used by the assistant. */
    global?: MessageContextGlobal;
    /** Context data specific to particular skills used by the assistant. */
    skills?: MessageContextSkills;
    /** An object containing context data that is specific to particular integrations. For more information, see the
     *  [documentation](https://cloud.ibm.com/docs/assistant?topic=assistant-dialog-integrations).
     */
    integrations?: JsonObject;
  }

  /**
   * Context variables that are used by the action skill. Private variables are persisted, but not shown.
   */
  export interface MessageContextActionSkill {
    /** An object containing any arbitrary variables that can be read and written by a particular skill. */
    user_defined?: JsonObject;
    /** System context data used by the skill. */
    system?: MessageContextSkillSystem;
    /** An object containing action variables. Action variables can be accessed only by steps in the same action,
     *  and do not persist after the action ends.
     */
    action_variables?: JsonObject;
    /** An object containing skill variables. (In the watsonx Assistant user interface, skill variables are called
     *  _session variables_.) Skill variables can be accessed by any action and persist for the duration of the session.
     */
    skill_variables?: JsonObject;
  }

  /**
   * Context variables that are used by the dialog skill.
   */
  export interface MessageContextDialogSkill {
    /** An object containing any arbitrary variables that can be read and written by a particular skill. */
    user_defined?: JsonObject;
    /** System context data used by the skill. */
    system?: MessageContextSkillSystem;
  }

  /**
   * Session context data that is shared by all skills used by the assistant.
   */
  export interface MessageContextGlobal {
    /** Built-in system properties that apply to all skills used by the assistant. */
    system?: MessageContextGlobalSystem;
    /** The session ID. */
    session_id?: string;
  }

  /**
   * Built-in system properties that apply to all skills used by the assistant.
   */
  export interface MessageContextGlobalSystem {
    /** The user time zone. The assistant uses the time zone to correctly resolve relative time references. */
    timezone?: string;
    /** A string value that identifies the user who is interacting with the assistant. The client must provide a
     *  unique identifier for each individual end user who accesses the application. For user-based plans, this user ID
     *  is used to identify unique users for billing purposes. This string cannot contain carriage return, newline, or
     *  tab characters. If no value is specified in the input, **user_id** is automatically set to the value of
     *  **context.global.session_id**.
     *
     *  **Note:** This property is the same as the **user_id** property at the root of the message body. If **user_id**
     *  is specified in both locations in a message request, the value specified at the root is used.
     */
    user_id?: string;
    /** A counter that is automatically incremented with each turn of the conversation. A value of 1 indicates that
     *  this is the the first turn of a new conversation, which can affect the behavior of some skills (for example,
     *  triggering the start node of a dialog).
     */
    turn_count?: number;
    /** The language code for localization in the user input. The specified locale overrides the default for the
     *  assistant, and is used for interpreting entity values in user input such as date values. For example,
     *  `04/03/2018` might be interpreted either as April 3 or March 4, depending on the locale.
     *
     *   This property is included only if the new system entities are enabled for the skill.
     */
    locale?: MessageContextGlobalSystem.Constants.Locale | string;
    /** The base time for interpreting any relative time mentions in the user input. The specified time overrides
     *  the current server time, and is used to calculate times mentioned in relative terms such as `now` or `tomorrow`.
     *  This can be useful for simulating past or future times for testing purposes, or when analyzing documents such as
     *  news articles.
     *
     *  This value must be a UTC time value formatted according to ISO 8601 (for example, `2021-06-26T12:00:00Z` for
     *  noon UTC on 26 June 2021).
     *
     *  This property is included only if the new system entities are enabled for the skill.
     */
    reference_time?: string;
    /** The time at which the session started. With the stateful `message` method, the start time is always present,
     *  and is set by the service based on the time the session was created. With the stateless `message` method, the
     *  start time is set by the service in the response to the first message, and should be returned as part of the
     *  context with each subsequent message in the session.
     *
     *  This value is a UTC time value formatted according to ISO 8601 (for example, `2021-06-26T12:00:00Z` for noon UTC
     *  on 26 June 2021).
     */
    session_start_time?: string;
    /** An encoded string that represents the configuration state of the assistant at the beginning of the
     *  conversation. If you are using the stateless `message` method, save this value and then send it in the context
     *  of the subsequent message request to avoid disruptions if there are configuration changes during the
     *  conversation (such as a change to a skill the assistant uses).
     */
    state?: string;
    /** For internal use only. */
    skip_user_input?: boolean;
  }
  export namespace MessageContextGlobalSystem {
    export namespace Constants {
      /** The language code for localization in the user input. The specified locale overrides the default for the assistant, and is used for interpreting entity values in user input such as date values. For example, `04/03/2018` might be interpreted either as April 3 or March 4, depending on the locale. This property is included only if the new system entities are enabled for the skill. */
      export enum Locale {
        EN_US = 'en-us',
        EN_CA = 'en-ca',
        EN_GB = 'en-gb',
        AR_AR = 'ar-ar',
        CS_CZ = 'cs-cz',
        DE_DE = 'de-de',
        ES_ES = 'es-es',
        FR_FR = 'fr-fr',
        IT_IT = 'it-it',
        JA_JP = 'ja-jp',
        KO_KR = 'ko-kr',
        NL_NL = 'nl-nl',
        PT_BR = 'pt-br',
        ZH_CN = 'zh-cn',
        ZH_TW = 'zh-tw',
      }
    }
  }

  /**
   * System context data used by the skill.
   *
   * This type supports additional properties of type any. For internal use only.
   */
  export interface MessageContextSkillSystem {
    /** An encoded string that represents the current conversation state. By saving this value and then sending it
     *  in the context of a subsequent message request, you can return to an earlier point in the conversation. If you
     *  are using stateful sessions, you can also use a stored state value to restore a paused conversation whose
     *  session is expired.
     */
    state?: string;

    /**
     * MessageContextSkillSystem accepts additional properties of type any. For internal use only.
     */
    [propName: string]: any;
  }

  /**
   * Context data specific to particular skills used by the assistant.
   */
  export interface MessageContextSkills {
    /** Context variables that are used by the dialog skill. */
    'main skill'?: MessageContextDialogSkill;
    /** Context variables that are used by the action skill. Private variables are persisted, but not shown. */
    'actions skill'?: MessageContextActionSkill;
  }

  /**
   * An input object that includes the input text.
   */
  export interface MessageInput {
    /** The type of the message:
     *
     *  - `text`: The user input is processed normally by the assistant.
     *  - `search`: Only search results are returned. (Any dialog or action skill is bypassed.)
     *
     *  **Note:** A `search` message results in an error if no search skill is configured for the assistant.
     */
    message_type?: MessageInput.Constants.MessageType | string;
    /** The text of the user input. This string cannot contain carriage return, newline, or tab characters. */
    text?: string;
    /** Intents to use when evaluating the user input. Include intents from the previous response to continue using
     *  those intents rather than trying to recognize intents in the new input.
     */
    intents?: RuntimeIntent[];
    /** Entities to use when evaluating the message. Include entities from the previous response to continue using
     *  those entities rather than detecting entities in the new input.
     */
    entities?: RuntimeEntity[];
    /** For internal use only. */
    suggestion_id?: string;
    /** An array of multimedia attachments to be sent with the message. Attachments are not processed by the
     *  assistant itself, but can be sent to external services by webhooks.
     *
     *   **Note:** Attachments are not supported on IBM Cloud Pak for Data.
     */
    attachments?: MessageInputAttachment[];
    /** An optional object containing analytics data. Currently, this data is used only for events sent to the
     *  Segment extension.
     */
    analytics?: RequestAnalytics;
    /** Optional properties that control how the assistant responds. */
    options?: MessageInputOptions;
  }
  export namespace MessageInput {
    export namespace Constants {
      /** The type of the message: - `text`: The user input is processed normally by the assistant. - `search`: Only search results are returned. (Any dialog or action skill is bypassed.) **Note:** A `search` message results in an error if no search skill is configured for the assistant. */
      export enum MessageType {
        TEXT = 'text',
        SEARCH = 'search',
      }
    }
  }

  /**
   * A reference to a media file to be sent as an attachment with the message.
   */
  export interface MessageInputAttachment {
    /** The URL of the media file. */
    url: string;
    /** The media content type (such as a MIME type) of the attachment. */
    media_type?: string;
  }

  /**
   * Optional properties that control how the assistant responds.
   */
  export interface MessageInputOptions {
    /** Whether to restart dialog processing at the root of the dialog, regardless of any previously visited nodes.
     *  **Note:** This does not affect `turn_count` or any other context variables.
     */
    restart?: boolean;
    /** Whether to return more than one intent. Set to `true` to return all matching intents. */
    alternate_intents?: boolean;
    /** Whether custom extension callouts are executed asynchronously. Asynchronous execution means the response to
     *  the extension callout will be processed on the subsequent message call, the initial message response signals to
     *  the client that the operation may be long running. With synchronous execution the custom extension is executed
     *  and returns the response in a single message turn. **Note:** **async_callout** defaults to true for API versions
     *  earlier than 2023-06-15.
     */
    async_callout?: boolean;
    /** Spelling correction options for the message. Any options specified on an individual message override the
     *  settings configured for the skill.
     */
    spelling?: MessageInputOptionsSpelling;
    /** Whether to return additional diagnostic information. Set to `true` to return additional information in the
     *  `output.debug` property. If you also specify **return_context**=`true`, the returned skill context includes the
     *  `system.state` property.
     */
    debug?: boolean;
    /** Whether to return session context with the response. If you specify `true`, the response includes the
     *  `context` property. If you also specify **debug**=`true`, the returned skill context includes the `system.state`
     *  property.
     */
    return_context?: boolean;
    /** Whether to return session context, including full conversation state. If you specify `true`, the response
     *  includes the `context` property, and the skill context includes the `system.state` property.
     *
     *  **Note:** If **export**=`true`, the context is returned regardless of the value of **return_context**.
     */
    export?: boolean;
  }

  /**
   * Spelling correction options for the message. Any options specified on an individual message override the settings
   * configured for the skill.
   */
  export interface MessageInputOptionsSpelling {
    /** Whether to use spelling correction when processing the input. If spelling correction is used and
     *  **auto_correct** is `true`, any spelling corrections are automatically applied to the user input. If
     *  **auto_correct** is `false`, any suggested corrections are returned in the **output.spelling** property.
     *
     *  This property overrides the value of the **spelling_suggestions** property in the workspace settings for the
     *  skill.
     */
    suggestions?: boolean;
    /** Whether to use autocorrection when processing the input. If this property is `true`, any corrections are
     *  automatically applied to the user input, and the original text is returned in the **output.spelling** property
     *  of the message response. This property overrides the value of the **spelling_auto_correct** property in the
     *  workspace settings for the skill.
     */
    auto_correct?: boolean;
  }

  /**
   * Assistant output to be rendered or processed by the client.
   */
  export interface MessageOutput {
    /** Output intended for any channel. It is the responsibility of the client application to implement the
     *  supported response types.
     */
    generic?: RuntimeResponseGeneric[];
    /** An array of intents recognized in the user input, sorted in descending order of confidence. */
    intents?: RuntimeIntent[];
    /** An array of entities identified in the user input. */
    entities?: RuntimeEntity[];
    /** An array of objects describing any actions requested by the dialog node. */
    actions?: DialogNodeAction[];
    /** Additional detailed information about a message response and how it was generated. */
    debug?: MessageOutputDebug;
    /** An object containing any custom properties included in the response. This object includes any arbitrary
     *  properties defined in the dialog JSON editor as part of the dialog node output.
     */
    user_defined?: JsonObject;
    /** Properties describing any spelling corrections in the user input that was received. */
    spelling?: MessageOutputSpelling;
  }

  /**
   * Additional detailed information about a message response and how it was generated.
   */
  export interface MessageOutputDebug {
    /** An array of objects containing detailed diagnostic information about dialog nodes that were visited during
     *  processing of the input message.
     */
    nodes_visited?: DialogNodeVisited[];
    /** An array of up to 50 messages logged with the request. */
    log_messages?: DialogLogMessage[];
    /** Assistant sets this to true when this message response concludes or interrupts a dialog. */
    branch_exited?: boolean;
    /** When `branch_exited` is set to `true` by the assistant, the `branch_exited_reason` specifies whether the
     *  dialog completed by itself or got interrupted.
     */
    branch_exited_reason?: MessageOutputDebug.Constants.BranchExitedReason | string;
    /** An array of objects containing detailed diagnostic information about dialog nodes and actions that were
     *  visited during processing of the input message.
     *
     *  This property is present only if the assistant has an action skill.
     */
    turn_events?: MessageOutputDebugTurnEvent[];
  }
  export namespace MessageOutputDebug {
    export namespace Constants {
      /** When `branch_exited` is set to `true` by the assistant, the `branch_exited_reason` specifies whether the dialog completed by itself or got interrupted. */
      export enum BranchExitedReason {
        COMPLETED = 'completed',
        FALLBACK = 'fallback',
      }
    }
  }

  /**
   * MessageOutputDebugTurnEvent.
   */
  export interface MessageOutputDebugTurnEvent {
  }

  /**
   * Properties describing any spelling corrections in the user input that was received.
   */
  export interface MessageOutputSpelling {
    /** The user input text that was used to generate the response. If spelling autocorrection is enabled, this text
     *  reflects any spelling corrections that were applied.
     */
    text?: string;
    /** The original user input text. This property is returned only if autocorrection is enabled and the user input
     *  was corrected.
     */
    original_text?: string;
    /** Any suggested corrections of the input text. This property is returned only if spelling correction is
     *  enabled and autocorrection is disabled.
     */
    suggested_text?: string;
  }

  /**
   * Contains meta-information about the item(s) being streamed.
   */
  export interface Metadata {
    /** Identifies the index and sequence of the current streamed response item. */
    id?: number;
  }

  /**
   * MonitorAssistantReleaseImportArtifactResponse.
   */
  export interface MonitorAssistantReleaseImportArtifactResponse {
    /** The current status of the release import process:
     *   - **Completed**: The artifact import has completed.
     *   - **Failed**: The asynchronous artifact import process has failed.
     *   - **Processing**: An asynchronous operation to import the artifact is underway and not yet completed.
     */
    status?: MonitorAssistantReleaseImportArtifactResponse.Constants.Status | string;
    /** A unique identifier for a background asynchronous task that is executing or has executed the operation. */
    task_id?: string;
    /** The ID of the assistant to which the release belongs. */
    assistant_id?: string;
    /** An array of messages about errors that caused an asynchronous operation to fail. Included only if
     *  **status**=`Failed`.
     */
    status_errors?: StatusError[];
    /** The description of the failed asynchronous operation. Included only if **status**=`Failed`. */
    status_description?: string;
    /** An array of skill types in the draft environment which will be overridden with skills from the artifact
     *  being imported.
     */
    skill_impact_in_draft?: MonitorAssistantReleaseImportArtifactResponse.Constants.SkillImpactInDraft[] | string[];
    /** The timestamp for creation of the object. */
    created?: string;
    /** The timestamp for the most recent update to the object. */
    updated?: string;
  }
  export namespace MonitorAssistantReleaseImportArtifactResponse {
    export namespace Constants {
      /** The current status of the release import process: - **Completed**: The artifact import has completed. - **Failed**: The asynchronous artifact import process has failed. - **Processing**: An asynchronous operation to import the artifact is underway and not yet completed. */
      export enum Status {
        COMPLETED = 'Completed',
        FAILED = 'Failed',
        PROCESSING = 'Processing',
      }
      /** An array of skill types in the draft environment which will be overridden with skills from the artifact being imported. */
      export enum SkillImpactInDraft {
        ACTION = 'action',
        DIALOG = 'dialog',
      }
    }
  }

  /**
   * The pagination data for the returned objects. For more information about using pagination, see
   * [Pagination](#pagination).
   */
  export interface Pagination {
    /** The URL that will return the same page of results. */
    refresh_url: string;
    /** The URL that will return the next page of results. */
    next_url?: string;
    /** The total number of objects that satisfy the request. This total includes all results, not just those
     *  included in the current page.
     */
    total?: number;
    /** Reserved for future use. */
    matched?: number;
    /** A token identifying the current page of results. */
    refresh_cursor?: string;
    /** A token identifying the next page of results. */
    next_cursor?: string;
  }

  /**
   * Non-private settings for oauth2 authentication.
   */
  export interface ProviderAuthenticationOAuth2 {
    /** The preferred "flow" or "grant type" for the API client to fetch an access token from the authorization
     *  server.
     */
    preferred_flow?: ProviderAuthenticationOAuth2.Constants.PreferredFlow | string;
    /** Scenarios performed by the API client to fetch an access token from the authorization server. */
    flows?: ProviderAuthenticationOAuth2Flows;
  }
  export namespace ProviderAuthenticationOAuth2 {
    export namespace Constants {
      /** The preferred "flow" or "grant type" for the API client to fetch an access token from the authorization server. */
      export enum PreferredFlow {
        PASSWORD = 'password',
        CLIENT_CREDENTIALS = 'client_credentials',
        AUTHORIZATION_CODE = 'authorization_code',
        CUSTOM_FLOW_NAME = '<$custom_flow_name>',
      }
    }
  }

  /**
   * Scenarios performed by the API client to fetch an access token from the authorization server.
   */
  export interface ProviderAuthenticationOAuth2Flows {
  }

  /**
   * The username for oauth2 authentication when the preferred flow is "password".
   */
  export interface ProviderAuthenticationOAuth2PasswordUsername {
    /** The type of property observed in "value". */
    type?: ProviderAuthenticationOAuth2PasswordUsername.Constants.Type | string;
    /** The stored information of the value. */
    value?: string;
  }
  export namespace ProviderAuthenticationOAuth2PasswordUsername {
    export namespace Constants {
      /** The type of property observed in "value". */
      export enum Type {
        VALUE = 'value',
      }
    }
  }

  /**
   * ProviderAuthenticationTypeAndValue.
   */
  export interface ProviderAuthenticationTypeAndValue {
    /** The type of property observed in "value". */
    type?: ProviderAuthenticationTypeAndValue.Constants.Type | string;
    /** The stored information of the value. */
    value?: string;
  }
  export namespace ProviderAuthenticationTypeAndValue {
    export namespace Constants {
      /** The type of property observed in "value". */
      export enum Type {
        VALUE = 'value',
      }
    }
  }

  /**
   * ProviderCollection.
   */
  export interface ProviderCollection {
    /** An array of objects describing the conversational skill providers associated with the instance. */
    conversational_skill_providers: ProviderResponse[];
    /** The pagination data for the returned objects. For more information about using pagination, see
     *  [Pagination](#pagination).
     */
    pagination: Pagination;
  }

  /**
   * Private information of the provider.
   */
  export interface ProviderPrivate {
    /** Private authentication information of the provider. */
    authentication: ProviderPrivateAuthentication;
  }

  /**
   * Private authentication information of the provider.
   */
  export interface ProviderPrivateAuthentication {
  }

  /**
   * Scenarios performed by the API client to fetch an access token from the authorization server.
   */
  export interface ProviderPrivateAuthenticationOAuth2FlowFlows {
  }

  /**
   * The password for oauth2 authentication when the preferred flow is "password".
   */
  export interface ProviderPrivateAuthenticationOAuth2PasswordPassword {
    /** The type of property observed in "value". */
    type?: ProviderPrivateAuthenticationOAuth2PasswordPassword.Constants.Type | string;
    /** The stored information of the value. */
    value?: string;
  }
  export namespace ProviderPrivateAuthenticationOAuth2PasswordPassword {
    export namespace Constants {
      /** The type of property observed in "value". */
      export enum Type {
        VALUE = 'value',
      }
    }
  }

  /**
   * ProviderResponse.
   */
  export interface ProviderResponse {
    /** The unique identifier of the provider. */
    provider_id?: string;
    /** The specification of the provider. */
    specification?: ProviderResponseSpecification;
  }

  /**
   * The specification of the provider.
   */
  export interface ProviderResponseSpecification {
    /** An array of objects defining all endpoints of the provider.
     *
     *   **Note:** Multiple array items are reserved for future use.
     */
    servers?: ProviderResponseSpecificationServersItem[];
    /** An object defining various reusable definitions of the provider. */
    components?: ProviderResponseSpecificationComponents;
  }

  /**
   * An object defining various reusable definitions of the provider.
   */
  export interface ProviderResponseSpecificationComponents {
    /** The definition of the security scheme for the provider. */
    securitySchemes?: ProviderResponseSpecificationComponentsSecuritySchemes;
  }

  /**
   * The definition of the security scheme for the provider.
   */
  export interface ProviderResponseSpecificationComponentsSecuritySchemes {
    /** The authentication method required for requests made from watsonx Assistant to the conversational skill
     *  provider.
     */
    authentication_method?: ProviderResponseSpecificationComponentsSecuritySchemes.Constants.AuthenticationMethod | string;
    /** Non-private settings for basic access authentication. */
    basic?: ProviderResponseSpecificationComponentsSecuritySchemesBasic;
    /** Non-private settings for oauth2 authentication. */
    oauth2?: ProviderAuthenticationOAuth2;
  }
  export namespace ProviderResponseSpecificationComponentsSecuritySchemes {
    export namespace Constants {
      /** The authentication method required for requests made from watsonx Assistant to the conversational skill provider. */
      export enum AuthenticationMethod {
        BASIC = 'basic',
        BEARER = 'bearer',
        API_KEY = 'api_key',
        OAUTH2 = 'oauth2',
        NONE = 'none',
      }
    }
  }

  /**
   * Non-private settings for basic access authentication.
   */
  export interface ProviderResponseSpecificationComponentsSecuritySchemesBasic {
    /** The username for basic access authentication. */
    username?: ProviderAuthenticationTypeAndValue;
  }

  /**
   * ProviderResponseSpecificationServersItem.
   */
  export interface ProviderResponseSpecificationServersItem {
    /** The URL of the conversational skill provider. */
    url?: string;
  }

  /**
   * The specification of the provider.
   */
  export interface ProviderSpecification {
    /** An array of objects defining all endpoints of the provider.
     *
     *   **Note:** Multiple array items are reserved for future use.
     */
    servers: ProviderSpecificationServersItem[];
    /** An object defining various reusable definitions of the provider. */
    components?: ProviderSpecificationComponents;
  }

  /**
   * An object defining various reusable definitions of the provider.
   */
  export interface ProviderSpecificationComponents {
    /** The definition of the security scheme for the provider. */
    securitySchemes?: ProviderSpecificationComponentsSecuritySchemes;
  }

  /**
   * The definition of the security scheme for the provider.
   */
  export interface ProviderSpecificationComponentsSecuritySchemes {
    /** The authentication method required for requests made from watsonx Assistant to the conversational skill
     *  provider.
     */
    authentication_method?: ProviderSpecificationComponentsSecuritySchemes.Constants.AuthenticationMethod | string;
    /** Non-private settings for basic access authentication. */
    basic?: ProviderSpecificationComponentsSecuritySchemesBasic;
    /** Non-private settings for oauth2 authentication. */
    oauth2?: ProviderAuthenticationOAuth2;
  }
  export namespace ProviderSpecificationComponentsSecuritySchemes {
    export namespace Constants {
      /** The authentication method required for requests made from watsonx Assistant to the conversational skill provider. */
      export enum AuthenticationMethod {
        BASIC = 'basic',
        BEARER = 'bearer',
        API_KEY = 'api_key',
        OAUTH2 = 'oauth2',
        NONE = 'none',
      }
    }
  }

  /**
   * Non-private settings for basic access authentication.
   */
  export interface ProviderSpecificationComponentsSecuritySchemesBasic {
    /** The username for basic access authentication. */
    username?: ProviderAuthenticationTypeAndValue;
  }

  /**
   * ProviderSpecificationServersItem.
   */
  export interface ProviderSpecificationServersItem {
    /** The URL of the conversational skill provider. */
    url?: string;
  }

  /**
   * Release.
   */
  export interface Release {
    /** The name of the release. The name is the version number (an integer), returned as a string. */
    release?: string;
    /** The description of the release. */
    description?: string;
    /** An array of objects describing the environments where this release has been deployed. */
    environment_references?: EnvironmentReference[];
    /** An object identifying the versionable content objects (such as skill snapshots) that are included in the
     *  release.
     */
    content?: ReleaseContent;
    /** The current status of the release:
     *   - **Available**: The release is available for deployment.
     *   - **Failed**: An asynchronous publish operation has failed.
     *   - **Processing**: An asynchronous publish operation has not yet completed.
     */
    status?: Release.Constants.Status | string;
    /** The timestamp for creation of the object. */
    created?: string;
    /** The timestamp for the most recent update to the object. */
    updated?: string;
  }
  export namespace Release {
    export namespace Constants {
      /** The current status of the release: - **Available**: The release is available for deployment. - **Failed**: An asynchronous publish operation has failed. - **Processing**: An asynchronous publish operation has not yet completed. */
      export enum Status {
        AVAILABLE = 'Available',
        FAILED = 'Failed',
        PROCESSING = 'Processing',
      }
    }
  }

  /**
   * ReleaseCollection.
   */
  export interface ReleaseCollection {
    /** An array of objects describing the releases associated with an assistant. */
    releases: Release[];
    /** The pagination data for the returned objects. For more information about using pagination, see
     *  [Pagination](#pagination).
     */
    pagination: Pagination;
  }

  /**
   * An object identifying the versionable content objects (such as skill snapshots) that are included in the release.
   */
  export interface ReleaseContent {
    /** The skill snapshots that are included in the release. */
    skills?: ReleaseSkill[];
  }

  /**
   * ReleaseSkill.
   */
  export interface ReleaseSkill {
    /** The skill ID of the skill. */
    skill_id: string;
    /** The type of the skill. */
    type?: ReleaseSkill.Constants.Type | string;
    /** The name of the skill snapshot that is saved as part of the release (for example, `draft` or `1`). */
    snapshot?: string;
  }
  export namespace ReleaseSkill {
    export namespace Constants {
      /** The type of the skill. */
      export enum Type {
        DIALOG = 'dialog',
        ACTION = 'action',
        SEARCH = 'search',
      }
    }
  }

  /**
   * An optional object containing analytics data. Currently, this data is used only for events sent to the Segment
   * extension.
   */
  export interface RequestAnalytics {
    /** The browser that was used to send the message that triggered the event. */
    browser?: string;
    /** The type of device that was used to send the message that triggered the event. */
    device?: string;
    /** The URL of the web page that was used to send the message that triggered the event. */
    pageUrl?: string;
  }

  /**
   * ResponseGenericChannel.
   */
  export interface ResponseGenericChannel {
    /** A channel for which the response is intended. */
    channel?: string;
  }

  /**
   * The entity value that was recognized in the user input.
   */
  export interface RuntimeEntity {
    /** An entity detected in the input. */
    entity: string;
    /** An array of zero-based character offsets that indicate where the detected entity values begin and end in the
     *  input text.
     */
    location?: number[];
    /** The term in the input text that was recognized as an entity value. */
    value: string;
    /** A decimal percentage that represents confidence in the recognized entity. */
    confidence?: number;
    /** The recognized capture groups for the entity, as defined by the entity pattern. */
    groups?: CaptureGroup[];
    /** An object containing detailed information about the entity recognized in the user input. This property is
     *  included only if the new system entities are enabled for the skill.
     *
     *  For more information about how the new system entities are interpreted, see the
     *  [documentation](https://cloud.ibm.com/docs/assistant?topic=assistant-beta-system-entities).
     */
    interpretation?: RuntimeEntityInterpretation;
    /** An array of possible alternative values that the user might have intended instead of the value returned in
     *  the **value** property. This property is returned only for `@sys-time` and `@sys-date` entities when the user's
     *  input is ambiguous.
     *
     *  This property is included only if the new system entities are enabled for the skill.
     */
    alternatives?: RuntimeEntityAlternative[];
    /** An object describing the role played by a system entity that is specifies the beginning or end of a range
     *  recognized in the user input. This property is included only if the new system entities are enabled for the
     *  skill.
     */
    role?: RuntimeEntityRole;
    /** The skill that recognized the entity value. Currently, the only possible values are `main skill` for the
     *  dialog skill (if enabled) and `actions skill` for the action skill.
     *
     *  This property is present only if the assistant has both a dialog skill and an action skill.
     */
    skill?: string;
  }

  /**
   * An alternative value for the recognized entity.
   */
  export interface RuntimeEntityAlternative {
    /** The entity value that was recognized in the user input. */
    value?: string;
    /** A decimal percentage that represents confidence in the recognized entity. */
    confidence?: number;
  }

  /**
   * RuntimeEntityInterpretation.
   */
  export interface RuntimeEntityInterpretation {
    /** The calendar used to represent a recognized date (for example, `Gregorian`). */
    calendar_type?: string;
    /** A unique identifier used to associate a recognized time and date. If the user input contains a date and time
     *  that are mentioned together (for example, `Today at 5`, the same **datetime_link** value is returned for both
     *  the `@sys-date` and `@sys-time` entities).
     */
    datetime_link?: string;
    /** A locale-specific holiday name (such as `thanksgiving` or `christmas`). This property is included when a
     *  `@sys-date` entity is recognized based on a holiday name in the user input.
     */
    festival?: string;
    /** The precision or duration of a time range specified by a recognized `@sys-time` or `@sys-date` entity. */
    granularity?: RuntimeEntityInterpretation.Constants.Granularity | string;
    /** A unique identifier used to associate multiple recognized `@sys-date`, `@sys-time`, or `@sys-number`
     *  entities that are recognized as a range of values in the user's input (for example, `from July 4 until July 14`
     *  or `from 20 to 25`).
     */
    range_link?: string;
    /** The word in the user input that indicates that a `sys-date` or `sys-time` entity is part of an implied range
     *  where only one date or time is specified (for example, `since` or `until`).
     */
    range_modifier?: string;
    /** A recognized mention of a relative day, represented numerically as an offset from the current date (for
     *  example, `-1` for `yesterday` or `10` for `in ten days`).
     */
    relative_day?: number;
    /** A recognized mention of a relative month, represented numerically as an offset from the current month (for
     *  example, `1` for `next month` or `-3` for `three months ago`).
     */
    relative_month?: number;
    /** A recognized mention of a relative week, represented numerically as an offset from the current week (for
     *  example, `2` for `in two weeks` or `-1` for `last week).
     */
    relative_week?: number;
    /** A recognized mention of a relative date range for a weekend, represented numerically as an offset from the
     *  current weekend (for example, `0` for `this weekend` or `-1` for `last weekend`).
     */
    relative_weekend?: number;
    /** A recognized mention of a relative year, represented numerically as an offset from the current year (for
     *  example, `1` for `next year` or `-5` for `five years ago`).
     */
    relative_year?: number;
    /** A recognized mention of a specific date, represented numerically as the date within the month (for example,
     *  `30` for `June 30`.).
     */
    specific_day?: number;
    /** A recognized mention of a specific day of the week as a lowercase string (for example, `monday`). */
    specific_day_of_week?: string;
    /** A recognized mention of a specific month, represented numerically (for example, `7` for `July`). */
    specific_month?: number;
    /** A recognized mention of a specific quarter, represented numerically (for example, `3` for `the third
     *  quarter`).
     */
    specific_quarter?: number;
    /** A recognized mention of a specific year (for example, `2016`). */
    specific_year?: number;
    /** A recognized numeric value, represented as an integer or double. */
    numeric_value?: number;
    /** The type of numeric value recognized in the user input (`integer` or `rational`). */
    subtype?: string;
    /** A recognized term for a time that was mentioned as a part of the day in the user's input (for example,
     *  `morning` or `afternoon`).
     */
    part_of_day?: string;
    /** A recognized mention of a relative hour, represented numerically as an offset from the current hour (for
     *  example, `3` for `in three hours` or `-1` for `an hour ago`).
     */
    relative_hour?: number;
    /** A recognized mention of a relative time, represented numerically as an offset in minutes from the current
     *  time (for example, `5` for `in five minutes` or `-15` for `fifteen minutes ago`).
     */
    relative_minute?: number;
    /** A recognized mention of a relative time, represented numerically as an offset in seconds from the current
     *  time (for example, `10` for `in ten seconds` or `-30` for `thirty seconds ago`).
     */
    relative_second?: number;
    /** A recognized specific hour mentioned as part of a time value (for example, `10` for `10:15 AM`.). */
    specific_hour?: number;
    /** A recognized specific minute mentioned as part of a time value (for example, `15` for `10:15 AM`.). */
    specific_minute?: number;
    /** A recognized specific second mentioned as part of a time value (for example, `30` for `10:15:30 AM`.). */
    specific_second?: number;
    /** A recognized time zone mentioned as part of a time value (for example, `EST`). */
    timezone?: string;
  }
  export namespace RuntimeEntityInterpretation {
    export namespace Constants {
      /** The precision or duration of a time range specified by a recognized `@sys-time` or `@sys-date` entity. */
      export enum Granularity {
        DAY = 'day',
        FORTNIGHT = 'fortnight',
        HOUR = 'hour',
        INSTANT = 'instant',
        MINUTE = 'minute',
        MONTH = 'month',
        QUARTER = 'quarter',
        SECOND = 'second',
        WEEK = 'week',
        WEEKEND = 'weekend',
        YEAR = 'year',
      }
    }
  }

  /**
   * An object describing the role played by a system entity that is specifies the beginning or end of a range
   * recognized in the user input. This property is included only if the new system entities are enabled for the skill.
   */
  export interface RuntimeEntityRole {
    /** The relationship of the entity to the range. */
    type?: RuntimeEntityRole.Constants.Type | string;
  }
  export namespace RuntimeEntityRole {
    export namespace Constants {
      /** The relationship of the entity to the range. */
      export enum Type {
        DATE_FROM = 'date_from',
        DATE_TO = 'date_to',
        NUMBER_FROM = 'number_from',
        NUMBER_TO = 'number_to',
        TIME_FROM = 'time_from',
        TIME_TO = 'time_to',
      }
    }
  }

  /**
   * An intent identified in the user input.
   */
  export interface RuntimeIntent {
    /** The name of the recognized intent. */
    intent: string;
    /** A decimal percentage that represents confidence in the intent. If you are specifying an intent as part of a
     *  request, but you do not have a calculated confidence value, specify `1`.
     */
    confidence?: number;
    /** The skill that identified the intent. Currently, the only possible values are `main skill` for the dialog
     *  skill (if enabled) and `actions skill` for the action skill.
     *
     *  This property is present only if the assistant has both a dialog skill and an action skill.
     */
    skill?: string;
  }

  /**
   * RuntimeResponseGeneric.
   */
  export interface RuntimeResponseGeneric {
  }

  /**
   * SearchResult.
   */
  export interface SearchResult {
    /** The unique identifier of the document in the Discovery service collection.
     *
     *  This property is included in responses from search skills, which are available only to Plus or Enterprise plan
     *  users.
     */
    id: string;
    /** An object containing search result metadata from the Discovery service. */
    result_metadata: SearchResultMetadata;
    /** A description of the search result. This is taken from an abstract, summary, or highlight field in the
     *  Discovery service response, as specified in the search skill configuration.
     */
    body?: string;
    /** The title of the search result. This is taken from a title or name field in the Discovery service response,
     *  as specified in the search skill configuration.
     */
    title?: string;
    /** The URL of the original data object in its native data source. */
    url?: string;
    /** An object containing segments of text from search results with query-matching text highlighted using HTML
     *  `<em>` tags.
     */
    highlight?: SearchResultHighlight;
    /** An array specifying segments of text within the result that were identified as direct answers to the search
     *  query. Currently, only the single answer with the highest confidence (if any) is returned.
     *
     *  **Notes:**
     *   - Answer finding is available only if the search skill is connected to a Discovery v2 service instance.
     *   - Answer finding is not supported on IBM Cloud Pak for Data.
     */
    answers?: SearchResultAnswer[];
  }

  /**
   * An object specifing a segment of text that was identified as a direct answer to the search query.
   */
  export interface SearchResultAnswer {
    /** The text of the answer. */
    text: string;
    /** The confidence score for the answer, as returned by the Discovery service. */
    confidence: number;
  }

  /**
   * An object containing segments of text from search results with query-matching text highlighted using HTML `<em>`
   * tags.
   *
   * This type supports additional properties of type string[]. An array of strings containing segments taken from a
   * field in the search results that is not mapped to the `body`, `title`, or `url` property, with query-matching
   * substrings highlighted. The property name is the name of the field in the Discovery collection.
   */
  export interface SearchResultHighlight {
    /** An array of strings containing segments taken from body text in the search results, with query-matching
     *  substrings highlighted.
     */
    body?: string[];
    /** An array of strings containing segments taken from title text in the search results, with query-matching
     *  substrings highlighted.
     */
    title?: string[];
    /** An array of strings containing segments taken from URLs in the search results, with query-matching
     *  substrings highlighted.
     */
    url?: string[];

    /**
     * SearchResultHighlight accepts additional properties of type string[]. An array of strings containing segments
     * taken from a field in the search results that is not mapped to the `body`, `title`, or `url` property, with
     * query-matching substrings highlighted. The property name is the name of the field in the Discovery collection.
     */
    [propName: string]: any;
  }

  /**
   * An object containing search result metadata from the Discovery service.
   */
  export interface SearchResultMetadata {
    /** The confidence score for the given result, as returned by the Discovery service. */
    confidence?: number;
    /** An unbounded measure of the relevance of a particular result, dependent on the query and matching document.
     *  A higher score indicates a greater match to the query parameters.
     */
    score?: number;
  }

  /**
   * An object describing the search skill configuration.
   *
   * **Note:** Search settings are not supported in **Import skills** requests, and are not included in **Export
   * skills** responses.
   */
  export interface SearchSettings {
    /** Configuration settings for the Watson Discovery service instance used by the search integration. */
    discovery: SearchSettingsDiscovery;
    /** The messages included with responses from the search integration. */
    messages: SearchSettingsMessages;
    /** The mapping between fields in the Watson Discovery collection and properties in the search response. */
    schema_mapping: SearchSettingsSchemaMapping;
    /** Configuration settings for the Elasticsearch service used by the search integration. You can provide either
     *  basic auth or apiKey auth.
     */
    elastic_search?: SearchSettingsElasticSearch;
    /** Configuration settings for conversational search. */
    conversational_search?: SearchSettingsConversationalSearch;
    /** Configuration settings for the server-side search service used by the search integration. You can provide
     *  either basic auth, apiKey auth or none.
     */
    server_side_search?: SearchSettingsServerSideSearch;
    /** Configuration settings for the client-side search service or server-side search service used by the search
     *  integration.
     */
    client_side_search?: SearchSettingsClientSideSearch;
  }

  /**
   * Configuration settings for the client-side search service or server-side search service used by the search
   * integration.
   */
  export interface SearchSettingsClientSideSearch {
    /** The filter string that is applied to the search results. */
    filter?: string;
    /** The metadata object. */
    metadata?: JsonObject;
  }

  /**
   * Configuration settings for conversational search.
   */
  export interface SearchSettingsConversationalSearch {
    /** Whether to enable conversational search. */
    enabled: boolean;
    response_length?: SearchSettingsConversationalSearchResponseLength;
    search_confidence?: SearchSettingsConversationalSearchSearchConfidence;
  }

  /**
   * SearchSettingsConversationalSearchResponseLength.
   */
  export interface SearchSettingsConversationalSearchResponseLength {
    /** The response length option. It controls the length of the generated response. */
    option?: SearchSettingsConversationalSearchResponseLength.Constants.Option | string;
  }
  export namespace SearchSettingsConversationalSearchResponseLength {
    export namespace Constants {
      /** The response length option. It controls the length of the generated response. */
      export enum Option {
        CONCISE = 'concise',
        MODERATE = 'moderate',
        VERBOSE = 'verbose',
      }
    }
  }

  /**
   * SearchSettingsConversationalSearchSearchConfidence.
   */
  export interface SearchSettingsConversationalSearchSearchConfidence {
    /** The search confidence threshold.
     *   It controls the tendency for conversational search to produce “I don't know” answers.
     */
    threshold?: SearchSettingsConversationalSearchSearchConfidence.Constants.Threshold | string;
  }
  export namespace SearchSettingsConversationalSearchSearchConfidence {
    export namespace Constants {
      /** The search confidence threshold. It controls the tendency for conversational search to produce “I don't know” answers. */
      export enum Threshold {
        RARELY = 'rarely',
        LESS_OFTEN = 'less_often',
        MORE_OFTEN = 'more_often',
        MOST_OFTEN = 'most_often',
      }
    }
  }

  /**
   * Configuration settings for the Watson Discovery service instance used by the search integration.
   */
  export interface SearchSettingsDiscovery {
    /** The ID for the Watson Discovery service instance. */
    instance_id: string;
    /** The ID for the Watson Discovery project. */
    project_id: string;
    /** The URL for the Watson Discovery service instance. */
    url: string;
    /** The maximum number of primary results to include in the response. */
    max_primary_results?: number;
    /** The maximum total number of primary and additional results to include in the response. */
    max_total_results?: number;
    /** The minimum confidence threshold for included results. Any results with a confidence below this threshold
     *  will be discarded.
     */
    confidence_threshold?: number;
    /** Whether to include the most relevant passages of text in the **highlight** property of each result. */
    highlight?: boolean;
    /** Whether to use the answer finding feature to emphasize answers within highlighted passages. This property is
     *  ignored if **highlight**=`false`.
     *
     *  **Notes:**
     *   - Answer finding is available only if the search skill is connected to a Discovery v2 service instance.
     *   - Answer finding is not supported on IBM Cloud Pak for Data.
     */
    find_answers?: boolean;
    /** Authentication information for the Watson Discovery service. For more information, see the [Watson Discovery
     *  documentation](https://cloud.ibm.com/apidocs/discovery-data#authentication).
     *
     *   **Note:** You must specify either **basic** or **bearer**, but not both.
     */
    authentication: SearchSettingsDiscoveryAuthentication;
  }

  /**
   * Authentication information for the Watson Discovery service. For more information, see the [Watson Discovery
   * documentation](https://cloud.ibm.com/apidocs/discovery-data#authentication).
   *
   *  **Note:** You must specify either **basic** or **bearer**, but not both.
   */
  export interface SearchSettingsDiscoveryAuthentication {
    /** The HTTP basic authentication credentials for Watson Discovery. Specify your Watson Discovery API key in the
     *  format `apikey:{apikey}`.
     */
    basic?: string;
    /** The authentication bearer token for Watson Discovery. */
    bearer?: string;
  }

  /**
   * Configuration settings for the Elasticsearch service used by the search integration. You can provide either basic
   * auth or apiKey auth.
   */
  export interface SearchSettingsElasticSearch {
    /** The URL for the Elasticsearch service. */
    url: string;
    /** The port number for the Elasticsearch service URL.
     *
     *   **Note:** It can be omitted if a port number is appended to the URL.
     */
    port: string;
    /** The username of the basic authentication method. */
    username?: string;
    /** The password of the basic authentication method. The credentials are not returned due to security reasons. */
    password?: string;
    /** The Elasticsearch index to use for the search integration. */
    index: string;
    /** An array of filters that can be applied to the search results via the `$FILTER` variable in the
     *  `query_body`.For more information, see [Elasticsearch filter
     *  documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/filter-search-results.html).
     */
    filter?: any[];
    /** The Elasticsearch query object. For more information, see [Elasticsearch search API
     *  documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-search.html).
     */
    query_body?: JsonObject;
    /** The Elasticsearch index for uploading documents. It is created automatically when the upload document option
     *  is selected from the user interface.
     */
    managed_index?: string;
    /** The API key of the apiKey authentication method. Use either basic auth or apiKey auth. The credentials are
     *  not returned due to security reasons.
     */
    apikey?: string;
  }

  /**
   * The messages included with responses from the search integration.
   */
  export interface SearchSettingsMessages {
    /** The message to include in the response to a successful query. */
    success: string;
    /** The message to include in the response when the query encounters an error. */
    error: string;
    /** The message to include in the response when there is no result from the query. */
    no_result: string;
  }

  /**
   * The mapping between fields in the Watson Discovery collection and properties in the search response.
   */
  export interface SearchSettingsSchemaMapping {
    /** The field in the collection to map to the **url** property of the response. */
    url: string;
    /** The field in the collection to map to the **body** property in the response. */
    body: string;
    /** The field in the collection to map to the **title** property for the schema. */
    title: string;
  }

  /**
   * Configuration settings for the server-side search service used by the search integration. You can provide either
   * basic auth, apiKey auth or none.
   */
  export interface SearchSettingsServerSideSearch {
    /** The URL of the server-side search service. */
    url: string;
    /** The port number of the server-side search service. */
    port?: string;
    /** The username of the basic authentication method. */
    username?: string;
    /** The password of the basic authentication method. The credentials are not returned due to security reasons. */
    password?: string;
    /** The filter string that is applied to the search results. */
    filter?: string;
    /** The metadata object. */
    metadata?: JsonObject;
    /** The API key of the apiKey authentication method. The credentails are not returned due to security reasons. */
    apikey?: string;
    /** To clear previous auth, specify `no_auth = true`. */
    no_auth?: boolean;
    /** The authorization type that is used. */
    auth_type?: SearchSettingsServerSideSearch.Constants.AuthType | string;
  }
  export namespace SearchSettingsServerSideSearch {
    export namespace Constants {
      /** The authorization type that is used. */
      export enum AuthType {
        BASIC = 'basic',
        APIKEY = 'apikey',
        NONE = 'none',
      }
    }
  }

  /**
   * A warning describing an error in the search skill configuration.
   */
  export interface SearchSkillWarning {
    /** The error code. */
    code?: string;
    /** The location of the error in the search skill configuration object. */
    path?: string;
    /** The error message. */
    message?: string;
  }

  /**
   * SessionResponse.
   */
  export interface SessionResponse {
    /** The session ID. */
    session_id: string;
  }

  /**
   * Skill.
   */
  export interface Skill {
    /** The name of the skill. This string cannot contain carriage return, newline, or tab characters. */
    name?: string;
    /** The description of the skill. This string cannot contain carriage return, newline, or tab characters. */
    description?: string;
    /** An object containing the conversational content of an action or dialog skill. */
    workspace?: JsonObject;
    /** The skill ID of the skill. */
    skill_id?: string;
    /** The current status of the skill:
     *   - **Available**: The skill is available and ready to process messages.
     *   - **Failed**: An asynchronous operation has failed. See the **status_errors** property for more information
     *  about the cause of the failure.
     *   - **Non Existent**: The skill does not exist.
     *   - **Processing**: An asynchronous operation has not yet completed.
     *   - **Training**: The skill is training based on new data.
     */
    status?: Skill.Constants.Status | string;
    /** An array of messages about errors that caused an asynchronous operation to fail. Included only if
     *  **status**=`Failed`.
     */
    status_errors?: StatusError[];
    /** The description of the failed asynchronous operation. Included only if **status**=`Failed`. */
    status_description?: string;
    /** For internal use only. */
    dialog_settings?: JsonObject;
    /** The unique identifier of the assistant the skill is associated with. */
    assistant_id?: string;
    /** The unique identifier of the workspace that contains the skill content. Included only for action and dialog
     *  skills.
     */
    workspace_id?: string;
    /** The unique identifier of the environment where the skill is defined. For action and dialog skills, this is
     *  always the draft environment.
     */
    environment_id?: string;
    /** Whether the skill is structurally valid. */
    valid?: boolean;
    /** The name that will be given to the next snapshot that is created for the skill. A snapshot of each
     *  versionable skill is saved for each new release of an assistant.
     */
    next_snapshot_version?: string;
    /** An object describing the search skill configuration.
     *
     *  **Note:** Search settings are not supported in **Import skills** requests, and are not included in **Export
     *  skills** responses.
     */
    search_settings?: SearchSettings;
    /** An array of warnings describing errors with the search skill configuration. Included only for search skills. */
    warnings?: SearchSkillWarning[];
    /** The language of the skill. */
    language: string;
    /** The type of skill. */
    type: Skill.Constants.Type | string;
  }
  export namespace Skill {
    export namespace Constants {
      /** The current status of the skill: - **Available**: The skill is available and ready to process messages. - **Failed**: An asynchronous operation has failed. See the **status_errors** property for more information about the cause of the failure. - **Non Existent**: The skill does not exist. - **Processing**: An asynchronous operation has not yet completed. - **Training**: The skill is training based on new data. */
      export enum Status {
        AVAILABLE = 'Available',
        FAILED = 'Failed',
        NON_EXISTENT = 'Non Existent',
        PROCESSING = 'Processing',
        TRAINING = 'Training',
        UNAVAILABLE = 'Unavailable',
      }
      /** The type of skill. */
      export enum Type {
        ACTION = 'action',
        DIALOG = 'dialog',
        SEARCH = 'search',
      }
    }
  }

  /**
   * SkillImport.
   */
  export interface SkillImport {
    /** The name of the skill. This string cannot contain carriage return, newline, or tab characters. */
    name?: string;
    /** The description of the skill. This string cannot contain carriage return, newline, or tab characters. */
    description?: string;
    /** An object containing the conversational content of an action or dialog skill. */
    workspace?: JsonObject;
    /** The skill ID of the skill. */
    skill_id?: string;
    /** The current status of the skill:
     *   - **Available**: The skill is available and ready to process messages.
     *   - **Failed**: An asynchronous operation has failed. See the **status_errors** property for more information
     *  about the cause of the failure.
     *   - **Non Existent**: The skill does not exist.
     *   - **Processing**: An asynchronous operation has not yet completed.
     *   - **Training**: The skill is training based on new data.
     */
    status?: SkillImport.Constants.Status | string;
    /** An array of messages about errors that caused an asynchronous operation to fail. Included only if
     *  **status**=`Failed`.
     */
    status_errors?: StatusError[];
    /** The description of the failed asynchronous operation. Included only if **status**=`Failed`. */
    status_description?: string;
    /** For internal use only. */
    dialog_settings?: JsonObject;
    /** The unique identifier of the assistant the skill is associated with. */
    assistant_id?: string;
    /** The unique identifier of the workspace that contains the skill content. Included only for action and dialog
     *  skills.
     */
    workspace_id?: string;
    /** The unique identifier of the environment where the skill is defined. For action and dialog skills, this is
     *  always the draft environment.
     */
    environment_id?: string;
    /** Whether the skill is structurally valid. */
    valid?: boolean;
    /** The name that will be given to the next snapshot that is created for the skill. A snapshot of each
     *  versionable skill is saved for each new release of an assistant.
     */
    next_snapshot_version?: string;
    /** An object describing the search skill configuration.
     *
     *  **Note:** Search settings are not supported in **Import skills** requests, and are not included in **Export
     *  skills** responses.
     */
    search_settings?: SearchSettings;
    /** An array of warnings describing errors with the search skill configuration. Included only for search skills. */
    warnings?: SearchSkillWarning[];
    /** The language of the skill. */
    language: string;
    /** The type of skill. */
    type: SkillImport.Constants.Type | string;
  }
  export namespace SkillImport {
    export namespace Constants {
      /** The current status of the skill: - **Available**: The skill is available and ready to process messages. - **Failed**: An asynchronous operation has failed. See the **status_errors** property for more information about the cause of the failure. - **Non Existent**: The skill does not exist. - **Processing**: An asynchronous operation has not yet completed. - **Training**: The skill is training based on new data. */
      export enum Status {
        AVAILABLE = 'Available',
        FAILED = 'Failed',
        NON_EXISTENT = 'Non Existent',
        PROCESSING = 'Processing',
        TRAINING = 'Training',
        UNAVAILABLE = 'Unavailable',
      }
      /** The type of skill. */
      export enum Type {
        ACTION = 'action',
        DIALOG = 'dialog',
      }
    }
  }

  /**
   * SkillsAsyncRequestStatus.
   */
  export interface SkillsAsyncRequestStatus {
    /** The assistant ID of the assistant. */
    assistant_id?: string;
    /** The current status of the asynchronous operation:
     *   - `Available`: An asynchronous export is available.
     *   - `Completed`: An asynchronous import operation has completed successfully.
     *   - `Failed`: An asynchronous operation has failed. See the **status_errors** property for more information about
     *  the cause of the failure.
     *   - `Processing`: An asynchronous operation has not yet completed.
     */
    status?: SkillsAsyncRequestStatus.Constants.Status | string;
    /** The description of the failed asynchronous operation. Included only if **status**=`Failed`. */
    status_description?: string;
    /** An array of messages about errors that caused an asynchronous operation to fail. Included only if
     *  **status**=`Failed`.
     */
    status_errors?: StatusError[];
  }
  export namespace SkillsAsyncRequestStatus {
    export namespace Constants {
      /** The current status of the asynchronous operation: - `Available`: An asynchronous export is available. - `Completed`: An asynchronous import operation has completed successfully. - `Failed`: An asynchronous operation has failed. See the **status_errors** property for more information about the cause of the failure. - `Processing`: An asynchronous operation has not yet completed. */
      export enum Status {
        AVAILABLE = 'Available',
        COMPLETED = 'Completed',
        FAILED = 'Failed',
        PROCESSING = 'Processing',
      }
    }
  }

  /**
   * SkillsExport.
   */
  export interface SkillsExport {
    /** An array of objects describing the skills for the assistant. Included in responses only if
     *  **status**=`Available`.
     */
    assistant_skills: Skill[];
    /** Status information about the skills for the assistant. Included in responses only if **status**=`Available`. */
    assistant_state: AssistantState;
  }

  /**
   * A response from the watsonx Assistant service.
   */
  export interface StatefulMessageResponse {
    /** Assistant output to be rendered or processed by the client. */
    output: MessageOutput;
    /** Context data for the conversation. You can use this property to access context variables. The context is
     *  stored by the assistant on a per-session basis.
     *
     *  **Note:** The context is included in message responses only if **return_context**=`true` in the message request.
     *  Full context is always included in logs.
     */
    context?: MessageContext;
    /** A string value that identifies the user who is interacting with the assistant. The client must provide a
     *  unique identifier for each individual end user who accesses the application. For user-based plans, this user ID
     *  is used to identify unique users for billing purposes. This string cannot contain carriage return, newline, or
     *  tab characters. If no value is specified in the input, **user_id** is automatically set to the value of
     *  **context.global.session_id**.
     *
     *  **Note:** This property is the same as the **user_id** property in the global system context.
     */
    user_id: string;
    /** Assistant output to be rendered or processed by the client. All private data is masked or removed. */
    masked_output?: MessageOutput;
    /** An input object that includes the input text. All private data is masked or removed. */
    masked_input?: MessageInput;
  }

  /**
   * StatelessMessageContext.
   */
  export interface StatelessMessageContext {
    /** Session context data that is shared by all skills used by the assistant. */
    global?: StatelessMessageContextGlobal;
    /** Context data specific to particular skills used by the assistant. */
    skills?: StatelessMessageContextSkills;
    /** An object containing context data that is specific to particular integrations. For more information, see the
     *  [documentation](https://cloud.ibm.com/docs/assistant?topic=assistant-dialog-integrations).
     */
    integrations?: JsonObject;
  }

  /**
   * Session context data that is shared by all skills used by the assistant.
   */
  export interface StatelessMessageContextGlobal {
    /** Built-in system properties that apply to all skills used by the assistant. */
    system?: MessageContextGlobalSystem;
    /** The unique identifier of the session. */
    session_id?: string;
  }

  /**
   * Context data specific to particular skills used by the assistant.
   */
  export interface StatelessMessageContextSkills {
    /** Context variables that are used by the dialog skill. */
    'main skill'?: MessageContextDialogSkill;
    /** Context variables that are used by the action skill. */
    'actions skill'?: StatelessMessageContextSkillsActionsSkill;
  }

  /**
   * Context variables that are used by the action skill.
   */
  export interface StatelessMessageContextSkillsActionsSkill {
    /** An object containing any arbitrary variables that can be read and written by a particular skill. */
    user_defined?: JsonObject;
    /** System context data used by the skill. */
    system?: MessageContextSkillSystem;
    /** An object containing action variables. Action variables can be accessed only by steps in the same action,
     *  and do not persist after the action ends.
     */
    action_variables?: JsonObject;
    /** An object containing skill variables. (In the watsonx Assistant user interface, skill variables are called
     *  _session variables_.) Skill variables can be accessed by any action and persist for the duration of the session.
     */
    skill_variables?: JsonObject;
    /** An object containing private action variables. Action variables can be accessed only by steps in the same
     *  action, and do not persist after the action ends. Private variables are encrypted.
     */
    private_action_variables?: JsonObject;
    /** An object containing private skill variables. (In the watsonx Assistant user interface, skill variables are
     *  called _session variables_.) Skill variables can be accessed by any action and persist for the duration of the
     *  session. Private variables are encrypted.
     */
    private_skill_variables?: JsonObject;
  }

  /**
   * An input object that includes the input text.
   */
  export interface StatelessMessageInput {
    /** The type of the message:
     *
     *  - `text`: The user input is processed normally by the assistant.
     *  - `search`: Only search results are returned. (Any dialog or action skill is bypassed.)
     *
     *  **Note:** A `search` message results in an error if no search skill is configured for the assistant.
     */
    message_type?: StatelessMessageInput.Constants.MessageType | string;
    /** The text of the user input. This string cannot contain carriage return, newline, or tab characters. */
    text?: string;
    /** Intents to use when evaluating the user input. Include intents from the previous response to continue using
     *  those intents rather than trying to recognize intents in the new input.
     */
    intents?: RuntimeIntent[];
    /** Entities to use when evaluating the message. Include entities from the previous response to continue using
     *  those entities rather than detecting entities in the new input.
     */
    entities?: RuntimeEntity[];
    /** For internal use only. */
    suggestion_id?: string;
    /** An array of multimedia attachments to be sent with the message. Attachments are not processed by the
     *  assistant itself, but can be sent to external services by webhooks.
     *
     *   **Note:** Attachments are not supported on IBM Cloud Pak for Data.
     */
    attachments?: MessageInputAttachment[];
    /** An optional object containing analytics data. Currently, this data is used only for events sent to the
     *  Segment extension.
     */
    analytics?: RequestAnalytics;
    /** Optional properties that control how the assistant responds. */
    options?: StatelessMessageInputOptions;
  }
  export namespace StatelessMessageInput {
    export namespace Constants {
      /** The type of the message: - `text`: The user input is processed normally by the assistant. - `search`: Only search results are returned. (Any dialog or action skill is bypassed.) **Note:** A `search` message results in an error if no search skill is configured for the assistant. */
      export enum MessageType {
        TEXT = 'text',
        SEARCH = 'search',
      }
    }
  }

  /**
   * Optional properties that control how the assistant responds.
   */
  export interface StatelessMessageInputOptions {
    /** Whether to restart dialog processing at the root of the dialog, regardless of any previously visited nodes.
     *  **Note:** This does not affect `turn_count` or any other context variables.
     */
    restart?: boolean;
    /** Whether to return more than one intent. Set to `true` to return all matching intents. */
    alternate_intents?: boolean;
    /** Whether custom extension callouts are executed asynchronously. Asynchronous execution means the response to
     *  the extension callout will be processed on the subsequent message call, the initial message response signals to
     *  the client that the operation may be long running. With synchronous execution the custom extension is executed
     *  and returns the response in a single message turn. **Note:** **async_callout** defaults to true for API versions
     *  earlier than 2023-06-15.
     */
    async_callout?: boolean;
    /** Spelling correction options for the message. Any options specified on an individual message override the
     *  settings configured for the skill.
     */
    spelling?: MessageInputOptionsSpelling;
    /** Whether to return additional diagnostic information. Set to `true` to return additional information in the
     *  `output.debug` property.
     */
    debug?: boolean;
  }

  /**
   * A stateless response from the watsonx Assistant service.
   */
  export interface StatelessMessageResponse {
    /** Assistant output to be rendered or processed by the client. */
    output: MessageOutput;
    /** Context data for the conversation. You can use this property to access context variables. The context is not
     *  stored by the assistant; to maintain session state, include the context from the response in the next message.
     */
    context: StatelessMessageContext;
    /** Assistant output to be rendered or processed by the client. All private data is masked or removed. */
    masked_output?: MessageOutput;
    /** An input object that includes the input text. All private data is masked or removed. */
    masked_input?: MessageInput;
    /** A string value that identifies the user who is interacting with the assistant. The client must provide a
     *  unique identifier for each individual end user who accesses the application. For user-based plans, this user ID
     *  is used to identify unique users for billing purposes. This string cannot contain carriage return, newline, or
     *  tab characters. If no value is specified in the input, **user_id** is automatically set to the value of
     *  **context.global.session_id**.
     *
     *  **Note:** This property is the same as the **user_id** property in the global system context.
     */
    user_id?: string;
  }

  /**
   * An object describing an error that occurred during processing of an asynchronous operation.
   */
  export interface StatusError {
    /** The text of the error message. */
    message?: string;
  }

  /**
   * TurnEventActionSource.
   */
  export interface TurnEventActionSource {
    /** The type of turn event. */
    type?: TurnEventActionSource.Constants.Type | string;
    /** An action that was visited during processing of the message. */
    action?: string;
    /** The title of the action. */
    action_title?: string;
    /** The condition that triggered the dialog node. */
    condition?: string;
  }
  export namespace TurnEventActionSource {
    export namespace Constants {
      /** The type of turn event. */
      export enum Type {
        ACTION = 'action',
      }
    }
  }

  /**
   * TurnEventCalloutCallout.
   */
  export interface TurnEventCalloutCallout {
    /** The type of callout. Currently, the only supported value is `integration_interaction` (for calls to
     *  extensions).
     */
    type?: TurnEventCalloutCallout.Constants.Type | string;
    /** For internal use only. */
    internal?: JsonObject;
    /** The name of the variable where the callout result is stored. */
    result_variable?: string;
    /** The request object executed to the external server specified by the extension. */
    request?: TurnEventCalloutCalloutRequest;
    /** The response object received by the external server made by the extension. */
    response?: TurnEventCalloutCalloutResponse;
  }
  export namespace TurnEventCalloutCallout {
    export namespace Constants {
      /** The type of callout. Currently, the only supported value is `integration_interaction` (for calls to extensions). */
      export enum Type {
        INTEGRATION_INTERACTION = 'integration_interaction',
      }
    }
  }

  /**
   * TurnEventCalloutCalloutRequest.
   */
  export interface TurnEventCalloutCalloutRequest {
    /** The REST method of the request. */
    method?: TurnEventCalloutCalloutRequest.Constants.Method | string;
    /** The host URL of the request call. */
    url?: string;
    /** The URL path of the request call. */
    path?: string;
    /** Any query parameters appended to the URL of the request call. */
    query_parameters?: string;
    /** Any headers included in the request call. */
    headers?: JsonObject;
    /** Contains the response of the external server or an object. In cases like timeouts or connections errors, it
     *  will contain details of why the callout to the external server failed.
     */
    body?: JsonObject;
  }
  export namespace TurnEventCalloutCalloutRequest {
    export namespace Constants {
      /** The REST method of the request. */
      export enum Method {
        GET = 'get',
        POST = 'post',
        PUT = 'put',
        DELETE = 'delete',
        PATCH = 'patch',
      }
    }
  }

  /**
   * TurnEventCalloutCalloutResponse.
   */
  export interface TurnEventCalloutCalloutResponse {
    /** The final response string. This response is a composition of every partial chunk received from the stream. */
    body?: string;
    /** The final status code of the response. */
    status_code?: number;
    /** The response from the last chunk received from the response stream. */
    last_event?: JsonObject;
  }

  /**
   * TurnEventCalloutError.
   */
  export interface TurnEventCalloutError {
    /** Any error message returned by a failed call to an external service. */
    message?: string;
  }

  /**
   * TurnEventNodeSource.
   */
  export interface TurnEventNodeSource {
    /** The type of turn event. */
    type?: TurnEventNodeSource.Constants.Type | string;
    /** A dialog node that was visited during processing of the input message. */
    dialog_node?: string;
    /** The title of the dialog node. */
    title?: string;
    /** The condition that triggered the dialog node. */
    condition?: string;
  }
  export namespace TurnEventNodeSource {
    export namespace Constants {
      /** The type of turn event. */
      export enum Type {
        DIALOG_NODE = 'dialog_node',
      }
    }
  }

  /**
   * TurnEventSearchError.
   */
  export interface TurnEventSearchError {
    /** Any error message returned by a failed call to a search skill. */
    message?: string;
  }

  /**
   * The search skill orchestration settings for the environment.
   */
  export interface UpdateEnvironmentOrchestration {
    /** Whether to fall back to a search skill when responding to messages that do not match any intent or action
     *  defined in dialog or action skills. (If no search skill is configured for the environment, this property is
     *  ignored.).
     */
    search_skill_fallback?: boolean;
  }

  /**
   * An object describing the release that is currently deployed in the environment.
   */
  export interface UpdateEnvironmentReleaseReference {
    /** The name of the deployed release. */
    release?: string;
  }

  /**
   * CompleteItem.
   */
  export interface CompleteItem extends RuntimeResponseGeneric {
    streaming_metadata: Metadata;
  }

  /**
   * An object that identifies the dialog element that generated the error message.
   */
  export interface LogMessageSourceAction extends LogMessageSource {
    /** A string that indicates the type of dialog element that generated the error message. */
    type: string;
    /** The unique identifier of the action that generated the error message. */
    action: string;
  }

  /**
   * An object that identifies the dialog element that generated the error message.
   */
  export interface LogMessageSourceDialogNode extends LogMessageSource {
    /** A string that indicates the type of dialog element that generated the error message. */
    type: string;
    /** The unique identifier of the dialog node that generated the error message. */
    dialog_node: string;
  }

  /**
   * An object that identifies the dialog element that generated the error message.
   */
  export interface LogMessageSourceHandler extends LogMessageSource {
    /** A string that indicates the type of dialog element that generated the error message. */
    type: string;
    /** The unique identifier of the action that generated the error message. */
    action: string;
    /** The unique identifier of the step that generated the error message. */
    step?: string;
    /** The unique identifier of the handler that generated the error message. */
    handler: string;
  }

  /**
   * An object that identifies the dialog element that generated the error message.
   */
  export interface LogMessageSourceStep extends LogMessageSource {
    /** A string that indicates the type of dialog element that generated the error message. */
    type: string;
    /** The unique identifier of the action that generated the error message. */
    action: string;
    /** The unique identifier of the step that generated the error message. */
    step: string;
  }

  /**
   * MessageOutputDebugTurnEventTurnEventActionFinished.
   */
  export interface MessageOutputDebugTurnEventTurnEventActionFinished extends MessageOutputDebugTurnEvent {
    /** The type of turn event. */
    event?: string;
    source?: TurnEventActionSource;
    /** The time when the action started processing the message. */
    action_start_time?: string;
    /** The type of condition (if any) that is defined for the action. */
    condition_type?: MessageOutputDebugTurnEventTurnEventActionFinished.Constants.ConditionType | string;
    /** The reason the action finished processing. */
    reason?: MessageOutputDebugTurnEventTurnEventActionFinished.Constants.Reason | string;
    /** The state of all action variables at the time the action finished. */
    action_variables?: JsonObject;
  }
  export namespace MessageOutputDebugTurnEventTurnEventActionFinished {
    export namespace Constants {
      /** The type of condition (if any) that is defined for the action. */
      export enum ConditionType {
        USER_DEFINED = 'user_defined',
        WELCOME = 'welcome',
        ANYTHING_ELSE = 'anything_else',
      }
      /** The reason the action finished processing. */
      export enum Reason {
        ALL_STEPS_DONE = 'all_steps_done',
        NO_STEPS_VISITED = 'no_steps_visited',
        ENDED_BY_STEP = 'ended_by_step',
        CONNECT_TO_AGENT = 'connect_to_agent',
        MAX_RETRIES_REACHED = 'max_retries_reached',
        FALLBACK = 'fallback',
      }
    }
  }

  /**
   * MessageOutputDebugTurnEventTurnEventActionVisited.
   */
  export interface MessageOutputDebugTurnEventTurnEventActionVisited extends MessageOutputDebugTurnEvent {
    /** The type of turn event. */
    event?: string;
    source?: TurnEventActionSource;
    /** The time when the action started processing the message. */
    action_start_time?: string;
    /** The type of condition (if any) that is defined for the action. */
    condition_type?: MessageOutputDebugTurnEventTurnEventActionVisited.Constants.ConditionType | string;
    /** The reason the action was visited. */
    reason?: MessageOutputDebugTurnEventTurnEventActionVisited.Constants.Reason | string;
    /** The variable where the result of the call to the action is stored. Included only if
     *  **reason**=`subaction_return`.
     */
    result_variable?: string;
  }
  export namespace MessageOutputDebugTurnEventTurnEventActionVisited {
    export namespace Constants {
      /** The type of condition (if any) that is defined for the action. */
      export enum ConditionType {
        USER_DEFINED = 'user_defined',
        WELCOME = 'welcome',
        ANYTHING_ELSE = 'anything_else',
      }
      /** The reason the action was visited. */
      export enum Reason {
        INTENT = 'intent',
        INVOKE_SUBACTION = 'invoke_subaction',
        SUBACTION_RETURN = 'subaction_return',
        INVOKE_EXTERNAL = 'invoke_external',
        TOPIC_SWITCH = 'topic_switch',
        TOPIC_RETURN = 'topic_return',
        AGENT_REQUESTED = 'agent_requested',
        STEP_VALIDATION_FAILED = 'step_validation_failed',
        NO_ACTION_MATCHES = 'no_action_matches',
      }
    }
  }

  /**
   * MessageOutputDebugTurnEventTurnEventCallout.
   */
  export interface MessageOutputDebugTurnEventTurnEventCallout extends MessageOutputDebugTurnEvent {
    /** The type of turn event. */
    event?: string;
    source?: TurnEventActionSource;
    callout?: TurnEventCalloutCallout;
    error?: TurnEventCalloutError;
  }

  /**
   * MessageOutputDebugTurnEventTurnEventHandlerVisited.
   */
  export interface MessageOutputDebugTurnEventTurnEventHandlerVisited extends MessageOutputDebugTurnEvent {
    /** The type of turn event. */
    event?: string;
    source?: TurnEventActionSource;
    /** The time when the action started processing the message. */
    action_start_time?: string;
  }

  /**
   * MessageOutputDebugTurnEventTurnEventNodeVisited.
   */
  export interface MessageOutputDebugTurnEventTurnEventNodeVisited extends MessageOutputDebugTurnEvent {
    /** The type of turn event. */
    event?: string;
    source?: TurnEventNodeSource;
    /** The reason the dialog node was visited. */
    reason?: MessageOutputDebugTurnEventTurnEventNodeVisited.Constants.Reason | string;
  }
  export namespace MessageOutputDebugTurnEventTurnEventNodeVisited {
    export namespace Constants {
      /** The reason the dialog node was visited. */
      export enum Reason {
        WELCOME = 'welcome',
        BRANCH_START = 'branch_start',
        TOPIC_SWITCH = 'topic_switch',
        TOPIC_RETURN = 'topic_return',
        TOPIC_SWITCH_WITHOUT_RETURN = 'topic_switch_without_return',
        JUMP = 'jump',
      }
    }
  }

  /**
   * MessageOutputDebugTurnEventTurnEventSearch.
   */
  export interface MessageOutputDebugTurnEventTurnEventSearch extends MessageOutputDebugTurnEvent {
    /** The type of turn event. */
    event?: string;
    source?: TurnEventActionSource;
    error?: TurnEventSearchError;
  }

  /**
   * MessageOutputDebugTurnEventTurnEventStepAnswered.
   */
  export interface MessageOutputDebugTurnEventTurnEventStepAnswered extends MessageOutputDebugTurnEvent {
    /** The type of turn event. */
    event?: string;
    source?: TurnEventActionSource;
    /** The type of condition (if any) that is defined for the action. */
    condition_type?: MessageOutputDebugTurnEventTurnEventStepAnswered.Constants.ConditionType | string;
    /** The time when the action started processing the message. */
    action_start_time?: string;
    /** Whether the step was answered in response to a prompt from the assistant. If this property is `false`, the
     *  user provided the answer without visiting the step.
     */
    prompted?: boolean;
  }
  export namespace MessageOutputDebugTurnEventTurnEventStepAnswered {
    export namespace Constants {
      /** The type of condition (if any) that is defined for the action. */
      export enum ConditionType {
        USER_DEFINED = 'user_defined',
        WELCOME = 'welcome',
        ANYTHING_ELSE = 'anything_else',
      }
    }
  }

  /**
   * MessageOutputDebugTurnEventTurnEventStepVisited.
   */
  export interface MessageOutputDebugTurnEventTurnEventStepVisited extends MessageOutputDebugTurnEvent {
    /** The type of turn event. */
    event?: string;
    source?: TurnEventActionSource;
    /** The type of condition (if any) that is defined for the action. */
    condition_type?: MessageOutputDebugTurnEventTurnEventStepVisited.Constants.ConditionType | string;
    /** The time when the action started processing the message. */
    action_start_time?: string;
    /** Whether the step collects a customer response. */
    has_question?: boolean;
  }
  export namespace MessageOutputDebugTurnEventTurnEventStepVisited {
    export namespace Constants {
      /** The type of condition (if any) that is defined for the action. */
      export enum ConditionType {
        USER_DEFINED = 'user_defined',
        WELCOME = 'welcome',
        ANYTHING_ELSE = 'anything_else',
      }
    }
  }

  /**
   * Non-private authentication settings for authorization-code flow.
   */
  export interface ProviderAuthenticationOAuth2FlowsProviderAuthenticationOAuth2AuthorizationCode extends ProviderAuthenticationOAuth2Flows {
    /** The token URL. */
    token_url?: string;
    /** The refresh token URL. */
    refresh_url?: string;
    /** The client authorization type. */
    client_auth_type?: ProviderAuthenticationOAuth2FlowsProviderAuthenticationOAuth2AuthorizationCode.Constants.ClientAuthType | string;
    /** The content type. */
    content_type?: string;
    /** The prefix fo the header. */
    header_prefix?: string;
    /** The authorization URL. */
    authorization_url?: string;
    /** The redirect URI. */
    redirect_uri?: string;
  }
  export namespace ProviderAuthenticationOAuth2FlowsProviderAuthenticationOAuth2AuthorizationCode {
    export namespace Constants {
      /** The client authorization type. */
      export enum ClientAuthType {
        BODY = 'Body',
        BASICAUTHHEADER = 'BasicAuthHeader',
      }
    }
  }

  /**
   * ProviderAuthenticationOAuth2FlowsProviderAuthenticationOAuth2ClientCredentials.
   */
  export interface ProviderAuthenticationOAuth2FlowsProviderAuthenticationOAuth2ClientCredentials extends ProviderAuthenticationOAuth2Flows {
    /** The token URL. */
    token_url?: string;
    /** The refresh token URL. */
    refresh_url?: string;
    /** The client authorization type. */
    client_auth_type?: ProviderAuthenticationOAuth2FlowsProviderAuthenticationOAuth2ClientCredentials.Constants.ClientAuthType | string;
    /** The content type. */
    content_type?: string;
    /** The prefix fo the header. */
    header_prefix?: string;
  }
  export namespace ProviderAuthenticationOAuth2FlowsProviderAuthenticationOAuth2ClientCredentials {
    export namespace Constants {
      /** The client authorization type. */
      export enum ClientAuthType {
        BODY = 'Body',
        BASICAUTHHEADER = 'BasicAuthHeader',
      }
    }
  }

  /**
   * Non-private authentication settings for resource owner password flow.
   */
  export interface ProviderAuthenticationOAuth2FlowsProviderAuthenticationOAuth2Password extends ProviderAuthenticationOAuth2Flows {
    /** The token URL. */
    token_url?: string;
    /** The refresh token URL. */
    refresh_url?: string;
    /** The client authorization type. */
    client_auth_type?: ProviderAuthenticationOAuth2FlowsProviderAuthenticationOAuth2Password.Constants.ClientAuthType | string;
    /** The content type. */
    content_type?: string;
    /** The prefix fo the header. */
    header_prefix?: string;
    /** The username for oauth2 authentication when the preferred flow is "password". */
    username?: ProviderAuthenticationOAuth2PasswordUsername;
  }
  export namespace ProviderAuthenticationOAuth2FlowsProviderAuthenticationOAuth2Password {
    export namespace Constants {
      /** The client authorization type. */
      export enum ClientAuthType {
        BODY = 'Body',
        BASICAUTHHEADER = 'BasicAuthHeader',
      }
    }
  }

  /**
   * The private data for basic authentication.
   */
  export interface ProviderPrivateAuthenticationBasicFlow extends ProviderPrivateAuthentication {
    /** The password for bearer authentication. */
    password?: ProviderAuthenticationTypeAndValue;
  }

  /**
   * The private data for bearer authentication.
   */
  export interface ProviderPrivateAuthenticationBearerFlow extends ProviderPrivateAuthentication {
    /** The token for bearer authentication. */
    token?: ProviderAuthenticationTypeAndValue;
  }

  /**
   * The private data for oauth2 authentication.
   */
  export interface ProviderPrivateAuthenticationOAuth2Flow extends ProviderPrivateAuthentication {
    /** Scenarios performed by the API client to fetch an access token from the authorization server. */
    flows?: ProviderPrivateAuthenticationOAuth2FlowFlows;
  }

  /**
   * Private authentication settings for client credentials flow.
   */
  export interface ProviderPrivateAuthenticationOAuth2FlowFlowsProviderPrivateAuthenticationOAuth2AuthorizationCode extends ProviderPrivateAuthenticationOAuth2FlowFlows {
    /** The client ID. */
    client_id?: string;
    /** The client secret. */
    client_secret?: string;
    /** The access token. */
    access_token?: string;
    /** The refresh token. */
    refresh_token?: string;
    /** The authorization code. */
    authorization_code?: string;
  }

  /**
   * ProviderPrivateAuthenticationOAuth2FlowFlowsProviderPrivateAuthenticationOAuth2ClientCredentials.
   */
  export interface ProviderPrivateAuthenticationOAuth2FlowFlowsProviderPrivateAuthenticationOAuth2ClientCredentials extends ProviderPrivateAuthenticationOAuth2FlowFlows {
    /** The client ID. */
    client_id?: string;
    /** The client secret. */
    client_secret?: string;
    /** The access token. */
    access_token?: string;
    /** The refresh token. */
    refresh_token?: string;
  }

  /**
   * Private authentication settings for resource owner password flow.
   */
  export interface ProviderPrivateAuthenticationOAuth2FlowFlowsProviderPrivateAuthenticationOAuth2Password extends ProviderPrivateAuthenticationOAuth2FlowFlows {
    /** The client ID. */
    client_id?: string;
    /** The client secret. */
    client_secret?: string;
    /** The access token. */
    access_token?: string;
    /** The refresh token. */
    refresh_token?: string;
    /** The password for oauth2 authentication when the preferred flow is "password". */
    password?: ProviderPrivateAuthenticationOAuth2PasswordPassword;
  }

  /**
   * RuntimeResponseGenericRuntimeResponseTypeAudio.
   */
  export interface RuntimeResponseGenericRuntimeResponseTypeAudio extends RuntimeResponseGeneric {
    /** The type of response returned by the dialog node. The specified response type must be supported by the
     *  client application or channel.
     */
    response_type: string;
    /** The `https:` URL of the audio clip. */
    source: string;
    /** The title or introductory text to show before the response. */
    title?: string;
    /** The description to show with the the response. */
    description?: string;
    /** An array of objects specifying channels for which the response is intended. If **channels** is present, the
     *  response is intended for a built-in integration and should not be handled by an API client.
     */
    channels?: ResponseGenericChannel[];
    /** For internal use only. */
    channel_options?: JsonObject;
    /** Descriptive text that can be used for screen readers or other situations where the audio player cannot be
     *  seen.
     */
    alt_text?: string;
  }

  /**
   * RuntimeResponseGenericRuntimeResponseTypeChannelTransfer.
   */
  export interface RuntimeResponseGenericRuntimeResponseTypeChannelTransfer extends RuntimeResponseGeneric {
    /** The type of response returned by the dialog node. The specified response type must be supported by the
     *  client application or channel.
     *
     *   **Note:** The `channel_transfer` response type is not supported on IBM Cloud Pak for Data.
     */
    response_type: string;
    /** The message to display to the user when initiating a channel transfer. */
    message_to_user: string;
    /** Information used by an integration to transfer the conversation to a different channel. */
    transfer_info: ChannelTransferInfo;
    /** An array of objects specifying channels for which the response is intended. If **channels** is present, the
     *  response is intended for a built-in integration and should not be handled by an API client.
     */
    channels?: ResponseGenericChannel[];
  }

  /**
   * RuntimeResponseGenericRuntimeResponseTypeConnectToAgent.
   */
  export interface RuntimeResponseGenericRuntimeResponseTypeConnectToAgent extends RuntimeResponseGeneric {
    /** The type of response returned by the dialog node. The specified response type must be supported by the
     *  client application or channel.
     */
    response_type: string;
    /** A message to be sent to the human agent who will be taking over the conversation. */
    message_to_human_agent?: string;
    /** An optional message to be displayed to the user to indicate that the conversation will be transferred to the
     *  next available agent.
     */
    agent_available?: AgentAvailabilityMessage;
    /** An optional message to be displayed to the user to indicate that no online agent is available to take over
     *  the conversation.
     */
    agent_unavailable?: AgentAvailabilityMessage;
    /** Routing or other contextual information to be used by target service desk systems. */
    transfer_info?: DialogNodeOutputConnectToAgentTransferInfo;
    /** A label identifying the topic of the conversation, derived from the **title** property of the relevant node
     *  or the **topic** property of the dialog node response.
     */
    topic?: string;
    /** An array of objects specifying channels for which the response is intended. If **channels** is present, the
     *  response is intended for a built-in integration and should not be handled by an API client.
     */
    channels?: ResponseGenericChannel[];
  }

  /**
   * RuntimeResponseGenericRuntimeResponseTypeDate.
   */
  export interface RuntimeResponseGenericRuntimeResponseTypeDate extends RuntimeResponseGeneric {
    /** The type of response returned by the dialog node. The specified response type must be supported by the
     *  client application or channel.
     */
    response_type: string;
  }

  /**
   * RuntimeResponseGenericRuntimeResponseTypeIframe.
   */
  export interface RuntimeResponseGenericRuntimeResponseTypeIframe extends RuntimeResponseGeneric {
    /** The type of response returned by the dialog node. The specified response type must be supported by the
     *  client application or channel.
     */
    response_type: string;
    /** The `https:` URL of the embeddable content. */
    source: string;
    /** The title or introductory text to show before the response. */
    title?: string;
    /** The description to show with the the response. */
    description?: string;
    /** The URL of an image that shows a preview of the embedded content. */
    image_url?: string;
    /** An array of objects specifying channels for which the response is intended. If **channels** is present, the
     *  response is intended for a built-in integration and should not be handled by an API client.
     */
    channels?: ResponseGenericChannel[];
  }

  /**
   * RuntimeResponseGenericRuntimeResponseTypeImage.
   */
  export interface RuntimeResponseGenericRuntimeResponseTypeImage extends RuntimeResponseGeneric {
    /** The type of response returned by the dialog node. The specified response type must be supported by the
     *  client application or channel.
     */
    response_type: string;
    /** The `https:` URL of the image. */
    source: string;
    /** The title to show before the response. */
    title?: string;
    /** The description to show with the the response. */
    description?: string;
    /** An array of objects specifying channels for which the response is intended. If **channels** is present, the
     *  response is intended for a built-in integration and should not be handled by an API client.
     */
    channels?: ResponseGenericChannel[];
    /** Descriptive text that can be used for screen readers or other situations where the image cannot be seen. */
    alt_text?: string;
  }

  /**
   * RuntimeResponseGenericRuntimeResponseTypeOption.
   */
  export interface RuntimeResponseGenericRuntimeResponseTypeOption extends RuntimeResponseGeneric {
    /** The type of response returned by the dialog node. The specified response type must be supported by the
     *  client application or channel.
     */
    response_type: string;
    /** The title or introductory text to show before the response. */
    title: string;
    /** The description to show with the the response. */
    description?: string;
    /** The preferred type of control to display. */
    preference?: RuntimeResponseGenericRuntimeResponseTypeOption.Constants.Preference | string;
    /** An array of objects describing the options from which the user can choose. */
    options: DialogNodeOutputOptionsElement[];
    /** An array of objects specifying channels for which the response is intended. If **channels** is present, the
     *  response is intended for a built-in integration and should not be handled by an API client.
     */
    channels?: ResponseGenericChannel[];
  }
  export namespace RuntimeResponseGenericRuntimeResponseTypeOption {
    export namespace Constants {
      /** The preferred type of control to display. */
      export enum Preference {
        DROPDOWN = 'dropdown',
        BUTTON = 'button',
      }
    }
  }

  /**
   * RuntimeResponseGenericRuntimeResponseTypePause.
   */
  export interface RuntimeResponseGenericRuntimeResponseTypePause extends RuntimeResponseGeneric {
    /** The type of response returned by the dialog node. The specified response type must be supported by the
     *  client application or channel.
     */
    response_type: string;
    /** How long to pause, in milliseconds. */
    time: number;
    /** Whether to send a "user is typing" event during the pause. */
    typing?: boolean;
    /** An array of objects specifying channels for which the response is intended. If **channels** is present, the
     *  response is intended for a built-in integration and should not be handled by an API client.
     */
    channels?: ResponseGenericChannel[];
  }

  /**
   * RuntimeResponseGenericRuntimeResponseTypeSearch.
   */
  export interface RuntimeResponseGenericRuntimeResponseTypeSearch extends RuntimeResponseGeneric {
    /** The type of response returned by the dialog node. The specified response type must be supported by the
     *  client application or channel.
     */
    response_type: string;
    /** The title or introductory text to show before the response. This text is defined in the search skill
     *  configuration.
     */
    header: string;
    /** An array of objects that contains the search results to be displayed in the initial response to the user. */
    primary_results: SearchResult[];
    /** An array of objects that contains additional search results that can be displayed to the user upon request. */
    additional_results: SearchResult[];
    /** An array of objects specifying channels for which the response is intended. If **channels** is present, the
     *  response is intended for a built-in integration and should not be handled by an API client.
     */
    channels?: ResponseGenericChannel[];
  }

  /**
   * RuntimeResponseGenericRuntimeResponseTypeSuggestion.
   */
  export interface RuntimeResponseGenericRuntimeResponseTypeSuggestion extends RuntimeResponseGeneric {
    /** The type of response returned by the dialog node. The specified response type must be supported by the
     *  client application or channel.
     */
    response_type: string;
    /** The title or introductory text to show before the response. */
    title: string;
    /** An array of objects describing the possible matching dialog nodes from which the user can choose. */
    suggestions: DialogSuggestion[];
    /** An array of objects specifying channels for which the response is intended. If **channels** is present, the
     *  response is intended for a built-in integration and should not be handled by an API client.
     */
    channels?: ResponseGenericChannel[];
  }

  /**
   * RuntimeResponseGenericRuntimeResponseTypeText.
   */
  export interface RuntimeResponseGenericRuntimeResponseTypeText extends RuntimeResponseGeneric {
    /** The type of response returned by the dialog node. The specified response type must be supported by the
     *  client application or channel.
     */
    response_type: string;
    /** The text of the response. */
    text: string;
    /** An array of objects specifying channels for which the response is intended. If **channels** is present, the
     *  response is intended for a built-in integration and should not be handled by an API client.
     */
    channels?: ResponseGenericChannel[];
  }

  /**
   * RuntimeResponseGenericRuntimeResponseTypeUserDefined.
   */
  export interface RuntimeResponseGenericRuntimeResponseTypeUserDefined extends RuntimeResponseGeneric {
    /** The type of response returned by the dialog node. The specified response type must be supported by the
     *  client application or channel.
     */
    response_type: string;
    /** An object containing any properties for the user-defined response type. */
    user_defined: JsonObject;
    /** An array of objects specifying channels for which the response is intended. If **channels** is present, the
     *  response is intended for a built-in integration and should not be handled by an API client.
     */
    channels?: ResponseGenericChannel[];
  }

  /**
   * RuntimeResponseGenericRuntimeResponseTypeVideo.
   */
  export interface RuntimeResponseGenericRuntimeResponseTypeVideo extends RuntimeResponseGeneric {
    /** The type of response returned by the dialog node. The specified response type must be supported by the
     *  client application or channel.
     */
    response_type: string;
    /** The `https:` URL of the video. */
    source: string;
    /** The title or introductory text to show before the response. */
    title?: string;
    /** The description to show with the the response. */
    description?: string;
    /** An array of objects specifying channels for which the response is intended. If **channels** is present, the
     *  response is intended for a built-in integration and should not be handled by an API client.
     */
    channels?: ResponseGenericChannel[];
    /** For internal use only. */
    channel_options?: JsonObject;
    /** Descriptive text that can be used for screen readers or other situations where the video cannot be seen. */
    alt_text?: string;
  }
}

export = AssistantV2;
