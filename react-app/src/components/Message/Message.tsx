let count = 0;
function Message() {
  console.log("message called");

  count++;
  return <div>Message {count}</div>;
}
export default Message;
