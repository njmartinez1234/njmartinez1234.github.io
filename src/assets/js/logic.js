import axios from "axios";

const ENDPOINT_PATH = "https://ky23idqdol.execute-api.us-east-2.amazonaws.com/api/v1/";

axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('token')}`

export default {
    getRecords(user_id, page, per_page,filter='') {
        const user = { user_id };
        return axios.get(ENDPOINT_PATH + "records?page=" + page + "&per_page=" + per_page + "&operation_type=" + filter, user);
    },
    removeRecord(rec_id) {
        return axios.delete(ENDPOINT_PATH + "records/"+rec_id);
    },
    OperationCalculation(num1, num2, operation_id, cognito_user_id='') {
        const params = { num1, num2, operation_id, cognito_user_id  };
        return axios.post(ENDPOINT_PATH + "records", params);
    },
    getAvOperations() {
        return axios.get(ENDPOINT_PATH + "operations");
    },
    getRandomNumbers(param) {
        return axios.get(ENDPOINT_PATH + "random-string?" + param);
    }
};