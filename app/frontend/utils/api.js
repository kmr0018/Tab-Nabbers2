/**
 * Created by esterlingaccime on 6/27/17.
 */
import axios from "axios";


const fetch = {
    signup: function (user) {
        return axios.post("/sign-up", user);
    },
    signin:function (user) {
        return axios.post("/sign-in", user);
    },


    recruitersignup: function (user) {
        return axios.post("/recruiter/sign-up", user);
    },
    recruitersignin:function (user) {
        return axios.post("/recruiter/sign-in", user);
    },
    getData:function () {
        return axios.get("/api/users", {
            params: {
                token: localStorage.getItem("token")
            }
        });
    },
    userUpdate:function(text){
        return axios.post("/profile", text);
    },

    getCurrentUserData:function(data){
        return axios.get("/api/profile");
    },


    event:function () {
        return axios.get("/event/data", {
            withCredentials:true
        });
    }
  };


export default fetch;
