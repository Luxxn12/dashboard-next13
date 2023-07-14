import React, { useState } from 'react';
import {EChartsOption} from "echarts"
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from "@mantine/hooks";

function Income() {
  const [options, setOptions] = useState<EChartsOption>({})

  useShallowEffect(() => {
    loadData()
  },[])

  const loadData = () => {
   const option: EChartsOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          color: "green"
        }
      ]
    };
    setOptions(option)
  }

  return (
    <EChartsReact style={{ height: 200 }} option={options} />
  );
}

export default Income;
