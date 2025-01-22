import type { RequestHandler } from "express";

import userInfoRepository from "./userInfoRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const userInfo = await userInfoRepository.readAll();
    res.json(userInfo);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const userInfoId = Number(req.params.id);
    const userInfo = await userInfoRepository.read(userInfoId);
    if (userInfo == null) {
      res.sendStatus(404);
    } else {
      res.json(userInfo);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newUserInfo = {
      email: req.body.email,
      phone_number: req.body.phone_number,
      address: req.body.address,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    };
    const insertId = await userInfoRepository.create(newUserInfo);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const updatedUserInfo = {
      id: Number(req.params.id),
      email: req.body.email,
      phone_number: req.body.phone_number,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
    };
    console.info("action: ", updatedUserInfo);
    await userInfoRepository.update(updatedUserInfo);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const remove: RequestHandler = async (req, res, next) => {
  try {
    const userInfoId = Number(req.params.id);
    await userInfoRepository.delete(userInfoId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, edit, remove };
