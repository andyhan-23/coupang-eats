import { Box, VStack, HStack, Text, Wrap } from "@chakra-ui/react";
import { ArrowRight, TimerIcon } from "@/assets/icons";

type SideBarProps = {
  deliveryFee: string;
  minimunOrderAmount: number;
};
const SideBar = ({ deliveryFee, minimunOrderAmount }: SideBarProps) => {
  const test = () => {
    console.log("click");
  };
  return (
    <Box bg="white" w="100%" p={4} color="black">
      <VStack alignItems="flex-start" w="100%">
        <HStack justifyContent="space-between" w="100%">
          <Wrap alignItems="center">
            <TimerIcon />
            <Text fontWeight="bold">도착 까지 약 35분</Text>
          </Wrap>
          <Wrap alignItems="center" onClick={test} cursor="pointer">
            <Text>매장 정보</Text>
            <ArrowRight />
          </Wrap>
        </HStack>
        <HStack gap="50">
          <Text>최소주문</Text>
          <Text>{minimunOrderAmount}원</Text>
        </HStack>
        <HStack gap="50">
          <Text>배달비</Text>
          <Text fontWeight="bold">{deliveryFee}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SideBar;
