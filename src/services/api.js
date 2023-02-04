import React, { useState, useEffect } from "react";
import { API_URL } from "../config";
// import axios from 'axios'

const userPath = `${API_URL}/user/`

function getUserInfos(id) {
    return fetch(`${userPath}${id}`, {
        method: "GET",
        headers: {
            Accept: "Application/json",
        },
    }).then((res) => res.json())
}

function getUserActivity(id) {
    return fetch(`${userPath}${id}/activity`, {
        method: "GET",
        headers: {
            Accept: "Application/json",
        },
    }).then((res) => res.json())
}

function getUserSessions(id) {
    return fetch(`${userPath}${id}/average-sessions`, {
        method: "GET",
        headers: {
            Accept: "Application/json",
        },
    }).then((res) => res.json())
}

function getUserPerformance(id) {
    return fetch(`${userPath}${id}/performance`, {
        method: "GET",
        headers: {
            Accept: "Application/json",
        },
    }).then((res) => res.json())
}

// function getName() {
//   getData(`performance`)
// }

export default {
    getUserInfos, getUserActivity, getUserSessions, getUserPerformance,
};
