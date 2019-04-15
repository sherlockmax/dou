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
  },
  AddJob: async (jobForm) => {
    const response = await axios.post(API_PREFIX + API_VERSION + '/add/job', jobForm)
    return response.data.success
  },
  RemoveJob: async (groupName, jobID) => {
    const data = {
      group_name: groupName,
      job_id: jobID
    }
    const response = await axios.post(API_PREFIX + API_VERSION + '/delete/job', data)
    return response.data.success
  },
  PauseJob: async (groupName, jobID) => {
    const data = {
      group_name: groupName,
      job_id: jobID
    }
    const response = await axios.post(API_PREFIX + API_VERSION + '/pause/job', data)
    return response.data.success
  },
  ActiveJob: async (groupName, jobID, execTime) => {
    const data = {
      group_name: groupName,
      job_id: jobID,
      exec_time: execTime
    }
    const response = await axios.post(API_PREFIX + API_VERSION + '/active/job', data)
    return response.data.success
  }
}

export default Api
