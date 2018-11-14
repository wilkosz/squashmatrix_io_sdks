/**
 * Squash Matrix API
 * # Endeavor The squash matrix API enables clubs, players, and regions to own their information, with results being updated weekly. The API information sits ontop of squash matrix australia website [https://squashmatrix.com](https://squashmatrix.com) # API Aside from the documentation provided below, there is also a `{json:api}` available and can be accessed in the same manner, with the addition of the accept header `{accept: application/vnd.api+json}`. More information about json api can be viewed on their website at [http://jsonapi.org/](http://jsonapi.org/) # Squash Matrix Scrapper There is a ruby SDK for retrieving information from [https://squashmatrix.com](https://squashmatrix.com) which can be found at https://rubygems.org/gems/squash_matrix # SDK's Please stay posted! Client sdk's for the following will be provided shortly:    - Javascript   - Java   - Ruby  # Blog Find relevent and interesting media on [wilkosz.com.au](http://wilkosz.com.au) # Contact Join this endeavor and be appart of the community [https://www.facebook.com/squashmatrixapi](https://www.facebook.com/squashmatrixapi) <hr />
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiResponseErrors from '../SquashMatrixClientModel/ApiResponseErrors';
import InlineResponse200 from '../SquashMatrixClientModel/InlineResponse200';
import InlineResponse2001 from '../SquashMatrixClientModel/InlineResponse2001';
import InlineResponse2002 from '../SquashMatrixClientModel/InlineResponse2002';
import InlineResponse2003 from '../SquashMatrixClientModel/InlineResponse2003';
import InlineResponse2004 from '../SquashMatrixClientModel/InlineResponse2004';
import InlineResponse2005 from '../SquashMatrixClientModel/InlineResponse2005';

/**
* Default service.
* @module SquashMatrixClient/SquashMatrixClientAPI/DefaultApi
* @version 1.0.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:SquashMatrixClient/SquashMatrixClientAPI/DefaultApi
    * @class
    * @param {module:SquashMatrixClient/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:SquashMatrixClient/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get page of clubs
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of clubs
     * @param {Number} opts.pageSize The size of page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:SquashMatrixClient/SquashMatrixClientModel/InlineResponse200} and HTTP response
     */
    clubsGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/clubs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get page of clubs
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of clubs
     * @param {Number} opts.pageSize The size of page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:SquashMatrixClient/SquashMatrixClientModel/InlineResponse200}
     */
    clubsGet(opts) {
      return this.clubsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get club by Squash Matrix ID
     * @param {Number} squashMatrixId Squash Matrix ID of club
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:SquashMatrixClient/SquashMatrixClientModel/InlineResponse2001} and HTTP response
     */
    clubsSquashMatrixIdGetWithHttpInfo(squashMatrixId) {
      let postBody = null;

      // verify the required parameter 'squashMatrixId' is set
      if (squashMatrixId === undefined || squashMatrixId === null) {
        throw new Error("Missing the required parameter 'squashMatrixId' when calling clubsSquashMatrixIdGet");
      }


      let pathParams = {
        'squashMatrixId': squashMatrixId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/clubs/{squashMatrixId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get club by Squash Matrix ID
     * @param {Number} squashMatrixId Squash Matrix ID of club
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:SquashMatrixClient/SquashMatrixClientModel/InlineResponse2001}
     */
    clubsSquashMatrixIdGet(squashMatrixId) {
      return this.clubsSquashMatrixIdGetWithHttpInfo(squashMatrixId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get game by ID
     * @param {Number} gameId Numeric ID of game
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:SquashMatrixClient/SquashMatrixClientModel/InlineResponse2005} and HTTP response
     */
    gamesGameIdGetWithHttpInfo(gameId) {
      let postBody = null;

      // verify the required parameter 'gameId' is set
      if (gameId === undefined || gameId === null) {
        throw new Error("Missing the required parameter 'gameId' when calling gamesGameIdGet");
      }


      let pathParams = {
        'gameId': gameId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/games/{gameId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get game by ID
     * @param {Number} gameId Numeric ID of game
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:SquashMatrixClient/SquashMatrixClientModel/InlineResponse2005}
     */
    gamesGameIdGet(gameId) {
      return this.gamesGameIdGetWithHttpInfo(gameId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get page of games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of games
     * @param {Number} opts.pageSize The size of page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:SquashMatrixClient/SquashMatrixClientModel/InlineResponse2004} and HTTP response
     */
    gamesGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/games', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get page of games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of games
     * @param {Number} opts.pageSize The size of page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:SquashMatrixClient/SquashMatrixClientModel/InlineResponse2004}
     */
    gamesGet(opts) {
      return this.gamesGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get page of players
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of players
     * @param {Number} opts.pageSize The size of page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:SquashMatrixClient/SquashMatrixClientModel/InlineResponse2002} and HTTP response
     */
    playersGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/players', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get page of players
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of players
     * @param {Number} opts.pageSize The size of page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:SquashMatrixClient/SquashMatrixClientModel/InlineResponse2002}
     */
    playersGet(opts) {
      return this.playersGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get player by Squash Matrix ID
     * @param {Number} squashMatrixId Squash Matrix ID of player
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:SquashMatrixClient/SquashMatrixClientModel/InlineResponse2003} and HTTP response
     */
    playersSquashMatrixIdGetWithHttpInfo(squashMatrixId) {
      let postBody = null;

      // verify the required parameter 'squashMatrixId' is set
      if (squashMatrixId === undefined || squashMatrixId === null) {
        throw new Error("Missing the required parameter 'squashMatrixId' when calling playersSquashMatrixIdGet");
      }


      let pathParams = {
        'squashMatrixId': squashMatrixId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/players/{squashMatrixId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get player by Squash Matrix ID
     * @param {Number} squashMatrixId Squash Matrix ID of player
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:SquashMatrixClient/SquashMatrixClientModel/InlineResponse2003}
     */
    playersSquashMatrixIdGet(squashMatrixId) {
      return this.playersSquashMatrixIdGetWithHttpInfo(squashMatrixId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}