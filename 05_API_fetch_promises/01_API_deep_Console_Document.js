
// Topic-> api, api request, http, (rest+soap+graphql..), (fetch+axios), console.log, document object



// ************ API vs API request--->
// API is a set of rules, protocols and data formats that applications can use to request and exchange information.
// An API request is a specific call made to an API to retrieve or manipulate data.(Get, Post, Put, Delete request etc)

// HTTP is the underlying protocol(guides how information is exchanged between client and server), while (REST, SOAP, GraphQL..) are 
// different approaches to designing APIs for communication over HTTP. (i.e if user is sending get request then send them, if 
// making post then what to do....), while (fetch,axios) are tools/library for making http request.

// Remember most of the time API data comes in String format, must convert it to JSON format using (JSON.parse());




// ************* Various types of API's (saying API, not API request)-->
// Each API type has its own strengths and is suitable for different use cases. REST is popular due to its simplicity, scalability, 
// and ease of use, especially in web-based applications. All belwo uses http request.

// REST: Stateless, uses HTTP methods and status codes, JSON/XML for data interchange, scalable, and simple to use and implement.
// SOAP: Protocol, can be stateful, uses XML, more complex, built-in standards for security and transactions.
// GraphQL: Flexible data fetching, single endpoint, reduces over-fetching, can be complex to construct queries.
// JSON-RPC/XML-RPC: Direct method invocations, simpler protocols, stateful or stateless, less common in modern APIs.
// gRPC: High performance, uses Protocol Buffers, bi-directional streaming, strict contract, efficient serialization.




// ***************** What is REST VS axios,fetch,Xmlhttp???----->>>>
// While fetch, axios, and XMLHttpRequest are mechanisms for making HTTP requests, they are not types of API requests. 
// Instead, they are tools that allow you to perform API requests such as GET, POST, PUT, PATCH, DELETE, OPTIONS, and HEAD. 
// These HTTP methods define the actions performed by the requests made using these tools, which are essential for interacting
// with REST APIs and other above listed API's too. i.e These tools can be used to make HTTP requests to any server that follows 
// the HTTP protocol.



// Common Types of API Requests in REST:-> GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD


// Working with APIs in JavaScript involves making HTTP requests to a server to retrieve or send data. JavaScript provides 
// several ways to handle these requests, each with its own set of features and use cases. Here are the primary tools/library 
// involved in making API requests in JavaScript:->>
// 1-) Using XMLHttpRequest
// 2-) Using Fetch --> return promises, needs to handle
// 3-) Using Axios --> return promises, needs to handle
// 4-) Using Async Await with Fetch
// 5-) Using Async Await with Axios




// *********** Where does console.log() come from?
// In Browsers: console.log() is part of the Web API provided by the browser. It is implemented by the browser's JavaScript 
// engine (like V8 in Chrome).
// In Node.js: console.log() is part of the Node.js API. Node.js also uses the V8 engine, but it provides its own set of APIs, 
// including the console object.



// ************ Where does the document object come from?

// In Browsers: The document object is part of the Web API provided by the browser. It is implemented by the browser's engine 
// and accessible through the window object.
// In Node.js: The document object is not available by default because Node.js is a server-side runtime and does not have a 
// built-in DOM. To work with the DOM in Node.js, you would typically use a library like jsdom(e.g--> for server-side rendering, testing, 
// or scraping purposes)

// The document object and methods like document.getElementById() are inherently part of the browser environment. When you write 
// JavaScript code that interacts with the DOM using document methods, you are typically running that code in a browser context. 
// This is why these methods work without any additional libraries when you are working within a browser.
// In a typical web development scenario, JavaScript code that manipulates the DOM is executed within a web browser.








