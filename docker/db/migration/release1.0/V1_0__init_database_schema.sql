CREATE SCHEMA IF NOT EXISTS public;
CREATE TABLE "user" (id VARCHAR(36) PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NOT NULL);