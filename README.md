# INTESTAZIONE

_Controllo accesso e-mail e Gioco dei dadi_

## TRACCIA

### E-mail

- Chiedi all’utente la sua email,
- Controlla che sia nella lista di chi può accedere,
- stampa un messaggio appropriato sull’esito del controllo.

---

---

### Gioco dei dadi

- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto.

## ISTRUZIONI

### **_E-mail_**

- **Dichiarare** un array con una lista di e-mail, _"white list"_ ;
- Chiedi all’utente la _"sua email"_ ;

**SE** _"sua email"_ fa parte della _"white list"_

- far apparire messaggio di conferma;

**ALTRIMENTI** Far apparire un messaggio di errore e chiedere di registrarsi;

---

---

### **_Dadi_**

- **Dichiarare** un array di numeri che vanno da 1 al 6 _"Dado"_ ;
- **Dichiarare** _Giocatore_ ;
- **Dichiarare** _NPC_ ;

Segliere randomicamente un numero dall'array _"Dado"_ ;

- assegnarlo a _Giocatore_ ;

Segliere randomicamente un numero dall'array _"Dado"_ ;

- assegnarlo a _NPC_ ;

**SE** _Giocatore_ > _NPC_

- Annunciare la vincita del _Giocatore_ ;

**ALTRIMENTI** **SE** _Giocatore_ < _NPC_

- Annunciare la vincita del _NPC_ ;

**ALTRIMENTI**

- Annunciare il pareggio ;

## FINE
