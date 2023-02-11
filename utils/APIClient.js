'use strict'

import * as ct from './Constants.js';
import { handleError } from "./Misc.js";
import axios from 'axios';
import qs from 'querystring';

export class APIClient {
    constructor(options) {
        const { apiKey, apiSecret, network, baseURL, idsBaseURL, logger, timeout, proxy, httpsAgent } = options;

        this.apiKey = apiKey
        this.apiSecret = apiSecret
        this.network = network || ct.NETWORKS[0];
        this.baseURL = baseURL || ct.API_BASE_URLS[this.network];
        this.idsBaseURL = idsBaseURL || ct.IDS_BASE_URLS[this.network];

        this.validateOptions(options); 

        // default is 0 (no timeout)
        this.timeout = timeout || 0
        this.proxy = proxy || false
        this.httpsAgent = httpsAgent
        // this.logger = logger || defaultLogger
        this.auth_token = Buffer.from(`${this.apiKey}:${this.apiSecret}`).toString("base64"); 
        this.accessToken = undefined;
    }
    
    async init() {
        return await this.getAccessToken().then(token => {
            this.accessToken = token;
            // console.log("APIClient.init, accessToken: ", this.accessToken);
        }).catch(err => {
            // reject(handleError(err));
            handleError(err);
        });
    }

    validateOptions(options) {
        //network
        if (!ct.NETWORKS.includes(this.network)) {
            throw "APIClient - Error - unknown network: " + this.network;
        }
    }

    getAccessToken = async () => {
        try {
            // console.log("APIClient.getAccessToken");
            const data = { grant_type: "client_credentials" };
            const options = {
                method: "POST",
                headers: {
                    "Authorization": `Basic ${this.auth_token}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                data: qs.stringify(data),
                url: this.idsBaseURL +"/connect/token",
            };
            const response = await axios(options);

            // const response = await axios.post(this.idsBaseURL +"/connect/token", qs.stringify(data), { auth: {
            //     username: this.apiKey,
            //     password: this.apiSecret
            //   }})
            const { access_token } = response.data;

            // console.log("getAccessToken Response: ", response.data);
            return access_token;
        } catch (error) {
            //on fail, log the error in console
            // console.log("getAccessToken error:", error.response.status, error.response.statusText, error.response.data);
            throw error;
        }
    }

    getRequest = async (url, access_token) => {
        try {
            if (access_token)
                var headers = {
                    'Authorization': "Bearer " + access_token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Client-Api-Key': this.apiKey
                };
            else
                headers = {
                    'Authorization': "Basic " + this.auth_token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                };

            const response = await axios({
                method: 'get',
                url: url,
                headers: headers,
            });

            return await response;

        } catch (error) {
            // console.log("getRequest error:", error.response.status, error.response.statusText);
            // console.log("ClientRequest.header: ", error.response.request._header)
            throw error;
        }
    }

    getPrivate = async (routeUrl) => {
        try {
            if (this.accessToken === undefined)
                this.accessToken = await this.getAccessToken();

            if (this.accessToken) {
                const response = await this.getRequest(this.baseURL + "/" + routeUrl, this.accessToken);

                if (response)
                    return response.data
            }
        } catch (error) {
            // console.log("getPrivate error:", error);
            throw error;
        }
    }

    getPublic = async (routeUrl) => {
        try {
            const response = await this.getRequest(this.baseURL + "/" + routeUrl);

            if (response)
                return response.data
            
        } catch (error) {
            // console.log("getPublic error:", error);
            throw error;
        }
    }
}
