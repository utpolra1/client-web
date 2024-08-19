import axios from "axios";

const axiosPublic = axios.create({baseURL:"https://ecoma-lyart.vercel.app"}); //vercel url ta bosbe

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;