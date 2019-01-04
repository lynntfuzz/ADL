DROP DATABASE IF EXISTS adl_development;
CREATE DATABASE adl_development;

USE adl_development;

CREATE TABLE showcases (
  id INT(11) NOT NULL PRIMARY KEY,
  header VARCHAR(45) NOT NULL,
  body VARCHAR(255) NOT NULL,
  image_path VARCHAR(255),
  createdAt DATE,
  updatedAt DATE
);

SELECT * FROM showcases;
insert into showcases (id, header, body, image_path, createdAt, updatedAt) values  (1 , "Fully Responsive Design", "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!", "bg-showcase-1.jpg", "2018-12-31", "2018-12-31");
insert into showcases (id, header, body, image_path, createdAt, updatedAt) values  (2 , "Updated For Bootstrap 4", "Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!", "bg-showcase-2.jpg", "2018-12-31", "2018-12-31");
insert into showcases (id, header, body, image_path, createdAt, updatedAt) values  (3 , "Easy to Use &amp; Customize", "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!", "bg-showcase-3.jpg", "2018-12-31", "2018-12-31");
