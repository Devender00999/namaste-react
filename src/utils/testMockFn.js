export const mockFetch = (data) => () => {
   return Promise.resolve({
      json: () => {
         return data;
      },
   });
};
