# springboot-reactjs-maven
This is a partial copy of a Spring Boot backend containing a ReactJS frontend packaged with Maven backend.
It contains a number of React cases.

Each case can be initialized by uncommenting (and commenting the current one) in /src/myreactapp/src/index.js
When uncommenting Person, you will get a React frontend with a controller in the backend (PersonController.java). All other React cases are just tryouts.

Run the backend from IntelliJ and the frondend by use of "**npm start**" in the myReactApp folder.
By use of the proxy (configured in package.json) a request on port 3000 is internally fetched from 8080 (the backend). By using this approach, the number of compiles of the backend is minimalized and the frontend is refreshed whenever an edit is performed in the React part.

**Happy developing**.

The original video can be found here
https://www.youtube.com/watch?v=7XxH-G9ckeU
