import { normalize, schema } from "normalizr";
const Lesson39_2 = (props) => {
  const runExample1 = false;
  const runExample2 = false;
  const runExample3 = true;
  if (runExample1) {
    const myPost = {
      id: "123",
      author: {
        id: "1",
        name: "Paul",
      },
      title: "My awesome blog post",
      comments: [
        {
          id: "324",
          description: "amzing",
          commmenter: {
            id: "2",
            name: "Nicole",
          },
        },
        {
          id: "567",
          description: "amzing",
          commmenter: {
            id: "1",
            name: "Paul",
          },
        },
      ],
    };
    const user = new schema.Entity("users");
    const comment = new schema.Entity("comments", {
      commenter: user,
    });
    const article = new schema.Entity("articles", {
      author: user,
      comments: [comment],
    });
    const normalizeData = normalize(myPost, article);
    console.log(">>> check Example1 normalizedData: ", normalizeData);
  }
  if (runExample2) {
    const quiz = {
      id: 1,
      name: "test",
      description: "just a  test",
      questions: [
        {
          id: 1,
          name: "q1",
          answers: [
            { id: 1, description: "a1", isSelected: false },
            { id: 2, description: "a2", isSelected: false },
          ],
        },
        {
          id: 2,
          name: "q2",
          answers: [
            { id: 3, description: "a2", isSelected: false },
            { id: 4, description: "a3", isSelected: false },
          ],
        },
      ],
    };
    const answer = new schema.Entity("answer");
    const questions = new schema.Entity("questions", {
      answers: [answer],
    });
    const quizTest = new schema.Entity("quizTest", {
      //   answers: answer,
      questions: [questions],
    });
    const normalize1 = normalize(quiz, quizTest);
    console.log(">>> check example2", normalize1);
  }
  if (runExample3) {
    const data = [
      {
        data_detail: [
          {
            category: "newCategory",
            _id: "123",
          },
        ],
        _id: "abc_id",
        customer: {
          _id: "456",
          email: "hello@gmail.com",
          name: "Bob",
        },
        date: "2021-01-10T01:51:24.387Z",
      },
    ];
    const detail = new schema.Entity("detail", {}, { idAttribute: "_id" });
    const customer = new schema.Entity("customer", {}, { idAttribute: "_id" });
    const orders = new schema.Entity(
      "orders",
      {
        /// nếu mảng là array thì [{}] sẽ lấy được id của arry đó cố tính lấy {} thì sẽ lấy được toàn bộ nội dung ở trong
        data_detail: [detail],
        /// còn nếu nó là object {} thì chỉ cần customer: customer là lấy được id customer : {customer thì sẽ đấy được nội dung}
        // nếu customer : [customer] thì vẫn là nội dung như ở dạng array
        customer,
      },
      { idAttribute: "_id" }
    );
    const normalize3 = normalize(data, [orders]);
    console.log(">>> check normalize3", normalize3);
  }
  return <></>;
};
export default Lesson39_2;
