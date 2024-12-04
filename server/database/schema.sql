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
  consumption decimal(5, 2) not null,
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
  constraint chk_crit_air_card check (crit_air_card between 1 and 5),
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