import axios from "axios";

const axiosPublic = axios.create({baseURL:"http://localhost:7000/"}); //vercel url ta bosbe

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;