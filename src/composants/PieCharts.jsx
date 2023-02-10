import React from "react";
import { PieChart, Pie, ResponsiveContainer, Label } from "recharts";

const data02 = [
    { name: "A1", value: 20 },
];

const mockPercentage = 0.3 * 100
const piePercentage = mockPercentage * 360 / 100

function PieCharts() {
    return (
        <div className="bottom-cards">
            <ResponsiveContainer width="100%" aspect={1}>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data02}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={85}
                        outerRadius={100}
                        fill="var(--primary)"
                        endAngle={90 + piePercentage}
                        startAngle={90}
                        label
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PieCharts;
