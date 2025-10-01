vecreate database loja;

create table tb_produtos(
	prod_id int not null primary key auto_increment,
    prod_nome varchar(50) not null,
    prod_preco decimal(10,2) not null,
    prod_desc varchar(255) not null,
	prod_vendido boolean not null default false
);





create table tb_vendedor(
	vendedor_id int not null primary key auto_increment,
    vendedor_nome varchar(50) not null,
    vendedor_email varchar(50) not null,
	ven_ativo boolean not null default true -- true = ativo, false = inativo
);





create table tb_venda(
	venda_id int not null primary key auto_increment,
    venda_data date not null,
    vendedor_id int not null,
    
    constraint fk_vendedor_id foreign key (vendedor_id) references tb_vendedor(vendedor_id)
);




create table tb_itensvenda(
	itensv_id int not null primary key auto_increment,
    itensv_vtotal float not null,
	itensv_quant int not null,
    
    prod_id int,
    venda_id int,
	constraint fk_prod_id foreign key (prod_id) references tb_produtos(prod_id),
	constraint fk_venda_id foreign key (venda_id) references tb_venda(venda_id)
);





alter table tb_vendedor 
add column ven_ativo boolean not null default true;

alter table tb_produtos 
add column prod_vendido boolean not null default false;

insert into tb_vendedor (vendedor_nome, vendedor_email) 
values ('Gui Mazzega', 'mg@loja.com');
insert into tb_produtos (prod_nome, prod_preco, prod_desc) 
values ('Notebook Lenovo', 3500.00, 'Notebook i5 com 16GB RAM');

