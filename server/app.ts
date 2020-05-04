import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";
import { OK } from "http-status-codes";
import * as fs from "fs";

class App {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
    }
    
    private config(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(cors());
        this.app.use(helmet());
        
        this.app.use("/api/numbers", (req: express.Request, res: express.Response) => {
            var data = fs.readFileSync(__dirname.concat("/models/nums_training.csv"), "UTF8");
            return res.status(OK).json({
                model: data
            })
        });

        this.app.use("/api/plants", (req: express.Request, res: express.Response) => {
            var data = fs.readFileSync(__dirname.concat("/models/plants_training.csv"), "UTF8");
            return res.status(OK).json({
                model: data
            })
        });
    }

}

export default new App().app;

