# 1 pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan de credencial do participante para permitir a entrada no evento.

## 1.1 Requisitos

### 1.1.1 Requisitos Funcionais

- [ ] O organizador deve poder cadastrar um novo evento;
- [ ] O organizador deve poder visualizar dados de um evento;
- [ ] O organizador deve poder visualizar a lista de participantes;
- [ ] O organizador deve poder se inscrever em um evento;
- [ ] O organizador deve poder visualizar seu crachá de inscrição;
- [ ] O organizador deve poder realizar check-in no evento;

### 1.1.2 Regras de negócio

- [ ] O participante só pode se inscrever em um evento uma única vez;
- [ ] O participante só pode se inscrever em eventos com vagas disponíveis;
- [ ] O participante só pode realizar check-in em um evento uma única vez;

### 1.1.3 Requisitos não-funcionais

- [ ] O check-in no evento será realizado através de um QRCode;
