/* create table*/
create table access_code(
    id bigserial primary key  not null,
    lock_id bigint references lock  on delete cascade not null,
    reservation_id bigint references reservation on delete cascade not null,
    passcode text not null,
    remote_passcode_id text not null
)