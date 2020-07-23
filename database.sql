CREATE DATABASE "giphy_search_favorites";

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key
CREATE TABLE "favorite" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "url" VARCHAR (100) NOT NULL,
    "description" VARCHAR (500),
    "category_id" INT REFERENCES "category"

);

INSERT INTO "favorite" ("name", "url", "category_id")
VALUES ('cat', ';adjsg[', 1),('hat', 'napoifas', 2), ('mat', ';ha;seihf', 3);

SELECT * FROM category;
SELECT * FROM favorite;

SELECT * FROM category
JOIN favorite ON favorite.category_id = category.id;