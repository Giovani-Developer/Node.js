// db.js
import "dotenv/config";
import postgres from "postgres";
import http from "http";
import { neon } from "@neondatabase/serverless";

// conexão com o banco
export const sql = neon(process.env.DATABASE_URL);

