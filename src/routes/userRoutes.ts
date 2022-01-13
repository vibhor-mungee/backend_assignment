import { Router } from "express";
const express = require ('express');
import UserController from "../controllers/UserController";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - phone
 *         - email
 *         - password
 * 
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the User
 *         name:
 *           type: string
 *           description: The User name
 *         phone:
 *           type: string
 *           description: The phone number of User
 *         email:
 *           type: string
 *           description: The email address of User 
 *         password:
 *           type: string
 *           description: The secret password of User 
 *       example:
 *        {
 *          "name":"chauhan",
 *          "phone":"0000000000",
 *          "email" : "ch223@gmail.com",
 *          "password":"smi5"
 *       }
 */

/**
  * @swagger
  * tags:
  *   name: User
  *   description: The User managing API
  */



 // CREATE A NEW USER IN RECORDS********************************
 /**
 * @swagger
 * /createUser:
 *   post:
 *     summary: Create a new User
 *     tags: {User}
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The User was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */

router.post("/createUser", UserController.createUser);


// FIND  ALL USERS FROM RECORDS********************************

/**
 * @swagger
 * /getUsers:
 *   get:
 *     summary: Returns the list of all the User
 *     tags: {Usrs}
 *     responses:
 *       200:
 *         description: The list of the User
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.get("/getUsers", UserController.getUsers);


// FIND AN USER FROM RECORDS USING ID AND PHONE NUMBER********************************
/**
 * @swagger
 * /getUsers/{id}/{phone}:
 *   get:
 *     summary: Get the User by id
 *     tags: {User}
 *     parameters:
 *     - name: id
 *       in: path
 *       description: User id
 *       required: true
 *       type: string
 *     - name: phone
 *       in: path
 *       description: 'User phone  number'
 *       required: true
 *       type: string
 *     responses:
 *       200:
 *         description: The User description by id and phone
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The User was not found
 */
router.get("/getUsers/:id/:phone", UserController.getUsers);

// UPDATE AN USER IN RECORDS********************************
/**
 * @swagger
 * /updateUser/{id}/{phone}:
 *  put:
 *    summary: Update the User by the id and  phone number
 *    tags: {Users}
 *    parameters:
 *     - name: id
 *       in: path
 *       description: User id
 *       required: true
 *       type: string
 *     - name: phone
 *       in: path
 *       description: 'User phone  number'
 *       required: true
 *       type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: The User was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The User was not found
 *      500:
 *        description: Some error happened
 */

router.put("/updateUser/:id/:phone", UserController.updateUser);


// DELETE AN USER FROM RECORDS********************************
/**
 * @swagger
 * /deleteUser/{id}/{phone}:
 *   delete:
 *     summary: Remove the User by id and phone number
 *     tags: {User}
 *     parameters:
*     - name: id
 *       in: path
 *       description: User id
 *       required: true
 *       type: string
 *     - name: phone
 *       in: path
 *       description: 'User phone  number'
 *       required: true
 *       type: string
 *     responses:
 *       200:
 *         description: The User was deleted
 *       404:
 *         description: The User was not found
 */

router.delete("/deleteUser/:id/:phone", UserController.deleteUser);
export default router;
