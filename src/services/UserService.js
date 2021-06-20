import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    getUsersSortById(){
        return axios.get(USER_API_BASE_URL + '/sort_by_id');
    }

    getUsersByFirstName(userFirstName){
        return axios.get(USER_API_BASE_URL + '/name/' + userFirstName);
    }

    getUsersByFirstNameSorted(userFirstName){
        return axios.get(USER_API_BASE_URL + '/sort_by_name/' + userFirstName,{
                headers:{
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Authorization",
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
                    "Content-Type": "application/json;charset=UTF-8",
                }
        }
        );
    }

    addUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/id/' + userId);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId){ 
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}

export default new UserService();