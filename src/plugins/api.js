import axios from 'axios'

const API_PREFIX = '/gua'
const API_VERSION = '/v1'

const Api = {
  GetGuaVersion: async () => {
    const response = await axios.get(API_PREFIX + '/version')
    return response.data.success
  },
  GetGroupList: async () => {
    const response = await axios.get(API_PREFIX + API_VERSION + '/group/list')
    return response.data.success
  },
  GetGroupInfo: async (groupName) => {
    const response = await axios.get(API_PREFIX + API_VERSION + '/' + groupName + '/group/info')
    return response.data.success
  },
  GetJobList: async (groupName) => {
    const response = await axios.get(API_PREFIX + API_VERSION + '/' + groupName + '/job/list')
    return response.data.success
  },
  GetNodeList: async (groupName) => {
    const response = await axios.get(API_PREFIX + API_VERSION + '/' + groupName + '/node/list')
    return response.data.success
  }
}

export default Api
