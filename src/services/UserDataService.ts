import http from "@/http-common";

/* eslint-disable */
class UserDataService {
  getAll(): Promise<any> {
    return http.get("/users");
  }

  get(id: any): Promise<any> {
    return http.get(`/user/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/user", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/user/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/user/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/users`);
  }

}

export default new UserDataService();
