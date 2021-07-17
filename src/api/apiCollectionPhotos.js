import api from './api'
import fillPath from '../utils/fillPath'

const PATH = '/collections/:id/photos'

const apiCollectionPhotos = (success, params) =>
  api(fillPath(PATH, params), success)

export default apiCollectionPhotos
