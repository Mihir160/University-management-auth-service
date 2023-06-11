import express, { Application } from 'express'
const app: Application = express()
import { UserRoutes } from './app/modules/users/users.route'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

// import ApiError from './errors/ApiError'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/users', UserRoutes)
// app.get('/', (req: Request, res: Response) => {
//   res.send('Working successfully')
// })

// // Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // throw new ApiError(400, 'Testing Error logger')
//   // Promise.reject(new Error('Unhaled Promise Rejected'))
//   // console.log(x)
// })

//global error handler
app.use(globalErrorHandler)
export default app
