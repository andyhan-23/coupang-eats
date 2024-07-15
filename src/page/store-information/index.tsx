import { UI, AppUi } from "@/layout";
import { Box, Text, Flex, VStack } from "@chakra-ui/react";
import useFetchVendor from "@/hooks/use-fetch-vendor";
import storeMap from "@/images/storeMap.jpeg";

const StoreInformationPage = () => {
  const { data: vendorData, isLoading: vendorDataLoading } = useFetchVendor();

  if (vendorDataLoading) return <div>가게 데이터 로딩중입니다.</div>;

  return (
    <UI>
      <AppUi>
        <Flex justify="center" align="center">
          <Text fontSize="4xl" fontWeight="bold" textAlign="center">
            매장정보
          </Text>
        </Flex>
        <VStack alignItems="flex-start" spacing={4}>
          <Text fontWeight="bold" fontSize="2xl">
            {vendorData.name}
          </Text>
          <Text fontSize="1xl">{vendorData.address}</Text>
          <Text>
            전화번호{" "}
            <Text as="span" color="skyblue">
              {vendorData.phoneNumber}
            </Text>
          </Text>
          <Text>대표자명: {vendorData.representativeName}</Text>
          <Text>사업자등록번호: {vendorData.companyResgistrationNumber}</Text>
          <Text>상호명: {vendorData.companyName}</Text>

          <Text fontWeight="bold" fontSize="2xl">
            영업시간
          </Text>
          <Text>{vendorData.operationHour}</Text>

          <Text fontWeight="bold" fontSize="2xl">
            매장소개
          </Text>
          <Text>{vendorData.storeIntroduction}</Text>
        </VStack>
      </AppUi>
    </UI>
  );
};

export default StoreInformationPage;
