drop database if exists locadora;
create database locadora;
use locadora;
create table Filmes(
    id integer primary key auto_increment,
    titulo varchar(20) not null unique,
    genero varchar(50) not null,
    lancamento date not null
);
describe Filmes;

insert into Filmes(titulo, genero, lancamento)
values
("O Senhor dos Anéis: O Retorno do Rei","Fantasia/Aventura","2002-12-25"),
("Harry Potter e o Cálice de Fogo","Fantasia/Aventura","2005-11-25"),
("Motoqueiro Fantasma","Ação","2007-02-16"),
("Como Treinar o Seu Dragão","Ação/Fantasia","2010-03-26"),
("Shrek","Comédia","2001-06-22");

select * from Filmes;