import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ locations, heading }) {
  const [isSmallScreen] = useMediaQuery("(max-width: 30em)");
  const labels = locations.map(
    (location) => `${location.country || location.source} 
  ${location.percent}%
  `
  );

  const count = locations.map((location) => location.count);

  const data = {
    labels,
    datasets: [
      {
        label: "# of Votes",
        data: count,
        backgroundColor: [
          "#599EEA",
          "#0FB77A",
          "#FAB70A",
          "#F09468",
          "#844FF6",
        ],
      },
    ],
  };

  return (
    <Box
      p={2}
      borderRadius="12px"
      my={4}
      border={"1px solid #EFF1F6"}
      flexBasis={["100%", "50%", "50%"]}
    >
      <Flex justifyContent="space-between" alignItems={"center"}>
        <Text
          variant="h2"
          fontWeight={"bolder"}
          fontSize={"24px"}
        >
          {heading}
        </Text>
        <Text
          variant="body1"
          fontWeight={"bolder"}
          fontSize="14px"
          color={"#FF5403"}
        >
          View full reports
        </Text>
      </Flex>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: isSmallScreen ? "top" : "left",
              rtl: true,
              labels: {
                // borderRadius: 10,
                useBorderRadius: true,
                // boxWidth:  isSmallScreen ? 10 : 55,
                usePointStyle: true,
                boxPadding: 10,
                color: "#131316",
                textAlign: "left",
                font: {
                  weight: "bold",
                },
              },
            },
          },
        }}
      />
    </Box>
  );
}
