import routerPosts from "./routersPosts.js"

function configRoutes(app) {
    app.use("/posts", routerPosts)
    // app.use("/users", routerUser)

    app.use("/", (req, res) => {
        res.status(404).send("Not Found");
        console.log('from configroutes not found');

    });
}
export { configRoutes };
