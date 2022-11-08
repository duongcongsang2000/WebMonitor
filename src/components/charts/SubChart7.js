import React from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { Liquid } from '@ant-design/plots'; 
import { render } from '@testing-library/react';
export default function SubChart7(props) {
        const config = {
          percent: props.data,
          outline: {
            border: 4,
            distance: 8,
          },
          wave: {
            length: 128,
          },
        };
        return <Liquid {...config} />;
}
