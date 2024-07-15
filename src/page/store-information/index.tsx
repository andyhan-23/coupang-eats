import useFetchVendor from "@/hooks/use-fetch-vendor";

const StoreInformationPage = () => {
  const { data: vendorData, isLoading: vendorDataLoading } = useFetchVendor();

  if (vendorDataLoading)
    return <div className="p-4">가게 데이터 로딩중입니다.</div>;

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">매장정보</h1>
        </div>
        <div className="mt-8 space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{vendorData.name}</h2>
            <p className="text-xl">{vendorData.address}</p>
            <p className="mt-2">
              전화번호{" "}
              <span className="text-skyblue">{vendorData.phoneNumber}</span>
            </p>
            <p>대표자명: {vendorData.representativeName}</p>
            <p>사업자등록번호: {vendorData.companyResgistrationNumber}</p>
            <p>상호명: {vendorData.companyName}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">영업시간</h2>
            <p>{vendorData.operationHour}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">매장소개</h2>
            <p>{vendorData.storeIntroduction}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInformationPage;
