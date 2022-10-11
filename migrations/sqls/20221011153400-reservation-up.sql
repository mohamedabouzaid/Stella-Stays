/* Create table*/
create table reservation(
   id bigserial primary key not null,
   unit_id bigint references unit on delete cascade not null,
   guest_name text not null,
   check_in timestamp not null,
   check_out timestamp not null,
   is_cancelled boolean default false not null
)