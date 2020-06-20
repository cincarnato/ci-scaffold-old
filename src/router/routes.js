import merge from 'deepmerge'
import baseRoutes from '../modules/base/routes'
import {routes as userRoutes} from 'ci-user-module'

const routes =merge.all([baseRoutes,userRoutes])


export default routes;