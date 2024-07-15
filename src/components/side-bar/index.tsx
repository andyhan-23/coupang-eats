import { Box, VStack, HStack, Text, Container, Wrap } from "@chakra-ui/react";
import { ArrowRight, TimerIcon } from "@/assets/icons";

const SideBar = () => {
  return (
    <Box bg="white" w="100%" p={4} color="black">
      <VStack alignItems="flex-start" w="100%">
        <HStack justifyContent="space-between" w="100%">
          <Wrap alignItems="center">
            <TimerIcon />
            <Text fontWeight="bold">도착 까지 약 35분</Text>
          </Wrap>
          <Wrap alignItems="center">
            <Text>매장 정보</Text>
            <ArrowRight />
          </Wrap>
        </HStack>
        <HStack gap="50">
          <Text>최소주문</Text>
          <Text>20,000원</Text>
        </HStack>
        <HStack gap="50">
          <Text>배달비</Text>
          <Text fontWeight="bold">무료배달</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SideBar;
