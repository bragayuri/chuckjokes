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

export const getCategories = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    const data = api.get("/categories").then((response) => response.data);
    if (data) {
      resolve(data);
    } else {
      reject(new Error("Chuck Norris do not forgive mistakes! The System is dead!HA Ha HA"));
    }
  });
};

export const getFactsByText = async (text: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const data = api.get(`/search?query=${text}`).then((response) => response.data);
    if (data) {
      resolve(data);
    } else {
      reject(new Error("Chuck Norris do not forgive mistakes! The System is dead!HA Ha HA"));
    }
  });
};
