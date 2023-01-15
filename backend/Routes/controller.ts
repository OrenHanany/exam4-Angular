// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import exam4logic from '../Logic/exam4logic';


// generic router 
const router = express.Router();

router.get("/accountoperations/:accountnumber", async (request: Request, response: Response, next: NextFunction) => {
  const accountnumber = +request.params.accountnumber;
    response.status(200).json(await exam4logic.getAllOperationsByAccount(accountnumber));
})

router.get("/all", async (request: Request, response: Response, next: NextFunction) => {
  const accountnumber = +request.params.accountnumber;
    response.status(200).json(await exam4logic.getAllOperations());
})

router.get("/", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json("controller working");
})

//get single student

router.post("/accountoperations/add", async (request: Request, response: Response, next: NextFunction) => {
  const body = request.body;
  response.status(201).json( await exam4logic.addOperation(body))
})

router.post("/user/add", async (request: Request, response: Response, next: NextFunction) => {
  const body = request.body;
  response.status(201).json( await exam4logic.addUser(body))
})

// router.get("/user/:name", async (request: Request, response: Response, next: NextFunction) => {
//   const username = request.params.name;
//     response.status(200).json(await exam4logic.getAllOperationsByAccount(username));
// })


export default router;