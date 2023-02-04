import React, { useState, useEffect } from "react";
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    ReferenceArea,
} from "recharts";
import "../styles/LineCharts.css";
import { useParams } from "react-router-dom";
import Api from "../services/api";


const gradientId = "gradient";
const gradientUrl = `url(#${gradientId})`;

function LineCharts() {

    const [data, setData] = useState([])

    let { id } = useParams();
  
    useEffect(() => {
        fetchUserSessions();
    }, []);
  
    const fetchUserSessions = async () => {
        const dataFetched = await Api.getUserSessions(id);
        setData(dataFetched);
        console.log(dataFetched)
    };

    return (
        <div className="bottom-cards">
            <h2 id="session-time-h2">Durée moyenne des sessions</h2>

            <ResponsiveContainer width="100%" aspect={1}>
                <LineChart
                    width={500}
                    height={300}
                    data={data.data ? data.data.sessions : ""}
                	margin={{
                        top: 100,
                        right: 0,
                        left: 0,
                        bottom: 20,
                    }}
                >
                    <defs>
                        <linearGradient
                            id={gradientId}
                            x1="0"
                            y1="1"
                            x2="0"
                            y2="0"
                            gradientTransform="rotate(270)"
                        >
                            <stop
                                offset="1.19%"
                                stopColor="#FFFFFF"
                                stopOpacity={1}
                            />
                            <stop
                                offset="81.27%"
                                stopColor="rgba(255, 255, 255, 0.403191)"
                                stopOpacity={1}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        stroke="white"
                        opacity={0.5}
                        interval="preserveStartEnd"
                        padding={{ left: 20, right: 20 }}
                    />
                    <Tooltip />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke={gradientUrl}
                        dot={false}
                        activeDot={{ stroke: "white", strokeWidth: 2 }}
                    />
                    <ReferenceArea x1="60" x2="80" strokeOpacity={0.3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LineCharts;
