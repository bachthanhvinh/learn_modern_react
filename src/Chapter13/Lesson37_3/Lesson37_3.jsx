import { useState } from "react";
const Lesson37_3 = () => {
  // không lưu các biến mâu thuẫn với nhau
  const [text, setText] = useState("");
  // như là trang thái đang gửi và đã gửi vậy không cần thiết phải tạo ra 2 state chỉ cần 1 thôi

  // const [isSending, setIsSending] = useState(false);
  // const [isSent, setIsSent] = useState(false);
  const [SendType, setSendType] = useState("typing");

  let IsSending = SendType === "sending";
  let isSent = SendType === "sent";
  async function handleSubmit(e) {
    e.preventDefault();
    // setIsSending(true);
    setSendType("sending");
    await sendMessage(text);
    setSendType("sent");
    // setIsSending(false);
    // setIsSent(true);
  }
  // Pretend to send a message.
  function sendMessage(text) {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }
  // if (isSent) {
  //   return <h1>Thanks for feedback!</h1>;
  // }
  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }
  console.log(SendType);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>How was your stay at The Prancing Pony?</p>
        <textarea
          disabled={IsSending}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button disabled={IsSending} type="submit">
          Send
        </button>
        {IsSending && <p>Sending...</p>}
      </form>
    </>
  );
};
export default Lesson37_3;
