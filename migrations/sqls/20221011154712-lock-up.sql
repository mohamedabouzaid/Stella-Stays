/* create table */
create table lock (
    id bigserial primary key not null,
    unit_id bigint references unit on delete cascade not null,
    remote_lock_id text unique not null
)