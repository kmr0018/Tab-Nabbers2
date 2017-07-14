/**
 * Created by esterlingaccime on 6/27/17.
 */
import axios from "axios";


const fetch = {
    signup: function(user) {
        return axios.post("/sign-up", user);
    },
    signin: function(user) {
        return axios.post("/sign-in", user);
    },


    recruitersignup: function(user) {
        return axios.post("/recruiter/sign-up", user);
    },
    recruitersignin: function(user) {
        return axios.post("/recruiter/sign-in", user);
    },
    getData: function() {
        return axios.get("/api/users", {
            params: {
                token: localStorage.getItem("token")
            }
        });
    },
    userUpdate: function(text) {
        return axios.post("/profile", text);
    },

    getCurrentUserData: function(data) {
        return axios.get("/api/profile");
    },

    getBootcamps: function() {
        axios.get("/bootcamps").then(function(bootcamps) {
            return bootcamps.map(function(b) {
                return (
                    <option key={b.id} value={b.id}>{b.institution}</option>
                )
            });
        }).catch(function(err) {
            console.log(err)
        });
    }
};


export default fetch;
