import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type UserInfo = {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  address: string;
  phone_number: string;
};

class UserInfoRepository {
  async create(userInfo: Omit<UserInfo, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into website_user (email, phone_number, address, firstname, lastname) values (?, ?, ?, ?, ?)",
      [
        userInfo.email,
        userInfo.phone_number,
        userInfo.address,
        userInfo.firstname,
        userInfo.lastname,
      ],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "select * from website_user",
    );
    return rows;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from website_user where id = ?",
      [id],
    );
    return rows[0];
  }

  async update(userInfo: UserInfo) {
    await databaseClient.query<Result>(
      "update website_user set email = ?, phone_number = ?, address = ?, firstname = ?, lastname = ? where id = ?",
      [
        userInfo.email,
        userInfo.phone_number,
        userInfo.address,
        userInfo.firstname,
        userInfo.lastname,
        userInfo.id,
      ],
    );
  }

  async delete(id: number) {
    await databaseClient.query<Result>(
      "delete from website_user where id = ?",
      [id],
    );
  }
}

export default new UserInfoRepository();
