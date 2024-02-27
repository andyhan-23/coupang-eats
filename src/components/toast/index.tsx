import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Toast = () => {
  const [isNotify, setIsNotify] = useState(false);

  const handleNotify = () => setIsNotify(true);

  const notify = () => {
    if (isNotify) toast("장바구니에 담겼습니다");
  };

  return (
    <>
      <button onClick={notify}>test</button>
      <ToastContainer
        position="top-center" // 알람 위치 지정
        autoClose={3000} // 자동 off 시간
        hideProgressBar={false} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        rtl={false} // 알림 좌우 반전
        pauseOnFocusLoss={false} // 화면을 벗어나면 알람 정지
        draggable // 드래그 가능
        pauseOnHover={false} // 마우스를 올리면 알람 정지
        theme="dark"
      />
    </>
  );
};

export default Toast;
