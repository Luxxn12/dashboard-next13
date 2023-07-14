import { Box, Paper, Text } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import React, { useState } from "react";

function Sales() {
  const [options, setOptions] = useState<EChartsOption>({});

  useShallowEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const option: EChartsOption = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ["SalesNew", "Visitors", "Sales"],
          ["Januari", 43.3, 85.8],
          ["Februari", 83.1, 73.4],
          ["Maret", 86.4, 65.2],
          ["April", 50.4, 91.9],
          ["Mei", 20.4, 53.9],
          ["Juni", 40.4, 20.9],
          ["Juli", 80.4, 10.9],
          ["Agustus", 15, 83.9],
          ["September", 30.4, 87.9],
          ["Oktober", 20.4, 10.9],
          ["November", 66.4, 66.9],
          ["Desember", 91.4, 10.9],
        ],
      },
      xAxis: { type: "category" },
      yAxis: {},

      series: [{ type: "bar" }, { type: "bar" }],
    };
    setOptions(option);
  };

  return (
    <>
      <Box>
        <Paper shadow="xl" withBorder radius={"md"} pt={20}>
          <Text fw={700} fz={30} pl={30}>
            Sales
          </Text>
          <EChartsReact style={{ height: 300 }} option={options} />
        </Paper>
      </Box>
    </>
  );
}

export default Sales;
