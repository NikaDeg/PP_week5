### Question: What does this code accomplish? Why is it useful in your application?

    - jobSchema.set("toJSON", {

        virtuals: true,
        transform: (doc, ret) => {

        ret.id = ret.\_id;
        return ret;
        },
        });

- It makes the backend data easier for the React frontend to work with
  -customizes how Mongoose document are converted to JSON. It enables virtual fields and creates an ID property from MongoDB \_id. This helps react front end to use simple id property when accessing the jobs.

## Question: What is CORS, and why is it necessary for the application to include this middleware?

    - It is a browser security mechanism that controls whether a front end from one origin can communicate with a backend from different origin,
    eg:-

     app.use(cors({
    origin: "*"
        })); - allows all origin

      app.use(cors({
    origin: "http://localhost:5173"
        }));  allows this particular address

## Question: How does this proxy setting work, and what problems does it solve in the development environment?

    proxy: {

    "/api": {
    target: "http://localhost:4000",
    changeOrigin: true,
    },
    },

- It allows your React frontend to send /api requests to your backend without writing the backend's full URL.

- fetch("/api/jobs")-> represents (http://localhost:4000/api/jobs)
