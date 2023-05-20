import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("blogs")
  return (
    <div className="my-16">
      <div>
        <h2 className="text-4xl text-center my-8">All Blogs Answer Script</h2>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-200 max-w-7xl mx-auto my-8 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          <h4 className="text-2xl">
            <span className="text-orange-600 font-bold">Q1.</span> What is an
            access token and refresh token? How do they work and where should we
            store them on the client-side?
          </h4>
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            <span className="font-bold text-2xl text-orange-600">Ans: </span>An
            access token and refresh token are commonly used in authentication
            and authorization protocols, such as OAuth 2.0, to grant and manage
            access to protected resources. <br /> <br /> Access Token: An access
            token is a credential that is issued by an authentication server to
            a client application after successful authentication. It is
            typically a string of characters that represents the authorization
            granted to the client. <br />
            <br />
            Refresh Token: A refresh token is a separate credential that is
            issued alongside the access token. Its purpose is to obtain a new
            access token without requiring the user to re-authenticate. When an
            access token expires, the client can use the refresh token to
            request a new access token from the authentication server. <br />{" "}
            <br />
            To store access tokens and refresh tokens on the client-side, the
            most common approach is to use secure storage mechanisms <br />{" "}
            1.Cookies <br /> 2.Local Storage <br />
            3. IndexDB
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-200 max-w-7xl my-8 mx-auto rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          <h4 className="text-2xl">
            <span className="text-orange-600 font-bold">Q2.</span> Compare SQL
            and NoSQL databases?
          </h4>
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            <span className="font-bold text-2xl text-orange-600">Ans: </span>SQL
            and NoSQL are two different types of database management systems
            with distinct characteristics. Here's a comparison between the two:{" "}
            <br /> <br /> Data Model: SQL (relational databases) SQL databases
            use a structured data model with tables, rows, and columns. Data is
            organized into predefined schemas, and relationships between tables
            are established using foreign keys. <br /> <br />
            Scalability: SQL: Relational databases are typically vertically
            scalable, meaning they can handle increased load by upgrading
            hardware resources like CPU, memory, or storage. Scaling
            horizontally (across multiple servers) can be challenging.
            <br />
            <br />
            NoSQL (Non-Relational Databases): NoSQL databases offer flexible
            data models such as key-value, document, columnar, or graph. They do
            not enforce a fixed schema, allowing for dynamic and unstructured
            data.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-200 max-w-7xl my-8 mx-auto rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          <h4 className="text-2xl">
            <span className="text-orange-600 font-bold">Q3.</span> What is
            express js? What is Nest JS?
          </h4>
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            <span className="font-bold text-2xl text-orange-600">Ans: </span>
            Express.js and Nest.js are both popular frameworks used to build web
            applications and APIs, but they differ in their approach and
            features. <br />
            <br />
            Express.js: Express.js is a minimal and flexible web application
            framework for Node.js. It provides a simple and straightforward way
            to build web applications and APIs. It is often considered the de
            facto standard for Node.js web development. <br />
            <br />
            Nest.js: Nest.js is a powerful and scalable Node.js framework built
            with TypeScript. It is inspired by Angular and adopts many of its
            concepts and architectural patterns.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-200 max-w-7xl my-8 mx-auto rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          <h4 className="text-2xl">
            <span className="text-orange-600 font-bold">Q4.</span> What is
            MongoDB aggregate and how does it work?
          </h4>
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            <span className="font-bold text-2xl text-orange-600">Ans: </span>
            In MongoDB, the aggregate method is used to perform advanced data
            aggregation operations on collections. It allows you to process and
            analyze data in a flexible and powerful way, combining multiple
            stages of operations to transform and manipulate documents. The
            aggregate method takes an array of pipeline stages as its parameter.
            Each stage represents a specific operation that is applied
            sequentially to the documents in the collection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
