const publicApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

const privateApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 8000,
  headers: { "x-Client": "frontend-study" },
});

function getToken() {
  return null;
}

privateApi.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = "Bearer" + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

privateApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        //로그인으로 이동
      }
    }
    return Promise.reject(error);
  }
);

async function testCall() {
  try {
    const res = await privateApi.get("/posts/1");
    console.log(res.data);
  } catch (e) {
    console.log("요청실패:", e);
  }
}
