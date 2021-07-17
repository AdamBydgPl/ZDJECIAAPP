import api from './api'
import fillPath from '../utils/fillPath'

const path = '/collections'
const apiCollectionsAll =
 (success, params) => 
 {
 return api(fillPath(path,params), success)
 }
 export default apiCollectionsAll