import React, { useState, useEffect } from "react";
import { API_URL } from "../config";
// import axios from 'axios'

const userPath = `${API_URL}/user/`

function getUserInfos(id) {
    // const [data, setData] = useState([])
    return fetch(`${userPath}${id}`, {
        method: "GET",
        headers: {
            Accept: "Application/json",
        },
    }).then((res) => res.json());
}

// function getName() {
//   getData(`performance`)
// }

export default {
    getUserInfos,
};
