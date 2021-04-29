import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';


const columns = [
  {
    title: '源IP地址',
    dataIndex: 'src_ip',
    key: 'src_ip',
  },
  {
    title: '源端口号',
    dataIndex: 'src_port',
    key: 'src_port',
  },
  {
    title: '目的IP地址',
    dataIndex: 'dst_ip',
    key: 'dst_ip',
  },
  {
    title: '目的端口号',
    dataIndex: 'dst_port',
    key: 'dst_port',
  },
  {
    title: '时间戳',
    dataIndex: 'timestamp',
    key: 'timestamp',
  },
  {
    title: '类别',
    key: 'cates',
    dataIndex: 'cates',
    render: cates => (
      <>
        {cates.map(cate => {
          return (
            <Tag color={cate.color} key={cate.name}>
              {cate.name}
            </Tag>
          );
        })}
      </>
    ),
  },
];


export const MonitorTable = ({networkData}) => {

    let data = []
    networkData && networkData.map((item,index) => {
        data.push({
            key: index,
            src_ip: item.src_ip,
            src_port: item.src_port,
            dst_ip: item.dst_ip,
            dst_port: item.dst_port,
            timestamp: item.timestamp,
            cates: [
                {
                    name:item.class_field === 'Benign'?'正常':item.class_field,
                    color:'geekblue'
                }
            ],
        })
    })
    return(
        <Table columns={columns} dataSource={data} />
    )
        
}
