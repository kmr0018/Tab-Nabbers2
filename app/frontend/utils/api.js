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
    getData:function () {
        return axios.get("/users");
    }
};

export default fetch;
