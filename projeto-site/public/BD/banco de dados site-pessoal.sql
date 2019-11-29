create database musica;
use musica;

create table cadastro (
	idcadastro int primary key auto_increment,
    nome varchar(45),
    sobre_nome varchar(45),
    tel char(10),
    endereco varchar(45),
    email varchar(40),
    senha varchar(30),
    confirmar varchar(30)
);