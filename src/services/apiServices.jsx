import axios from "../utils/axiosCustome";

const getUser = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};
const login = (email, password) => {
  return axios.post(`api/v1/login`, { email, password });
};
const getQuizAll = () => {
  return axios.get(`api/v1/quiz/all`);
};
const getQuizWithQA = (QuizId) => {
  return axios.get(`api/v1/quiz-with-qa/${QuizId}`);
};
const UpsertQuizWithQA = (data) => {
  return axios.post(`api/v1/quiz-upsert-qa`, { ...data });
};
export { getUser, login, getQuizAll, getQuizWithQA, UpsertQuizWithQA };
