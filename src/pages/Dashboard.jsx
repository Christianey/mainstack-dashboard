import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdOutlineInfo } from "react-icons/md";
import ChipSelector from "../components/ChipSelector";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://fe-task-api.mainstack.io/");
      const result = await response.json();
      setData(result);
    }

    getData();
  }, []);

  return data?.graph_data ? (
    <Flex px={[1, 3, 3, 8]} direction={"column"}>
      <Flex
        direction={["column", "row", "row", "row"]}
        justify={"space-between"}
        mt={4}
      >
        <Box>
          <Text variant="h2" fontWeight={"bolder"} fontSize="24px">
            Good Morning Blessing
          </Text>
          <Text
            variant="body1"
            fontWeight={"bolder"}
            fontSize="14px"
            color={"grey"}
          >
            Check out your dashboard Summary
          </Text>
        </Box>

        <Text
          variant="body1"
          fontWeight={"bolder"}
          fontSize="14px"
          color={"#FF5403"}
        >
          View Analytics
        </Text>
      </Flex>

     <ChipSelector />

      <Box
        p={[2, 4, 6]}
        borderRadius="12px"
        mb={4}
        border={"1px solid #EFF1F6"}
      >
        <Flex justifyContent="space-between">
          <Box>
            <Text variant="h2" fontWeight={"bolder"} fontSize="18px">
              Page Views
            </Text>
            <Text
              variant="body1"
              fontWeight={"bolder"}
              fontSize="14px"
              color={"grey"}
            >
              All Time
            </Text>
          </Box>
          <MdOutlineInfo style={{ marginTop: ".5rem" }} />
        </Flex>

        <Text variant="h2" fontWeight={"bolder"} fontSize="48px">
          500
        </Text>

        <LineChart data={data} />
      </Box>

      <Flex direction={["column", "column", "column", "row"]} gap={2}>
        <PieChart locations={data.top_locations} heading={"Top location"} />
        <PieChart
          locations={data.top_sources}
          heading={"Top referral source"}
        />
      </Flex>
    </Flex>
  ) : null;
};

export default Dashboard;
