drop database if exists lojinha;
create database lojinha;
use lojinha;

create table Clientes(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null
);

describe Clientes;



insert into Clientes(cpf, nome, sobrenome, nascimento) values
("111.111.111-11", "Jair", "Silva", "1980-01-01"),
("222.222.222-22", "Jamanta", "Silveira", "1990-11-10"),
("333.333.333-33", "Jaminto", "limeira", "1999-02-05"),
("444.444.444-44", "Jacinto", "barros", "1978-12-01"),
("555.555.555-55", "Jaline", "solza", "1984-10-01");

select * from Clientes;