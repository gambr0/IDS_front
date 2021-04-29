import React from 'react';

import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';
import { Pie } from '@antv/g2plot';

export const DataPie = ({networkData}) => {
    

    let data = []
    let counter = {
        'Benign': 0,
        'Bot': 0,
        'BruteForce': 0,
        'DDos': 0,
        'DoS': 0,
        'Infiltration': 0
    }
    networkData && networkData.map((item,index) => {
        counter[item.class_filed] += 1
    })

    data = [
        {
            type: 'Benign',
            value: counter['Benign'],
        },
        {
            type: 'Bot',
            value: counter['Bot'],
        },        {
            type: 'BruteForce',
            value: counter['BruteForce'],
        },        {
            type: 'DDos',
            value: counter['DDos'],
        },        {
            type: 'DoS',
            value: counter['DoS'],
        },        {
            type: 'Infiltration',
            value: counter['Infiltration'],
        },
    ]
    return(
        <Pie  />
    )
        
}
