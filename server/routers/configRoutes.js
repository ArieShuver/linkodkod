import routerPosts from "./routersPosts.js"
import routerUsers from "./rotersUsers.js"

function configRoutes(app) {
    app.use("/posts", routerPosts)
    app.use("/users", routerUsers)

    app.use("/", (req, res) => {
        res.status(404).send("Not Found");
        console.log('from configroutes not found');

    });
}
export { configRoutes };
