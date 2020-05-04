import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";
import { OK } from "http-status-codes";
import {nums_train} from "./models/nums_training";
import {plants_train} from "./models/plants_training";

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
            return res.status(OK).json(nums_train);
        });
        this.app.use("/api/plants", (req: express.Request, res: express.Response) => {
            return res.status(OK).json(plants_train);
        });
    }

}

export default new App().app;

