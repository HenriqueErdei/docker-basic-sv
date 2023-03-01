import { app } from "./app"
import { Signale } from "signale"


export default class Server {
    private app;
    private log;

    private ApplicationPort  = process.env.PORT;

    constructor() {
        this.app = app;
        this.log = new Signale();
    }

    async start() {
        try {
            app.listen(this.ApplicationPort, () => this.log.scope('Server').success('API Started Successfully'));
        } catch (error) {
            this.log.scope('Server').fatal("API can't started with Successfully")
        }
    }
}
