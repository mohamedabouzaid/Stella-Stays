--create unit table
create table unit(
    id bigserial primary key not null ,
    unit_name text unique not null )