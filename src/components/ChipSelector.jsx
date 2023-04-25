import { Flex, Tag } from "@chakra-ui/react";
import { useState } from "react";

const ChipSelector = () => {
  const [selectedDay, setSelectedDay] = useState("All time");

  return (
    <Flex gap={2} my={4} wrap="wrap">
      {["1 day", "3 days", "7 days", "30 days", "All time", "Custom Date"].map((day) => (
        <Tag
          cursor={"pointer"}
          key={day}
          variant="outline"
          color={selectedDay === day ? "#FF5403" : "1px solid #31373D"}
          outline={selectedDay === day ? "1px solid #FF5403" : null}
          bgColor={selectedDay === day ? "#FFDDCD" : null}
          boxShadow="none"
          px={4}
          py={2}
          borderRadius="full"
          onClick={() => {
            setSelectedDay(day);
          }}
        >
          {day}
        </Tag>
      ))}
    </Flex>
  );
};

export default ChipSelector;
