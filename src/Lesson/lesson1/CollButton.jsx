import "./CollButton.css";
function CollButton(props) {
  const { btnClass, title } = props;
  return (
    <>
      <button className={btnClass}>{title}</button>
    </>
  );
}
export default CollButton;
