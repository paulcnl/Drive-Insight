import type { ResultSetHeader, RowDataPacket } from "mysql2";
import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface UserRow extends RowDataPacket {
  id: number;
  email: string;
  firstname: string | null;
  lastname: string | null;
  address: string | null;
  phone_number: string | null;
  is_admin: boolean;
}

type User = {
  id: number;
  lastname: string;
  firstname: string;
  adresse: string;
  email: string;
  phoneNumber: number;
  hashed_password: string;
  isAdmin: boolean;
};
class UserRepository {
  async create(user: Partial<User>) {
    const [result] = await databaseClient.query<Result>(
      "insert into website_user (email, hashed_password) values (?, ?)",
      [user.email, user.hashed_password],
    );
    return result.insertId;
  }
  async read(id: number) {
    if (Number.isNaN(id)) {
      throw new Error("Invalid user ID");
    }

    try {
      const [rows] = await databaseClient.query<UserRow[]>(
        `SELECT 
          id,
          email,
          firstname,
          lastname,
          address,
          phone_number,
          is_admin as isAdmin
        FROM website_user 
        WHERE id = ?`,
        [id],
      );
      return rows[0] || null;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw new Error("Failed to fetch user");
    }
  }

  async readAll() {
    try {
      const [rows] = await databaseClient.query<UserRow[]>(
        `SELECT 
          id,
          email,
          firstname,
          lastname,
          address,
          phone_number,
          is_admin as isAdmin
        FROM website_user`,
      );
      return rows;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  }
  async findByEmail(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from website_user where email = ?",
      [email],
    );

    return rows[0] as User | null;
  }
  async update(id: number, userData: Partial<UserRow>) {
    if (Number.isNaN(id)) {
      throw new Error("Invalid user ID");
    }

    try {
      const [result] = await databaseClient.query<ResultSetHeader>(
        `UPDATE website_user 
         SET ? 
         WHERE id = ?`,
        [userData, id],
      );
      return result;
    } catch (error) {
      console.error("Error updating user:", error);
      throw new Error("Failed to update user");
    }
  }

  async delete(id: number) {
    if (Number.isNaN(id)) {
      throw new Error("Invalid user ID");
    }

    try {
      const [result] = await databaseClient.query<ResultSetHeader>(
        "DELETE FROM website_user WHERE id = ?",
        [id],
      );
      return result;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error("Failed to delete user");
    }
  }
}

export default new UserRepository();
