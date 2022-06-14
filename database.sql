
CREATE TABLE images (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(200) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "likes" INT DEFAULT 0
);

INSERT INTO images
	(path, description, likes)
VALUES
	('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0)