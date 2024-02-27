const MenuList = ({
  id,
  name,
  image,
  price,
  quantity,
  type,
  isError,
  isLoading,
  menu,
}) => {
  if (isLoading) {
    console.log("에러 내용:", isError);
    return <div>에러</div>;
  } else {
    return (
      <>
        {/* <img src={image} /> */}
        <h5>{name}</h5>
      </>
    );
  }
};

export default MenuList;
