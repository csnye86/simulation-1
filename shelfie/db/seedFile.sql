drop table if exists users;

create table users (
  id serial primary key,
  name text,
  email text,
  phone bigInt
);

insert into users
(name, email, phone)
values
('Me', 'me@me.com', 1234567890),
('You', 'you@you.com', 9876543210),
('Joe', 'joe@ymail.com', 5678901234),
('Lisa', 'lisa@yahoo.com', 3456789012);