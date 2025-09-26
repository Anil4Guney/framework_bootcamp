import axios from "axios";

const appAxios = axios.create({
  baseURL: "http://localhost:3000", // burası JSON-server portu ile aynı olmalı
});

export default appAxios;
