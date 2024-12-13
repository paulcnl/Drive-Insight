create table website_user (
  id int unsigned primary key auto_increment not null,
  lastname varchar(255) not null,
  firstname varchar(255) not null,
  address tinytext not null,
  email varchar(255) not null unique,
  phone_number char(10) not null,
  password char(60) not null,
  is_admin boolean null,
  constraint chk_phone_number_length check (length(phone_number) = 10)
);

create table engine (
  id int unsigned primary key auto_increment not null,
  horsepower int unsigned not null,
  power_type ENUM('electric', 'gas') not null,
  consumption decimal(5, 2) null,
  autonomy_km int unsigned not null,
  refill_price decimal(5, 2) unsigned not null
);

create table vehicle (
  id int unsigned primary key auto_increment not null,
  owner_id int unsigned not null,
  brand varchar(255) not null,
  model varchar(255) not null,
  license_plate varchar(255) not null unique,
  registration_date date not null,
  price decimal(10, 2) unsigned null,
  carbon_footprint float null,
  crit_air_card int unsigned null,
  engine_id int unsigned not null,
  foreign key(owner_id) references website_user(id),
  foreign key(engine_id) references engine(id),
  constraint chk_crit_air_card check (crit_air_card between 0 and 5),
  constraint chk_license_plate check (length(license_plate) >= 7 and length(license_plate) <= 9)
);

create table company (
  id int unsigned primary key auto_increment not null,
  company_name varchar(255) not null,
  owner_id int unsigned not null,
  fleet_size int unsigned not null,
  company_address tinytext not null,
  foreign key(owner_id) references website_user(id)
);

create table driving_habit (
  user_id int unsigned primary key auto_increment not null,
  driven_distance int unsigned not null,
  fuel_cost decimal(10, 2) not null,
  foreign key(user_id) references website_user(id)
);


insert into website_user (lastname, firstname, address, email, phone_number, password, is_admin) values ('Doe', 'John', '1, rue de la Paix, 75000 Paris', ' [email protected]', '0123456789', 'password', true);
insert into website_user (lastname, firstname, address, email, phone_number, password, is_admin) values ('Doe', 'Jane', '1, rue de la Paix, 75000 Paris', ' [email protected2]', '0123456789', 'password', false);
insert into website_user (lastname, firstname, address, email, phone_number, password, is_admin) values ('Doe', 'Jack', '1, rue de la Paix, 75000 Paris', ' [email protected3]', '0123456789', 'password', false);

insert into engine (horsepower, power_type, consumption, autonomy_km, refill_price) values (100, 'electric', 0.0, 300, 50.0);
insert into engine (horsepower, power_type, consumption, autonomy_km, refill_price) values (100, 'gas', 5.0, 300, 50.0);

insert into vehicle (owner_id, brand, model, license_plate, registration_date, price, carbon_footprint, crit_air_card, engine_id) values (1, 'Renault', 'Zoe', 'AB123CD', '2020-01-01', 20000, 0.0, 1, 1);
insert into vehicle (owner_id, brand, model, license_plate, registration_date, price, carbon_footprint, crit_air_card, engine_id) values (2, 'Renault', 'Clio', 'EF456GH', '2020-01-01', 15000, 0.0, 1, 1);
insert into vehicle (owner_id, brand, model, license_plate, registration_date, price, carbon_footprint, crit_air_card, engine_id) values (3, 'Renault', 'Twingo', 'IJ789KL', '2020-01-01', 10000, 0.0, 1, 1);

insert into vehicle (owner_id, brand, model, license_plate, registration_date, price, carbon_footprint, crit_air_card, engine_id) values (1, 'VW', 'Golf', 'AB123CE', '2020-01-01', 20000, 0.0, 1, 2);
insert into vehicle (owner_id, brand, model, license_plate, registration_date, price, carbon_footprint, crit_air_card, engine_id) values (2, 'VW', 'Golf', 'EF456GI', '2020-01-01', 15000, 0.0, 1, 2);
insert into vehicle (owner_id, brand, model, license_plate, registration_date, price, carbon_footprint, crit_air_card, engine_id) values (3, 'VW', 'Golf', 'IJ789KM', '2020-01-01', 10000, 0.0, 1, 2);

insert into driving_habit (user_id, driven_distance, fuel_cost) values (1, 1000, 100.0);
insert into driving_habit (user_id, driven_distance, fuel_cost) values (2, 2000, 200.0);
insert into driving_habit (user_id, driven_distance, fuel_cost) values (3, 3000, 300.0);

insert into company (company_name, owner_id, fleet_size, company_address) values ('Company', 1, 10, '1, rue de la Paix, 75000 Paris');
insert into company (company_name, owner_id, fleet_size, company_address) values ('Company 2', 1, 20, '1, rue de la Paix, 75000 Paris');