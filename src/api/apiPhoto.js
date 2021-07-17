import api from './api'
import fillPath from '../utils/fillPath'

const PATH = '/photos/:id'

const apiCollectionPhotos = (success, params) =>
  api(fillPath(PATH, params), success)

export default apiCollectionPhotos
