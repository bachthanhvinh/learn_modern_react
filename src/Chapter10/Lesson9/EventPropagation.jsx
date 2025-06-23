import "./Lesson9.scss";
export default function EventPropagation() {
  const handleClickParent = () => {
    console.log("Parent");
  };
  const handleClickChild = (event) => {
    console.log("child");
    event.stopPropagation(); // ngăn chặn việc lớp con được gọi mà gọi theo cả hàm cha
  };
  return (
    <>
      <div className="Parent" onClick={handleClickParent}>
        <span className="IamParent">I'm Parent</span>
        <div className="Child">
          <button onClick={handleClickChild}>Child</button>
        </div>
      </div>
    </>
  );
}
