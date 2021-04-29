import React from 'react';
import { Donut } from '@ant-design/charts';
export const MonitorPie = ({networkData}) => {
    let datas = []

    let data = [
        {
            type: 'Benign',
            value: 0,
        },
        {
            type: 'DoS',
            value: 0,
        },
        {
            type: 'DDos',
            value: 0,
        },
        {
            type: 'Bot',
            value: 0,
        },
        {
            type: 'BruteForce',
            value: 0,
        },
        {
            type: 'Infiltration',
            value: 0,
        }

    ]
    
    networkData && networkData.map((item, index) => {
        datas.push(item.class_field)
    })

    const count = (arr, type) => arr.reduce((a, v) => v === type ? a + 1 : a + 0, 0);

    if(networkData.length>0){
        for(let i=0;i<data.length;i++){
            data[i].value = count(datas, data[i].type)
        }
    }
    
    const config = {
        forceFit: true,
        radius: 0.8,
        padding: 'auto',
        data,
        angleField: 'value',
        colorField: 'type',

    };
    return <Donut {...config} />;
};