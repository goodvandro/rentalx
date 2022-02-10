# Cadastro de carro
**RF**
Deve ser possível cadastrar um novo carro.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado  com disponibilidade, por padrão.
O utilizador responsável pelo cadastro deve ser um utilizador administrador.

# Listagem de carros
**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria. 
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro. 

**RN**
O utilizador não precisar estar logado para listar.

# Cadastro de Especificação no carro
**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar duas vezes uma especificação para o mesmo carro.

# Cadastro de imagens do carro
**RF**
Deve ser possível cadastrar a imagem do carro.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O utilizador deve poder cadastrar mais de uma imagem para o mesmo carro.
O utilizador responsável pelo cadastro deve ser um utilizador administrador.

# Aluguer de carro
**RF**
Deve ser possível cadastrar um aluguer.

**RNF**

**RN**
O aluguer deve ter duração mínima de 24h.
Não deve ser possível cadastrar um novo aluguer caso já exista outro aberto para o mesmo carro.
Não deve ser possível cadastrar um novo aluguer caso já exista outro aberto para o mesmo utilizador.
O utilizador deve estar autenticado na aplicação

<!-- ------------------------------- -->
<!-- **RF** => Requisitos funcionais

**RNF** => Requisitos não funcionais

**RN** => Regras de negócio -->