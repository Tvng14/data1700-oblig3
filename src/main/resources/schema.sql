create table Billett
(
    id integer auto_increment not null,
    film varchar(255),
    antall int not null,
    fornavn varchar(255) not null,
    etternavn varchar(255) not null,
    telefonnr int not null,
    epost varchar(255) not null,
    primary key (id)
);