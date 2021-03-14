import api from "src/services/api";

export const getRandomObject = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    const data = api.get("/random").then((response) => response.data);
    if (data) {
      resolve(data);
    } else {
      reject(new Error("It seems I forgot the joke! Try it again!"));
    }
  });
};
