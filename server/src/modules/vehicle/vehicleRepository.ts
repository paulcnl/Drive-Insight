import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Vehicle = {
  id: number;
  owner_id: number;
  brand: string;
  model: string;
  license_plate?: string;
  registration_date: string;
  price: number;
  carbon_footprint: number;
  crit_air_card?: number;
  engine_id: number;
};

class VehicleRepository {
  // The C of CRUD - Create operation

  async create(vehicle: Omit<Vehicle, "id">) {
    // Execute the SQL INSERT query to add a new vehicle to the "vehicle" table
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO vehicle (
      owner_id, 
      brand, 
      model, 
      license_plate, 
      registration_date, 
      price, 
      carbon_footprint, 
      crit_air_card, 
      engine_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        vehicle.owner_id,
        vehicle.brand,
        vehicle.model,
        vehicle.license_plate,
        vehicle.registration_date,
        vehicle.price,
        vehicle.carbon_footprint,
        vehicle.crit_air_card || null,
        vehicle.engine_id,
      ],
    );

    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific vehicle by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from vehicle where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the vehicle
    return rows[0] as Vehicle;
  }

  async readAll(userId: number) {
    // Execute the SQL SELECT query to retrieve all vehicles from the "vehicle" table
    const [rows] = await databaseClient.query<Rows>(
      "select * from vehicle where owner_id = ?",
      [userId],
    );

    // Return the array of vehicles
    return rows as Vehicle[];
  }

  async delete(vehicle: Partial<Vehicle>) {
    await databaseClient.query<Result>(
      "delete from vehicle where id = ? and owner_id = ?",
      [vehicle.id, vehicle.owner_id],
    );
  }
}

export default new VehicleRepository();
