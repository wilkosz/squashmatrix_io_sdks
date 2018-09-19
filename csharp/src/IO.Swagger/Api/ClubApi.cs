/* 
 * Sqaush Matrix API
 *
 * v1 documentation
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using RestSharp;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace IO.Swagger.Api
{
    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IClubApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Find club by ID
        /// </summary>
        /// <remarks>
        /// Returns a single club if the request has access
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of club to fetch</param>
        /// <returns>Club</returns>
        Club FindClubById (long? id);

        /// <summary>
        /// Find club by ID
        /// </summary>
        /// <remarks>
        /// Returns a single club if the request has access
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of club to fetch</param>
        /// <returns>ApiResponse of Club</returns>
        ApiResponse<Club> FindClubByIdWithHttpInfo (long? id);
        /// <summary>
        /// All clubs
        /// </summary>
        /// <remarks>
        /// Returns page of clubs if the request has access
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page">page number (optional)</param>
        /// <param name="pageSize">number of results per page (optional)</param>
        /// <returns>List&lt;Club&gt;</returns>
        List<Club> FindClubs (int? page = null, int? pageSize = null);

        /// <summary>
        /// All clubs
        /// </summary>
        /// <remarks>
        /// Returns page of clubs if the request has access
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page">page number (optional)</param>
        /// <param name="pageSize">number of results per page (optional)</param>
        /// <returns>ApiResponse of List&lt;Club&gt;</returns>
        ApiResponse<List<Club>> FindClubsWithHttpInfo (int? page = null, int? pageSize = null);
        #endregion Synchronous Operations
        #region Asynchronous Operations
        /// <summary>
        /// Find club by ID
        /// </summary>
        /// <remarks>
        /// Returns a single club if the request has access
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of club to fetch</param>
        /// <returns>Task of Club</returns>
        System.Threading.Tasks.Task<Club> FindClubByIdAsync (long? id);

        /// <summary>
        /// Find club by ID
        /// </summary>
        /// <remarks>
        /// Returns a single club if the request has access
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of club to fetch</param>
        /// <returns>Task of ApiResponse (Club)</returns>
        System.Threading.Tasks.Task<ApiResponse<Club>> FindClubByIdAsyncWithHttpInfo (long? id);
        /// <summary>
        /// All clubs
        /// </summary>
        /// <remarks>
        /// Returns page of clubs if the request has access
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page">page number (optional)</param>
        /// <param name="pageSize">number of results per page (optional)</param>
        /// <returns>Task of List&lt;Club&gt;</returns>
        System.Threading.Tasks.Task<List<Club>> FindClubsAsync (int? page = null, int? pageSize = null);

        /// <summary>
        /// All clubs
        /// </summary>
        /// <remarks>
        /// Returns page of clubs if the request has access
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page">page number (optional)</param>
        /// <param name="pageSize">number of results per page (optional)</param>
        /// <returns>Task of ApiResponse (List&lt;Club&gt;)</returns>
        System.Threading.Tasks.Task<ApiResponse<List<Club>>> FindClubsAsyncWithHttpInfo (int? page = null, int? pageSize = null);
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class ClubApi : IClubApi
    {
        private IO.Swagger.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="ClubApi"/> class.
        /// </summary>
        /// <returns></returns>
        public ClubApi(String basePath)
        {
            this.Configuration = new Configuration { BasePath = basePath };

            ExceptionFactory = IO.Swagger.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ClubApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public ClubApi(Configuration configuration = null)
        {
            if (configuration == null) // use the default one in Configuration
                this.Configuration = Configuration.Default;
            else
                this.Configuration = configuration;

            ExceptionFactory = IO.Swagger.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public String GetBasePath()
        {
            return this.Configuration.ApiClient.RestClient.BaseUrl.ToString();
        }

        /// <summary>
        /// Sets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        [Obsolete("SetBasePath is deprecated, please do 'Configuration.ApiClient = new ApiClient(\"http://new-path\")' instead.")]
        public void SetBasePath(String basePath)
        {
            // do nothing
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public Configuration Configuration {get; set;}

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public IO.Swagger.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// Gets the default header.
        /// </summary>
        /// <returns>Dictionary of HTTP header</returns>
        [Obsolete("DefaultHeader is deprecated, please use Configuration.DefaultHeader instead.")]
        public IDictionary<String, String> DefaultHeader()
        {
            return new ReadOnlyDictionary<string, string>(this.Configuration.DefaultHeader);
        }

        /// <summary>
        /// Add default header.
        /// </summary>
        /// <param name="key">Header field name.</param>
        /// <param name="value">Header field value.</param>
        /// <returns></returns>
        [Obsolete("AddDefaultHeader is deprecated, please use Configuration.AddDefaultHeader instead.")]
        public void AddDefaultHeader(string key, string value)
        {
            this.Configuration.AddDefaultHeader(key, value);
        }

        /// <summary>
        /// Find club by ID Returns a single club if the request has access
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of club to fetch</param>
        /// <returns>Club</returns>
        public Club FindClubById (long? id)
        {
             ApiResponse<Club> localVarResponse = FindClubByIdWithHttpInfo(id);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Find club by ID Returns a single club if the request has access
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of club to fetch</param>
        /// <returns>ApiResponse of Club</returns>
        public ApiResponse< Club > FindClubByIdWithHttpInfo (long? id)
        {
            // verify the required parameter 'id' is set
            if (id == null)
                throw new ApiException(400, "Missing required parameter 'id' when calling ClubApi->FindClubById");

            var localVarPath = "/clubs/{id}";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (id != null) localVarPathParams.Add("id", Configuration.ApiClient.ParameterToString(id)); // path parameter


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) Configuration.ApiClient.CallApi(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("FindClubById", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<Club>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (Club) Configuration.ApiClient.Deserialize(localVarResponse, typeof(Club)));
        }

        /// <summary>
        /// Find club by ID Returns a single club if the request has access
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of club to fetch</param>
        /// <returns>Task of Club</returns>
        public async System.Threading.Tasks.Task<Club> FindClubByIdAsync (long? id)
        {
             ApiResponse<Club> localVarResponse = await FindClubByIdAsyncWithHttpInfo(id);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Find club by ID Returns a single club if the request has access
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of club to fetch</param>
        /// <returns>Task of ApiResponse (Club)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<Club>> FindClubByIdAsyncWithHttpInfo (long? id)
        {
            // verify the required parameter 'id' is set
            if (id == null)
                throw new ApiException(400, "Missing required parameter 'id' when calling ClubApi->FindClubById");

            var localVarPath = "/clubs/{id}";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (id != null) localVarPathParams.Add("id", Configuration.ApiClient.ParameterToString(id)); // path parameter


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("FindClubById", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<Club>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (Club) Configuration.ApiClient.Deserialize(localVarResponse, typeof(Club)));
        }

        /// <summary>
        /// All clubs Returns page of clubs if the request has access
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page">page number (optional)</param>
        /// <param name="pageSize">number of results per page (optional)</param>
        /// <returns>List&lt;Club&gt;</returns>
        public List<Club> FindClubs (int? page = null, int? pageSize = null)
        {
             ApiResponse<List<Club>> localVarResponse = FindClubsWithHttpInfo(page, pageSize);
             return localVarResponse.Data;
        }

        /// <summary>
        /// All clubs Returns page of clubs if the request has access
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page">page number (optional)</param>
        /// <param name="pageSize">number of results per page (optional)</param>
        /// <returns>ApiResponse of List&lt;Club&gt;</returns>
        public ApiResponse< List<Club> > FindClubsWithHttpInfo (int? page = null, int? pageSize = null)
        {

            var localVarPath = "/clubs";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (page != null) localVarQueryParams.AddRange(Configuration.ApiClient.ParameterToKeyValuePairs("", "page", page)); // query parameter
            if (pageSize != null) localVarQueryParams.AddRange(Configuration.ApiClient.ParameterToKeyValuePairs("", "page_size", pageSize)); // query parameter


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) Configuration.ApiClient.CallApi(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("FindClubs", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<List<Club>>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (List<Club>) Configuration.ApiClient.Deserialize(localVarResponse, typeof(List<Club>)));
        }

        /// <summary>
        /// All clubs Returns page of clubs if the request has access
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page">page number (optional)</param>
        /// <param name="pageSize">number of results per page (optional)</param>
        /// <returns>Task of List&lt;Club&gt;</returns>
        public async System.Threading.Tasks.Task<List<Club>> FindClubsAsync (int? page = null, int? pageSize = null)
        {
             ApiResponse<List<Club>> localVarResponse = await FindClubsAsyncWithHttpInfo(page, pageSize);
             return localVarResponse.Data;

        }

        /// <summary>
        /// All clubs Returns page of clubs if the request has access
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page">page number (optional)</param>
        /// <param name="pageSize">number of results per page (optional)</param>
        /// <returns>Task of ApiResponse (List&lt;Club&gt;)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<List<Club>>> FindClubsAsyncWithHttpInfo (int? page = null, int? pageSize = null)
        {

            var localVarPath = "/clubs";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (page != null) localVarQueryParams.AddRange(Configuration.ApiClient.ParameterToKeyValuePairs("", "page", page)); // query parameter
            if (pageSize != null) localVarQueryParams.AddRange(Configuration.ApiClient.ParameterToKeyValuePairs("", "page_size", pageSize)); // query parameter


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("FindClubs", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<List<Club>>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (List<Club>) Configuration.ApiClient.Deserialize(localVarResponse, typeof(List<Club>)));
        }

    }
}