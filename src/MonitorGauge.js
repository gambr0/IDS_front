import React from 'react';
import { Gauge } from '@ant-design/charts';
export const MonitorGauge = ({networkData}) => {
    let data = []
    networkData && networkData.map((item, index) => {
        data.push(item.class_field)
    })

    const count = (arr, type) => arr.reduce((a, v) => v === type ? a + 1 : a + 0, 0);

    let benigns = count(data, 'Benign')

    let value = benigns*100 / data.length

    let text = '优'
    if(value>75 && value<=100){
        text = '优'
    }else if(value>50 && value<=75){
        text = '良'
    }else if(value>25 && value<=50){
        text = '中'
    }else if(value>0 && value<=25){
        text = '差'
    }

    const config = {
        width: 350,
        height: 350,
        value: value,
        min: 0,
        max: 100,
        range: [0, 25, 50, 75, 100],
        color: ['#39B8FF', '#52619B', '#43E089', '#C0EDF3'],
        statistic: {
        visible: true,
        text: text,
        color: '#30bf78',
        },
    };
    return <Gauge {...config} />;
};
