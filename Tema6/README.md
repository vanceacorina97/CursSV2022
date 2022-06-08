  Tema 6:
- Consta in crearea unei aplicatii de note/feedback care sa foloseasca
  React (client) si Socket.io (server)
- Stabilirea unei conexiuni intre clientul de React si serverul de Socket.io
  se realizeaza cu ajutorul pachetului socket.io-client pe partea de client.
- Aplicatia se foloseste de evenimentele "data" si "feedback" pentru a
  comunica informatie de la client la server.
    + "data" este folosit pentru a transmite datele despre notite asa cum
    sunt ele stocate in server
    + "feedback" este folosit pentru a transmite datele introduse de utilizator
    din client catre server
- Partea de client va implementa notiuti de UX pentru a face folosirea ei intuitiva


  Rularea aplicatiei se face urmarind aceste comenzi:

`cd server`

`npm i`

`npm run devStart`

`cd client`

`npm i`

`npm run start`

Aplicatia se acceseaza in localhost pe portul 3000 (sau pe cel pe care l-ati setat).
