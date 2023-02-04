import React from "react";
import "../styles/Header.css";
import { useState } from "react";
import Api from "../services/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Header() {
    const [user, setUser] = useState({});

    let { id } = useParams();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        const data = await Api.getUserInfos(id);
        setUser(data);
    };

    return (
        <header>
            <h1 id="header-title">
                Bonjour{" "}
                <span id="title-name">
                    {user.data ? user.data.userInfos.firstName : "" }
                </span>
            </h1>
            <p id="header-message">
                {user.data ? user.data.score > 0.2 ? 'Félicitation ! Vous avez explosé vos objectifs hier 👏' : "Continuez ! Vous pouvez le faire 💪" : ""}
            </p>
        </header>
    );
}

export default Header;
