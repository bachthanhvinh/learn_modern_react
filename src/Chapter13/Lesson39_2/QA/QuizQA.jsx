import { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import {
  BsPatchMinus,
  BsPatchMinusFill,
  BsPatchPlus,
  BsPatchPlusFill,
  BsPlusSquareFill,
  BsXLg,
} from "react-icons/bs";
import { RiImageAddLine } from "react-icons/ri";
import "./QuizQA.scss";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import Lightbox from "react-awesome-lightbox";

import { toast } from "react-toastify";
import {
  getQuizAll,
  getQuizWithQA,
  UpsertQuizWithQA,
} from "../../../services/apiServices";
import { useSelector } from "react-redux";
import { useImmer } from "use-immer";
import { normalize, schema } from "normalizr";

function QuizQA() {
  const initQuiz = useMemo(
    () => [
      {
        id: uuidv4(),
        description: "",
        imageFile: "",
        imageName: "",
        isCheckQ: true,
        answers: [
          {
            id: uuidv4(),
            description: "",
            isCorrect: false,
            isCheckA: true,
          },
        ],
      },
    ],
    []
  );

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isPreview, setIsPreview] = useState(false);
  const [DataSelectedOption, setDataSelectedOption] = useState([]);
  const [dataPreview, setDataPreview] = useState({
    src: "",
    title: "",
  });
  const [questionEntities, setQuestionEntities] = useImmer({});
  const [answerEntities, setAnswerEntities] = useImmer({});
  const [questionIds, setQuestionIds] = useImmer([]);
  // const [questions, setQuestions] = useImmer(initQuiz);

  const answers = new schema.Entity("answers");
  const questions1 = new schema.Entity("questions", {
    answers: [answers],
  });

  useEffect(() => {
    const newInitQuiz = normalize(initQuiz, [questions1]);
    setQuestionEntities(newInitQuiz.entities.questions || {});
    setAnswerEntities(newInitQuiz.entities.answers || {});
    setQuestionIds(newInitQuiz.result || []);
    console.log("newBegin", newInitQuiz);
  }, []);
  // console.log(questionEntities);
  // console.log("Q", questionEntities, "A", answerEntities, "QID", questionIds);

  useEffect(() => {
    {
      isAuthenticated === true && handleClickDataOptions();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (selectedOption && selectedOption.value) {
      fetchApiQuizAnswerQuiz();
    }
  }, [selectedOption]);

  // return a promise that resolves with a File instance
  function urltoFile(url, filename, mimeType) {
    return fetch(url)
      .then((res) => res.arrayBuffer())
      .then((buf) => new File([buf], filename, { type: mimeType }));
  }

  const fetchApiQuizAnswerQuiz = async () => {
    // const res = await getQuizWithQA(selectedOption.value);
    // let newQ = [];
    // for (let i = 0; i < res.DT.qa.length; i++) {
    //   let q = res.DT.qa[i];
    //   if (q.imageFile) {
    //     q.imageName = `Question-${q.id}.png`;
    //     q.imageFile = await urltoFile(
    //       `data:File/png;base64,${q.imageFile}`,
    //       `Question-${q.id}.png`,
    //       "File/png"
    //     );
    //   }

    //   newQ.push(q);
    // }

    // if (res && res.DT && res.DT.qa) {
    //   for (let i = 0; i < questions.length; i++) {
    //     const question = questions[i];
    //     if (question) {
    //       setQuestions({ ...newQ });
    //     }
    //   }
    // }

    const res = await getQuizWithQA(selectedOption.value);

    if (res && res.DT && res.DT.qa) {
      const newQ = await Promise.all(
        res.DT.qa.map(async (q) => {
          if (q.imageFile) {
            q.imageName = `Question-${q.id}.png`;
            q.imageFile = await urltoFile(
              `data:File/png;base64,${q.imageFile}`,
              `Question-${q.id}.png`,
              "File/png"
            );
          }
          return q;
        })
      );

      const normalized = normalize(newQ, [questions1]);

      setQuestionEntities(normalized.entities.questions || {});
      setAnswerEntities(normalized.entities.answers || {});
      setQuestionIds(normalized.result || []);
      console.log("fetchAPI", normalized);
    }
  };

  const handleClickDataOptions = async () => {
    const res = await getQuizAll();
    const options =
      res &&
      res.DT &&
      res.DT.map((options) => {
        return {
          value: options.id,
          label: `${options.id} - ${options.description}`,
        };
      });
    setDataSelectedOption(options);
  };

  const handleClickQ = (type, questionId) => {
    const newQId = uuidv4();
    const newAId = uuidv4();
    if (type === "ADD") {
      setQuestionEntities((draft) => {
        draft[newQId] = {
          id: newQId,
          description: "",
          imageFile: "",
          imageName: "",
          isCheckQ: true,
          answers: [newAId],
        };
      });
      setAnswerEntities((draft) => {
        draft[newAId] = {
          id: newAId,
          description: "",
          isCorrect: false,
          isCheckA: true,
        };
      });
      setQuestionIds((draft) => {
        draft.push(newQId);
      });
    }
    if (type === "REMOVE") {
      setQuestionEntities((draft) => {
        const q = draft[questionId.id];
        if (q) q.isRemoving = true;
      });

      setTimeout(() => {
        let question = questionEntities[questionId.id];
        if (question) {
          if (question.answers && question.answers.length > 0) {
            setAnswerEntities((draft) => {
              question.answers.forEach((a) => {
                delete draft[a];
              });
            });
          }
        }
        setQuestionIds((draft) => draft.filter((id) => id !== questionId.id));
        setQuestionEntities((draft) => {
          delete draft[questionId.id];
        });
      }, 300);
    }
  };

  const handleClickA = (type, questionId, answerId) => {
    if (type === "ADDANSWER") {
      const newAId = uuidv4();

      setAnswerEntities((draft) => {
        draft[newAId] = {
          id: newAId,
          description: "",
          isCorrect: false,
          isCheckA: true,
        };
      });

      setQuestionEntities((draft) => {
        const question = draft[questionId.id];
        if (question) {
          question.answers.push(newAId);
        }
      });
    }

    if (type === "REMOVEANSWER") {
      setAnswerEntities((draft) => {
        const a = draft[answerId.id];
        if (a) a.isRemoving = true;
      });
      setTimeout(() => {
        setQuestionEntities((draft) => {
          const question = draft[questionId.id];
          if (question) {
            question.answers = question.answers.filter(
              (id) => id !== answerId.id
            );
          }
        });
        setAnswerEntities((draft) => {
          delete draft[answerId.id];
        });
      }, 300);
    }
  };
  console.log("answers:", answerEntities);
  console.log("questions:", questionEntities);
  // console.log("result", questionIds);
  const handleOnChangeQuestion = (type, qId, value) => {
    if (type === "QUESTION") {
      setQuestionEntities((draft) => {
        const question = draft[qId];
        if (question) {
          question.description = value;
        }
      });
      //use-immer
      // setQuestions((draft) => {
      //   let question = draft.find((q) => q.id === qId);
      //   if (!question) return;
      //   question.description = value;
      // });
    }
  };
  const handleOnchangeQuestionFile = (qId, event) => {
    // use-immer
    const file = event?.target?.files[0];
    if (!file) return;
    setQuestionEntities((draft) => {
      const question = draft[qId];
      if (question) {
        question.imageFile = file;
        question.imageName = file.name;
      }
    });
    // setQuestions((draft) => {
    //   let question = draft.find((q) => q.id === qId);
    //   if (question) {
    //     question.imageFile = file;
    //     question.imageName = file.name;
    //   }
    // });
  };
  const handleOnChangeAnswer = (type, qId, aId, value) => {
    setAnswerEntities((draft) => {
      const a = draft[aId];
      if (a) {
        if (type === "ANSWER") {
          a.description = value;
        }
        if (type === "CHECKBOX") {
          a.isCorrect = value;
        }
      }
    });
    // setQuestions((draft) => {
    //   const question = draft.find((q) => q.id === qId);
    //   if (!question) return;
    //   const answer = question.answers.find((a) => a.id === aId);
    //   if (answer) {
    //     if (type === "ANSWER") {
    //       answer.description = value;
    //     }
    //     if (type === "CHECKBOX") {
    //       answer.isCorrect = value;
    //     }
    //   }
    // });
  };

  const handleSubmitQuestionForQuiz = async () => {
    //valid
    if (_.isEmpty(selectedOption)) {
      toast.error("Cannot empty quiz");
      return;
    }
    let qKeys = Object.keys(questionEntities);
    let isvalidq = true;
    let flagQ1 = 0;

    for (let i = 0; i < qKeys.length; i++) {
      const q = questionEntities[qKeys[i]];
      if (!q.description) {
        isvalidq = false;
        flagQ1 = i;
        break;
      }
    }

    if (isvalidq === false) {
      setQuestionEntities((draft) => {
        const q = draft[qKeys[flagQ1]];
        if (q) q.isCheckQ = false;
      });
      toast.error(`Not empty valid  Question ${flagQ1 + 1} `);
      return;
    } else {
      setQuestionEntities((draft) => {
        Object.values(draft).forEach((q) => {
          q.isCheckQ = true;
        });
      });
    }

    let aKeys = Object.keys(answerEntities);
    let isvalidAnswer = true;
    let flagQ = 0,
      flagA = 0;

    for (let i = 0; i < aKeys.length; i++) {
      const a = answerEntities[aKeys[i]];
      if (!a.description) {
        isvalidAnswer = false;
        flagA = i;
        break;
      }
    }

    if (isvalidAnswer === false) {
      setAnswerEntities((draft) => {
        const a = draft[aKeys[flagA]];
        if (a) a.isCheckA = false;
      });
      toast.error(
        `Not empty valid Answer ${flagA + 1} at Question ${flagQ + 1}`
      );
      return;
    } else {
      setAnswerEntities((draft) => {
        Object.values(draft).forEach((a) => {
          a.isCheckA = true;
        });
      });
    }

    const hasCorrectAnswer = Object.values(answerEntities).some(
      (a) => a.isCorrect === true
    );
    if (!hasCorrectAnswer) {
      toast.error(`at least 1 question correct!`);
      return;
    }
    const CloneQuestions = _.cloneDeep(questionEntities);
    const CloneAnswers = _.cloneDeep(answerEntities);
    const newQuestions = [];

    for (let question of Object.values(CloneQuestions)) {
      if (question.imageFile) {
        question.imageFile = await getBase64(question.imageFile);
      }
      question.answers = question.answers.map((item) => CloneAnswers[item]);
      newQuestions.push(question);
    }

    const rs = await UpsertQuizWithQA({
      quizId: selectedOption.value,
      questions: newQuestions,
    });

    if (rs && rs.EC === 0) {
      toast.success(rs.EM);
      fetchApiQuizAnswerQuiz();
    } else {
      toast.error(rs.EM);
    }
  };
  const handleClickPreview = (qId) => {
    // setQuestions((draft) => {
    //   let question = draft.find((q) => q.id === qId);
    //   if (!question) return;
    //   setDataPreview({
    //     src: URL.createObjectURL(question.imageFile),
    //     title: question.imageName,
    //   });
    //   setIsPreview(true);
    // });

    let question = questionEntities[qId];
    if (question) {
      setDataPreview({
        src: URL.createObjectURL(question.imageFile),
        title: question.imageName,
      });
      setIsPreview(true);
    }
  };

  return (
    <>
      <div className="container container-question">
        <div className="mt-3">
          <h5>Manage Questions </h5>
        </div>

        <div className="row">
          <div className="">
            <div className=" col-6 form-group">
              <label className="mb-1">Select Quiz:</label>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={DataSelectedOption}
              />
            </div>
            <label className="mt-3 mb-1">Add Questions:</label>
            {questionIds &&
              questionIds.length > 0 &&
              questionIds.map((qId, index) => {
                const q = questionEntities[qId];
                return (
                  <div
                    key={q.id}
                    className={`q-main ${q.isRemoving ? "removing" : ""}`}
                  >
                    <div className="add-question-desc">
                      <div className=" col-6 form-floating  ">
                        <input
                          type="text"
                          className={
                            // q?.isCheckQ
                            `form-control `
                            // : `form-control is-invalid`
                          }
                          id="floatingInput"
                          placeholder="description"
                          value={q.description}
                          onChange={(event) =>
                            handleOnChangeQuestion(
                              "QUESTION",
                              q.id,
                              event.target.value
                            )
                          }
                        />
                        <label htmlFor="floatingInput">
                          Question {`${index + 1}`} 's description
                        </label>
                      </div>
                      <div className="upload-image_question ">
                        <div className=" ">
                          <label
                            htmlFor={`${q.id}`}
                            className="icon-image-file"
                          >
                            <RiImageAddLine />
                          </label>
                          <input
                            id={`${q.id}`}
                            type="file"
                            onChange={(event) =>
                              handleOnchangeQuestionFile(q.id, event)
                            }
                            hidden
                          />
                          {q.imageName.length > 0 ? (
                            <span
                              className="uploadfile"
                              onClick={() => handleClickPreview(q.id)}
                            >
                              {q.imageName}
                            </span>
                          ) : (
                            <span className="uploadfile">
                              0 file this uploaded
                            </span>
                          )}
                        </div>
                        <div className="btn-question ">
                          <button
                            className="add-question "
                            onClick={() => handleClickQ("ADD", "")}
                          >
                            <BsPatchPlusFill />
                          </button>
                          {questionIds && questionIds.length > 1 && (
                            <button
                              className="delete-question"
                              onClick={() =>
                                handleClickQ("REMOVE", { id: q.id })
                              }
                            >
                              <BsPatchMinusFill />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    {q.answers &&
                      q.answers.length > 0 &&
                      q.answers.map((answerId, index) => {
                        const answers = answerEntities[answerId];
                        // console.log(answers);

                        return (
                          <div
                            key={answers.id}
                            className={`question-answer ${
                              answers.isRemoving ? "removing" : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="question-answer_checkbox"
                              checked={answers.isCorrect}
                              onChange={(event) =>
                                handleOnChangeAnswer(
                                  "CHECKBOX",
                                  q.id,
                                  answers.id,
                                  event.target.checked
                                )
                              }
                            />
                            <div className="col-6 form-floating  ">
                              <input
                                type="text"
                                className={
                                  // answers?.isCheckA
                                  `form-control `
                                  // : `form-control is-invalid`
                                }
                                id="floatingInput"
                                placeholder="description"
                                value={answers.description}
                                onChange={(event) =>
                                  handleOnChangeAnswer(
                                    "ANSWER",
                                    q.id,
                                    answers.id,
                                    event.target.value
                                  )
                                }
                              />
                              <label htmlFor="floatingInput">
                                Answer {`${index + 1}`}
                              </label>
                            </div>
                            <div className="btn-answer ">
                              <button
                                className="add-answer "
                                onClick={() =>
                                  handleClickA("ADDANSWER", {
                                    id: q.id,
                                  })
                                }
                              >
                                <FaSquarePlus />
                              </button>
                              {q.answers && q.answers.length > 1 && (
                                <button
                                  className="delete-answer"
                                  onClick={() =>
                                    handleClickA(
                                      "REMOVEANSWER",
                                      { id: q.id },
                                      { id: answers.id }
                                    )
                                  }
                                >
                                  <FaSquareMinus />
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            {questionIds && questionIds.length > 0 && (
              <div>
                <button
                  className="btn btn-warning mb-5"
                  onClick={() => handleSubmitQuestionForQuiz()}
                >
                  Save Question
                </button>
              </div>
            )}
            {isPreview && (
              <Lightbox
                image={dataPreview.src}
                title={dataPreview.title}
                onClose={() => setIsPreview(false)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default QuizQA;
