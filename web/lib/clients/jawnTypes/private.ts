type JsonValue = string | number | boolean | null | JsonArray | JsonObject;
interface JsonArray extends Array<JsonValue> {}
interface JsonObject { [key: string]: JsonValue; }

/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/v1/prompt/query": {
    post: operations["GetPrompts"];
  };
  "/v1/prompt/{promptId}/query": {
    post: operations["GetPrompt"];
  };
  "/v1/prompt/{promptId}": {
    delete: operations["DeletePrompt"];
  };
  "/v1/prompt/version/{promptVersionId}/subversion": {
    post: operations["CreateSubversion"];
  };
  "/v1/prompt/version/{promptVersionId}/inputs/query": {
    post: operations["GetInputs"];
  };
  "/v1/prompt/{promptId}/versions/query": {
    post: operations["GetPromptVersions"];
  };
  "/v1/settings/query": {
    get: operations["GetSettings"];
  };
  "/v1/organization/create": {
    post: operations["CreateNewOrganization"];
  };
  "/v1/organization/{organizationId}/update": {
    post: operations["UpdateOrganization"];
  };
  "/v1/organization/{organizationId}/add_member": {
    post: operations["AddMemberToOrganization"];
  };
  "/v1/organization/{organizationId}/create_filter": {
    post: operations["CreateOrganizationFilter"];
  };
  "/v1/organization/{organizationId}/update_filter": {
    post: operations["UpdateOrganizationFilter"];
  };
  "/v1/organization/delete": {
    delete: operations["DeleteOrganization"];
  };
  "/v1/organization/{organizationId}/layout": {
    get: operations["GetOrganizationLayout"];
  };
  "/v1/organization/{organizationId}/members": {
    get: operations["GetOrganizationMembers"];
  };
  "/v1/organization/{organizationId}/update_member": {
    post: operations["UpdateOrganizationMember"];
  };
  "/v1/organization/{organizationId}/owner": {
    get: operations["GetOrganizationOwner"];
  };
  "/v1/organization/{organizationId}/remove_member": {
    delete: operations["RemoveMemberFromOrganization"];
  };
  "/v1/log/request": {
    post: operations["GetRequests"];
  };
  "/v1/key/generateHash": {
    post: operations["GenerateHash"];
  };
  "/v1/dataset/{datasetId}/fine-tune": {
    post: operations["DatasetFineTune"];
  };
  "/v1/fine-tune": {
    post: operations["FineTune"];
  };
  "/v1/fine-tune/{jobId}/stats": {
    get: operations["FineTuneJobStats"];
  };
  "/v1/admin/orgs/top": {
    post: operations["GetTopOrgs"];
  };
  "/v1/admin/admins/query": {
    get: operations["GetAdmins"];
  };
  "/v1/admin/settings/{name}": {
    get: operations["GetSetting"];
  };
  "/v1/admin/azure/run-test": {
    post: operations["AzureTest"];
  };
  "/v1/admin/settings": {
    post: operations["UpdateSetting"];
  };
  "/v1/admin/orgs/query": {
    post: operations["FindAllOrgs"];
  };
  "/v1/admin/admins/org/query": {
    post: operations["AddAdminsToOrg"];
  };
  "/v1/admin/alert_banners": {
    post: operations["CreateAlertBanner"];
    patch: operations["UpdateAlertBanner"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    PromptsResult: {
      id: string;
      user_defined_id: string;
      description: string;
      pretty_name: string;
      created_at: string;
      /** Format: double */
      major_version: number;
    };
    "ResultSuccess_PromptsResult-Array_": {
      data: components["schemas"]["PromptsResult"][];
      /** @enum {number|null} */
      error: null;
    };
    ResultError_string_: {
      /** @enum {number|null} */
      data: null;
      error: string;
    };
    "Result_PromptsResult-Array.string_": components["schemas"]["ResultSuccess_PromptsResult-Array_"] | components["schemas"]["ResultError_string_"];
    /** @description Make all properties in T optional */
    Partial_TextOperators_: {
      "not-equals"?: string;
      equals?: string;
      like?: string;
      ilike?: string;
      contains?: string;
      "not-contains"?: string;
    };
    /** @description Make all properties in T optional */
    Partial_PromptToOperators_: {
      id?: components["schemas"]["Partial_TextOperators_"];
      user_defined_id?: components["schemas"]["Partial_TextOperators_"];
    };
    /** @description From T, pick a set of properties whose keys are in the union K */
    "Pick_FilterLeaf.prompt_v2_": {
      prompt_v2?: components["schemas"]["Partial_PromptToOperators_"];
    };
    FilterLeafSubset_prompt_v2_: components["schemas"]["Pick_FilterLeaf.prompt_v2_"];
    PromptsFilterNode: components["schemas"]["FilterLeafSubset_prompt_v2_"] | components["schemas"]["PromptsFilterBranch"] | "all";
    PromptsFilterBranch: {
      right: components["schemas"]["PromptsFilterNode"];
      /** @enum {string} */
      operator: "or" | "and";
      left: components["schemas"]["PromptsFilterNode"];
    };
    PromptsQueryParams: {
      filter: components["schemas"]["PromptsFilterNode"];
    };
    PromptResult: {
      id: string;
      user_defined_id: string;
      description: string;
      pretty_name: string;
      /** Format: double */
      major_version: number;
      latest_version_id: string;
      latest_model_used: string;
      created_at: string;
      last_used: string;
      versions: string[];
    };
    ResultSuccess_PromptResult_: {
      data: components["schemas"]["PromptResult"];
      /** @enum {number|null} */
      error: null;
    };
    "Result_PromptResult.string_": components["schemas"]["ResultSuccess_PromptResult_"] | components["schemas"]["ResultError_string_"];
    PromptQueryParams: {
      timeFilter: {
        end: string;
        start: string;
      };
    };
    PromptVersionResult: {
      id: string;
      /** Format: double */
      minor_version: number;
      /** Format: double */
      major_version: number;
      helicone_template: string;
      prompt_v2: string;
      model: string;
    };
    ResultSuccess_PromptVersionResult_: {
      data: components["schemas"]["PromptVersionResult"];
      /** @enum {number|null} */
      error: null;
    };
    "Result_PromptVersionResult.string_": components["schemas"]["ResultSuccess_PromptVersionResult_"] | components["schemas"]["ResultError_string_"];
    PromptCreateSubversionParams: {
      newHeliconeTemplate: unknown;
    };
    /** @description Construct a type with a set of properties K of type T */
    "Record_string.string_": {
      [key: string]: string;
    };
    PromptInputRecord: {
      id: string;
      inputs: components["schemas"]["Record_string.string_"];
      source_request: string;
      prompt_version: string;
      created_at: string;
      response_body: string;
    };
    "ResultSuccess_PromptInputRecord-Array_": {
      data: components["schemas"]["PromptInputRecord"][];
      /** @enum {number|null} */
      error: null;
    };
    "Result_PromptInputRecord-Array.string_": components["schemas"]["ResultSuccess_PromptInputRecord-Array_"] | components["schemas"]["ResultError_string_"];
    "ResultSuccess_PromptVersionResult-Array_": {
      data: components["schemas"]["PromptVersionResult"][];
      /** @enum {number|null} */
      error: null;
    };
    "Result_PromptVersionResult-Array.string_": components["schemas"]["ResultSuccess_PromptVersionResult-Array_"] | components["schemas"]["ResultError_string_"];
    ResultSuccess_null_: {
      /** @enum {number|null} */
      data: null;
      /** @enum {number|null} */
      error: null;
    };
    "Result_null.string_": components["schemas"]["ResultSuccess_null_"] | components["schemas"]["ResultError_string_"];
Json: JsonObject;
    NewOrganizationParams: {
      tier?: string | null;
      subscription_status?: string | null;
      stripe_subscription_item_id?: string | null;
      stripe_subscription_id?: string | null;
      stripe_customer_id?: string | null;
      soft_delete?: boolean;
      size?: string | null;
      reseller_id?: string | null;
      /** Format: double */
      request_limit?: number | null;
      referral?: string | null;
      /** Format: double */
      percent_to_log?: number | null;
      owner: string;
      organization_type?: string;
      org_provider_key?: string | null;
      name: string;
      logo_path?: string | null;
      limits?: components["schemas"]["Json"] | null;
      is_personal?: boolean;
      id?: string;
      icon?: string;
      has_onboarded?: boolean;
      domain?: string | null;
      created_at?: string | null;
      color?: string;
    };
    /** @description From T, pick a set of properties whose keys are in the union K */
    "Pick_NewOrganizationParams.name-or-color-or-icon-or-org_provider_key-or-limits-or-reseller_id-or-organization_type_": {
      name: string;
      color?: string;
      icon?: string;
      org_provider_key?: string;
      limits?: components["schemas"]["Json"];
      reseller_id?: string;
      organization_type?: string;
    };
    UpdateOrganizationParams: components["schemas"]["Pick_NewOrganizationParams.name-or-color-or-icon-or-org_provider_key-or-limits-or-reseller_id-or-organization_type_"] & {
      variant?: string;
    };
    FilterRow: {
      value: string;
      /** Format: double */
      operatorIdx: number;
      /** Format: double */
      filterMapIdx: number;
    };
    OrganizationFilter: {
      softDelete: boolean;
      createdAt?: string;
      filter: components["schemas"]["FilterRow"][];
      name: string;
      id: string;
    };
    OrganizationLayout: {
      filters: components["schemas"]["OrganizationFilter"][];
      type: string;
      organization_id: string;
      id: string;
    };
    ResultSuccess_OrganizationLayout_: {
      data: components["schemas"]["OrganizationLayout"];
      /** @enum {number|null} */
      error: null;
    };
    "Result_OrganizationLayout.string_": components["schemas"]["ResultSuccess_OrganizationLayout_"] | components["schemas"]["ResultError_string_"];
    OrganizationMember: {
      org_role: string;
      member: string;
      email: string;
    };
    "ResultSuccess_OrganizationMember-Array_": {
      data: components["schemas"]["OrganizationMember"][];
      /** @enum {number|null} */
      error: null;
    };
    "Result_OrganizationMember-Array.string_": components["schemas"]["ResultSuccess_OrganizationMember-Array_"] | components["schemas"]["ResultError_string_"];
    OrganizationOwner: {
      tier: string;
      email: string;
    };
    "ResultSuccess_OrganizationOwner-Array_": {
      data: components["schemas"]["OrganizationOwner"][];
      /** @enum {number|null} */
      error: null;
    };
    "Result_OrganizationOwner-Array.string_": components["schemas"]["ResultSuccess_OrganizationOwner-Array_"] | components["schemas"]["ResultError_string_"];
    HeliconeMeta: {
      posthogHost?: string;
      posthogApiKey?: string;
      webhookEnabled: boolean;
      omitResponseLog: boolean;
      omitRequestLog: boolean;
      modelOverride?: string;
    };
    Provider: string | ("OPENAI" | "ANTHROPIC" | "CUSTOM");
    TemplateWithInputs: {
      template: Record<string, never>;
      inputs: {
        [key: string]: string;
      };
    };
    Log: {
      response: {
        /** Format: double */
        delayMs: number;
        /** Format: date-time */
        responseCreatedAt: string;
        /** Format: double */
        timeToFirstToken?: number;
        /** Format: double */
        bodySize: number;
        /** Format: double */
        status: number;
        id: string;
      };
      request: {
        heliconeTemplate?: components["schemas"]["TemplateWithInputs"];
        isStream: boolean;
        /** Format: date-time */
        requestCreatedAt: string;
        countryCode?: string;
        threat?: boolean;
        path: string;
        /** Format: double */
        bodySize: number;
        provider: components["schemas"]["Provider"];
        targetUrl: string;
        heliconeProxyKeyId?: string;
        /** Format: double */
        heliconeApiKeyId?: number;
        properties: components["schemas"]["Record_string.string_"];
        promptVersion?: string;
        promptId?: string;
        userId: string;
        id: string;
      };
    };
    Message: {
      log: components["schemas"]["Log"];
      heliconeMeta: components["schemas"]["HeliconeMeta"];
      authorization: string;
    };
    /** @enum {string} */
    KeyPermissions: "w" | "rw";
    GenerateHashQueryParams: {
      apiKey: string;
      userId: string;
      keyName: string;
      permissions: components["schemas"]["KeyPermissions"];
    };
    FineTuneResult: {
      error: string;
    } | {
      data: {
        url: string;
        fineTuneJob: string;
      };
      success: boolean;
    };
    FineTuneBodyParams: {
      providerKeyId: string;
    };
    FineTuneBody: {
      providerKeyId: string;
    };
    KafkaSettings: {
      /** Format: double */
      miniBatchSize: number;
    };
    AzureExperiment: {
      azureBaseUri: string;
      azureApiVersion: string;
      azureDeploymentName: string;
      azureApiKey: string;
    };
    Setting: components["schemas"]["KafkaSettings"] | components["schemas"]["AzureExperiment"];
    /** @enum {string} */
    SettingName: "kafka:dlq" | "kafka:log" | "kafka:dlq:eu" | "kafka:log:eu" | "kafka:orgs-to-dlq" | "azure:experiment";
    /**
     * @description The URL interface represents an object providing static methods used for creating object URLs.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL)
     * `URL` class is a global reference for `require('url').URL`
     * https://nodejs.org/api/url.html#the-whatwg-url-api
     */
    "url.URL": string;
  };
  responses: {
  };
  parameters: {
  };
  requestBodies: {
  };
  headers: {
  };
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  GetPrompts: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["PromptsQueryParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptsResult-Array.string_"];
        };
      };
    };
  };
  GetPrompt: {
    parameters: {
      path: {
        promptId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PromptQueryParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptResult.string_"];
        };
      };
    };
  };
  DeletePrompt: {
    parameters: {
      path: {
        promptId: string;
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
  CreateSubversion: {
    parameters: {
      path: {
        promptVersionId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PromptCreateSubversionParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptVersionResult.string_"];
        };
      };
    };
  };
  GetInputs: {
    parameters: {
      path: {
        promptVersionId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          random?: boolean;
          /** Format: double */
          limit: number;
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptInputRecord-Array.string_"];
        };
      };
    };
  };
  GetPromptVersions: {
    parameters: {
      path: {
        promptId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": Record<string, never>;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptVersionResult-Array.string_"];
        };
      };
    };
  };
  GetSettings: {
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            useAzureForExperiment: boolean;
          };
        };
      };
    };
  };
  CreateNewOrganization: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["NewOrganizationParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_null.string_"];
        };
      };
    };
  };
  UpdateOrganization: {
    parameters: {
      path: {
        organizationId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateOrganizationParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_null.string_"];
        };
      };
    };
  };
  AddMemberToOrganization: {
    parameters: {
      path: {
        organizationId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          email: string;
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_null.string_"];
        };
      };
    };
  };
  CreateOrganizationFilter: {
    parameters: {
      path: {
        organizationId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          /** @enum {string} */
          filterType: "dashboard" | "requests";
          filters: components["schemas"]["OrganizationFilter"][];
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_null.string_"];
        };
      };
    };
  };
  UpdateOrganizationFilter: {
    parameters: {
      path: {
        organizationId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          /** @enum {string} */
          filterType: "dashboard" | "requests";
          filters: components["schemas"]["OrganizationFilter"][];
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_null.string_"];
        };
      };
    };
  };
  DeleteOrganization: {
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_null.string_"];
        };
      };
    };
  };
  GetOrganizationLayout: {
    parameters: {
      query: {
        filterType: string;
      };
      path: {
        organizationId: string;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_OrganizationLayout.string_"];
        };
      };
    };
  };
  GetOrganizationMembers: {
    parameters: {
      path: {
        organizationId: string;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_OrganizationMember-Array.string_"];
        };
      };
    };
  };
  UpdateOrganizationMember: {
    parameters: {
      path: {
        organizationId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          memberId: string;
          role: string;
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_null.string_"];
        };
      };
    };
  };
  GetOrganizationOwner: {
    parameters: {
      path: {
        organizationId: string;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_OrganizationOwner-Array.string_"];
        };
      };
    };
  };
  RemoveMemberFromOrganization: {
    parameters: {
      query: {
        memberId: string;
      };
      path: {
        organizationId: string;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_null.string_"];
        };
      };
    };
  };
  GetRequests: {
    /** @description Log message to log */
    requestBody: {
      content: {
        "application/json": components["schemas"]["Message"];
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
  GenerateHash: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["GenerateHashQueryParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            error?: {
              details?: string;
              message?: string;
            };
            success?: boolean;
          };
        };
      };
    };
  };
  DatasetFineTune: {
    parameters: {
      path: {
        datasetId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["FineTuneBodyParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["FineTuneResult"];
        };
      };
    };
  };
  FineTune: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["FineTuneBody"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            error: string;
          } | {
            data: {
              url: string;
              fineTuneJob: string;
            };
            success: boolean;
          };
        };
      };
    };
  };
  FineTuneJobStats: {
    parameters: {
      path: {
        jobId: string;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            error: string;
          } | {
            events: unknown;
            job: unknown;
          };
        };
      };
    };
  };
  GetTopOrgs: {
    requestBody: {
      content: {
        "application/json": {
          emailContains?: string[];
          orgsNameContains?: string[];
          orgsId?: string[];
          /** @enum {string} */
          tier: "all" | "pro" | "free" | "growth" | "enterprise";
          endDate: string;
          startDate: string;
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
              /** Format: double */
              ct: number;
              organization_id: string;
              members: {
                  last_active: string;
                  role: string;
                  email: string;
                  id: string;
                }[];
              name: string;
              owner_last_login: string;
              owner_email: string;
              tier: string;
              id: string;
              overTime: {
                  organization_id: string;
                  dt: string;
                  /** Format: double */
                  count: number;
                }[];
            }[];
        };
      };
    };
  };
  GetAdmins: {
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": ({
              user_id: string | null;
              user_email: string | null;
              /** Format: double */
              id: number;
              created_at: string;
            })[];
        };
      };
    };
  };
  GetSetting: {
    parameters: {
      path: {
        name: components["schemas"]["SettingName"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Setting"];
        };
      };
    };
  };
  AzureTest: {
    requestBody: {
      content: {
        "application/json": {
          requestBody: unknown;
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            fetchParams: {
              body: string;
              headers: {
                [key: string]: string;
              };
              url: components["schemas"]["url.URL"];
            };
            resultText: string;
          };
        };
      };
    };
  };
  UpdateSetting: {
    requestBody: {
      content: {
        "application/json": {
          settings: components["schemas"]["Setting"];
          name: components["schemas"]["SettingName"];
        };
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
  FindAllOrgs: {
    requestBody: {
      content: {
        "application/json": {
          orgName: string;
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            orgs: {
                id: string;
                name: string;
              }[];
          };
        };
      };
    };
  };
  AddAdminsToOrg: {
    requestBody: {
      content: {
        "application/json": {
          adminIds: string[];
          orgId: string;
        };
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
  CreateAlertBanner: {
    requestBody: {
      content: {
        "application/json": {
          message: string;
          title: string;
        };
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
  UpdateAlertBanner: {
    requestBody: {
      content: {
        "application/json": {
          active: boolean;
          /** Format: double */
          id: number;
        };
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
}
