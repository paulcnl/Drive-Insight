import type { RequestHandler } from "express";

// To infity and beyond
// Import access to data
import vehicleRepository from "./vehicleRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all vehicles
    const vehicles = await vehicleRepository.readAll();

    // Respond with the vehicles in JSON format
    res.json(vehicles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific vehicle based on the provided ID
    const vehicleId = Number(req.params.id);
    const vehicle = await vehicleRepository.read(vehicleId);

    // If the vehicle is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the vehicle in JSON format
    if (vehicle == null) {
      res.sendStatus(404);
    } else {
      res.json(vehicle);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
// const add: RequestHandler = async (req, res, next) => {
//   try {
// Extract the vehicle data from the request body
// const newvehicle = {
//   title: req.body.title,
//   user_id: req.body.user_id,
// };

// Create the vehicle
// const insertId = await vehicleRepository.create(newVehicle); // TODO: Modify this line to insert the vehicle data

// Respond with HTTP 201 (Created) and the ID of the newly inserted vehicle
// res.status(201).json({ insertId }); // TODO: Modify this line to return the ID of the newly inserted vehicle
// } catch (err) { // TODO: Modify this line to catch the error
// Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

export default { browse, read /*add */ };
