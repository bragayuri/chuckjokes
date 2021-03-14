import api from "src/services/api";

export const getByCategory = async (category: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const data = api.get(`random?category=${category}`).then((response) => response.data);
    if (data) {
      resolve(data);
    } else {
      reject(new Error("Chuck Norris do not forgive mistakes! The System is dead!HA Ha HA"));
    }
  });
};
