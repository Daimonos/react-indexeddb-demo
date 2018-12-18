# Demo project
Demo of how we can use Indexed DB in React with a more generalized datastore

## Getting Started
1. Clone the repo
2. npm install
3. npm start
Go to the routes in section [routes](#Routes)

##
Main functionality as follows:

localhost:3000/serviceOrders/{Bucket01|Bucket02}/businessUnit/{BU1|BU2|BU3|BU4|BU5}/status/{In Progress|Completed|Pending}

## Routes
Example routes are as follows:
* http://localhost:3000/serviceOrders/bucket/Bucket01/businessUnit/BU1/status/Completed
* http://localhost:3000/serviceOrders/bucket/Bucket01/businessUnit/BU4/status/In%20Progress
* http://localhost:3000/serviceOrders/bucket/Bucket02/businessUnit/BU3/status/Completed

Note:

First load will take a while as it creates 100,000 orders
https://github.com/Daimonos/react-indexeddb-demo