import axios from "axios";

export function getCompanies() {
  return axios
    .get(
      "http://baredex-admin.nextpageit.net/api/1.1/tables/car_comapny/rows?access_token=lEEtA4JUmEeNxj890XENDGct7ubLqmII"
    )
    .then(res => {
      return res;
    });
}

export function getPlaces() {
  return axios
    .get(
      "http://baredex-admin.nextpageit.net/api/1.1/tables/dealer_places/rows?access_token=2LwqyUz3gN9uwvn0MP7Q71KtwTKBFUgc"
    )
    .then(res => {
      return res;
    });
}

export function getSelectedPlace(placeid) {
  return axios
    .get(
      "http://baredex-admin.nextpageit.net/api/1.1/tables/dealer_places/rows?access_token=2LwqyUz3gN9uwvn0MP7Q71KtwTKBFUgc&filters[id][eq]=" +
        placeid
    )
    .then(res => {
      return res;
    });
}

export function getAllDealers() {
  return axios
    .get(
      "http://baredex-admin.nextpageit.net/api/1.1/tables/dealers/rows?access_token=lEEtA4JUmEeNxj890XENDGct7ubLqmII"
    )
    .then(res => {
      return res;
    });
}

export function getSelectedDealer(userid) {
  return axios
    .get(
      "http://baredex-admin.nextpageit.net/api/1.1/tables/dealers/rows?access_token=2LwqyUz3gN9uwvn0MP7Q71KtwTKBFUgc&filters[id][eq]=" +
        userid
    )
    .then(res => {
      return res;
    });
}

export function getDealersByPlace(placeid) {
  return axios
    .get(
      "http://baredex-admin.nextpageit.net/api/1.1/tables/dealers/rows?access_token=2LwqyUz3gN9uwvn0MP7Q71KtwTKBFUgc&filters[placeid][eq]=" +
        placeid
    )
    .then(res => {
      return res;
    });
}

export function getDealersByCompany(companyid) {
  return axios
    .get(
      "http://baredex-admin.nextpageit.net/api/1.1/tables/dealers/rows?access_token=2LwqyUz3gN9uwvn0MP7Q71KtwTKBFUgc&filters[companyid][eq]=" +
        companyid
    )
    .then(res => {
      return res;
    });
}

export function getDealersByPlaceAndCompany(placeid, companyid) {
  return axios
    .get(
      "http://baredex-admin.nextpageit.net/api/1.1/tables/dealers/rows?access_token=2LwqyUz3gN9uwvn0MP7Q71KtwTKBFUgc&filters[placeid][eq]=" +
        placeid +
        "&filters[companyid][eq]=" +
        companyid
    )
    .then(res => {
      return res;
    });
}

export function addDealer(dealer) {
  axios
    .post(
      "http://baredex-admin.nextpageit.net/api/1.1/tables/dealers/rows?access_token=lEEtA4JUmEeNxj890XENDGct7ubLqmII",
      {
        companyid: dealer.companyid,
        placeid: dealer.placeid,
        fullname: dealer.fullname,
        email: dealer.email,
        mobile: dealer.mobile,
        address: dealer.address,
        email1: dealer.email1,
        mobile1: dealer.mobile1,
        isservicecenter: dealer.isservicecenter
      }
    )
    .then(res => {
      return res;
    });
}

export function updateDealer(userid, dealer) {
  return axios
    .put(
      `http://baredex-admin.nextpageit.net/api/1.1/tables/dealers/rows/${userid}?access_token=lEEtA4JUmEeNxj890XENDGct7ubLqmII`,
      {
        companyid: dealer.companyid,
        placeid: dealer.placeid,
        fullname: dealer.fullname,
        email: dealer.email,
        mobile: dealer.mobile,
        address: dealer.address,
        email1: dealer.email1,
        mobile1: dealer.mobile1,
        isservicecenter: dealer.isservicecenter
      }
    )
    .then(res => {
      return res;
    });
}
