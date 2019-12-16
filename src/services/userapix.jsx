import axios from "axios";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import _ from "lodash";

export function addUser(user) {
  var salt = bcrypt.genSaltSync(10);
  return bcrypt.hash(user.password, salt).then(res => {
    return axios
      .post(
        "http://baredex-admin.nextpageit.net/api/1.1/tables/reactuser/rows?access_token=lEEtA4JUmEeNxj890XENDGct7ubLqmII",
        {
          username: user.username,
          email: user.email,
          password: res
        }
      )
      .then(data => {
        return data;
      });
  });
}

export function getSelectedUser(user) {
  return axios
    .get(
      "http://baredex-admin.nextpageit.net/api/1.1/tables/reactuser/rows?access_token=2LwqyUz3gN9uwvn0MP7Q71KtwTKBFUgc&filters[email][eq]=" +
        user.email
    )
    .then(res => {
      var data = res.data.data;
      if (data[0]) {
        return bcrypt.compare(user.password, data[0].password).then(res => {
          if (!res) return res;
          else return data;
        });
      } else return null;
    });
}

export function authenticateUser(user) {
  return getSelectedUser(user)
    .then(res => {
      if (res === null)
        return { success: false, message: "User does not exists!" };
      else if (!res)
        return { success: false, message: "Password does not match!" };
      else {
        var result = res[0];
        return {
          success: true,
          token: jwt.sign({ id: user.id }, "Pooja", { expiresIn: "3600m" }),
          userData: _.pick(result, ["id", "username", "email"])
        };
      }
    })
    .catch(err => {
      return err;
    });
}

export function getPayload() {
  var token = localStorage.getItem("userToken");
  var userPayload = atob(token.split(".")[1]);
  if (userPayload) {
    return JSON.parse(userPayload);
  } else {
    return null;
  }
}

export function isLoggedIn() {
  var userpayload = this.getPayload();
  if (userpayload) {
    return userpayload.exp > Date.now() / 1000;
  } else {
    return null;
  }
}
