import { useEffect } from "react";
import * as echarts from "echarts";
const WebTrafficChart = () => {
    useEffect(() => {
        const chart = echarts.init(document.querySelector('#trafficChart'));
        chart.setOption({
            tooltip: {
                trigger: 'item',
            },
            legend: {
                top: '5%',
                left: 'center',
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlop: false,
                    label: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '18',
                            fontWeight: 'bold',
                        }
                    },

                    labelLine: {
                        show: false,
                    },
                    data: [
                        {
                            value: 1048,
                            name: 'Search Engine',
                        },
                        {
                            value: 723,
                            name: 'Direct',
                        },
                        {
                            value: 580,
                            name: 'Email'
                        },
                        {
                            value: 454,
                            name: 'Union Ads'
                        },
                        {
                            value: 454,
                            name: 'Union Ads'
                        },
                        {
                            value: 300,
                            name: 'Video Ads'
                        },
                    ],
                },
            ],
        });
    }, []);
    return (
        <div id="trafficChart"
            style={{ minHeight: '400px' }}
            className="echart"
        >

        </div>
    )
}

export default WebTrafficChart