import { HeaderBag, HttpMessage, HttpRequest as IHttpRequest, QueryParameterBag, URI } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
type HttpRequestOptions = Partial<HttpMessage> & Partial<URI> & {
    method?: string;
};
export interface HttpRequest extends IHttpRequest {
}
export declare class HttpRequest implements HttpMessage, URI {
    method: string;
    protocol: string;
    hostname: string;
    port?: number;
    path: string;
    query: QueryParameterBag;
    headers: HeaderBag;
    username?: string;
    password?: string;
    fragment?: string;
    body?: any;
    constructor(options: HttpRequestOptions);
    static isInstance(request: unknown): request is HttpRequest;
    clone(): HttpRequest;
}
export {};
