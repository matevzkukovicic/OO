# Dokument zahtev

|                             |                                                         |
| :-------------------------- | :------------------------------------------------------ |
| **Naziv projekta**          | Pet Buddy                               |
| **Člani projektne skupine** | Dizdarević Tim, Kukovičič Matevž, Grubar Jores, Jurkas Živa in Černe Žan |
| **Kraj in datum**           | Ljubljana, April 2021                                   |

## Povzetek projekta

Ljudje smo sočutna bitja, ki potrebujemo družbo – tako človeško, kot živalsko. V Sloveniji ima skoraj dve tretini ljudi hišnega ljublenčka. Mnogi zaradi časovnih ovir in drugih obveznosti težko skrbijo za svojo domačo žival. Naša platforma Pet Buddy omogoča izposojo hišnih ljubljenčkov s socialnim aspektom deljenja druženj. Pet Buddy je primerna tudi za ljubitelje živali, ki nimajo časa za isposojo. Na naši platformi lahko vsak uporabnik uživa v fotografijah hišnih ljubljenčkov ali pa si hišnega ljubljenčka kar izposodi. S pomočjo naše platforme želimo hišnim ljubljenčkom omogočiti skrb in pozornost, ki jo potrebujejo, njihovim lastnikom pa olajšati delo in zadovoljiti potrebe vseh ljubiteljev domačih živali.


## 1. Uvod

Aplikacija Pet Buddy bo reševala problem pomanjkanje časa za skrb za hišne ljubljenčke in problem ljudi, ki si želijo imeti hišne ljubljenčke, vendar jim to različni dejavniki onemogočajo. Da pa bo uporabniška izkušnja bolj pestra, bomo uvedli tudi socialni aspekt in tako uporabnikom omogočili, da svoje izkušnje delijo z drugimi uporabniki. 
Glavne funkcionalnosti aplikacije zajemajo oddajo oglasov, ogled in odzivanje na le-te in pa objava ter ogled uporabniških objav. Oglase smo primarno razdelili v dve kategoriji, oglase iskalcev in oglase skrbnikov. Uporabniki, ki iščejo nekoga, ki bi skrbel za njihove ljubljenčke, objavijo oglas iskalcev - to storijo tako, da pri oddaji oglasa izberejo vrsto oglasa *Iščem*. Tisti, ki pa ponujajo oskrbo živali drugim uporabnikom, objavijo oglas skrbnikov, torej izberejo vrsto oglasa *Ponujam*. Pri ogledu oglasov lahko oglase še naprej filtriramo po regiji ter vrsti živali, v obeh kategorijah je možno izbrati več filtrov hkrati. Uporabniki se lahko na oglase tudi odzovejo, to storijo s klikom na gumb *Zanima me* na izbranem oglasu. Uporabnik, ki je oglas objavil lahko sedaj to prošnjo sprejme ali zavrne. 
Naša aplikacija pa ima, kot že omenjeno, tudi socialni vidik. To bomo realizirali kot možnost objav uporabniških objav, torej objav z ljubljenčki, za katere skrbimo. Uporabniška objava zajema fotografijo z ljubljenčkom in kratek opis. Na to objavo se bodo lahko odzvali tudi drugi uporabniki, in sicer jo bodo lahko všečkali in komentirali.
Vsak uporabnik bo imel tudi svoj uporabniški profil, na katerem bodo lahko drugi uporabniki (in tudi sam) videli njegove uporabniške objave, oglase in njegove živali, če jih ima. Na profilu bo tudi kratek opis uporabnika, njegova uporabniška fotografija, lokacija in pa odzivi drugih uporabnikov. Uporabniki lahko na profilu tudi vidijo koliko sledilcev ima nek uporabnik in koliko uporabnikom ta uporabnik sledi. Lastnik profila si lahko ogleda spisek sledilcev ter uporabnikov, katerim sledi.
Če ima uporabnik v lasti ljubljenčke, za katere išče oskrbo, lahko njihove fotografije in kratek opis s podatki objavi v razdelku živali. 
Uporabniki si lahko na profilu ogledajo odzive uporabnikov, lahko pa ga tudi pustijo. Odziv zajema oceno uporabnika, od ene do pet zvezdic, in pa opcijsko tudi kratko utemeljitev.
S temi funkcionalnostmi smo združili potrebo po skrbi in oskrbi ljubljenčkov ter potrebo po druženju in deljenju izkušenj z drugimi ljudmi.

## 2. Uporabniške vloge

- **Administrator**: uporabniška vloga, kateri je omogočena administracija
uporabniških profilov (brisanje, deaktiviranje).
- **Moderator**: uporabniška vloga, kateri je omogočena moderacija same vsebine (objave, oglasi, živali).
- **Uporabnik**: prijavljen uporabnik, s predhodno registriranim računom, kateremu je na voljo iskanje ali nudenje oskrbe za živali (torej je lahko **Iskalec** ali **Skrbnik**).
- **Neregistriran uporabnik**: uporabnik, kateremu je dostopna le vpisna stran in ima možnost kreacije uporabniškega računa, ter tako postati **Uporabnik**.
- **Neprijavljen uporabnik**: uporabnik, ki ni v uporabniški vlogi **Uporabnik**, vendar si lahko vseeno ogleda dani profil prek pridobljene povezave do tega profila

## 3. Slovar pojmov
Opredelitev terminologije, ki se uporablja pri problemski domeni Pet Buddy. Opisuje pojme, ki so mogoče neznani ali nerazumljivi.

* **Profil**: pregled nad informacijami o določenem uporabniku. Profil vsebuje opis, sliko uporabika in objave uporabnika.
* **Uporabniška objava**: vsebina, ki se podobno kot pri družbenih omrežjih deli prek uporabniškega profila. Vključuje tudi sliko in besedilo. Drugi uporabniki lahko všečkajo in komentirajo uporabniško objavo.
* **Oglas**: objava, ki vsebuje podatke o predmetu oglaševanja (žival ali oseba).
* **Živali**: slika s podatki in opisom živali, katere lastnik je uporabnik (lastnik profila).
* **Followers**: uporabniki, ki sledijo nekemu uporabniku.
* **Following**: uporabniki, ki jim sledi nek uporabnik.
* **Token**: žeton, ki ga uporabnik prejme po opravljeni izposoji živali.
* **Domača stran**: prva stran, ki jo uporabnik vidi, ko se prijavi v sistem. Domača stran vsebuje objave ostalih uporabnikov.
* **Orodna vrstica**: zgornji del uporabniškega vmestnika s funkcionalnostmi iskanja, drop-down menija, sporočil in sliko uporabnika, kot povezava do uporabniškega profila. 
* **Aktivni oglas**: ko je oglas na seznamu s strani uporabnika dovoljen, dobi status aktivni oglas, kar pomeni, da lastnik oglasa trenutno lahko trži oglas in obstaja možnost, da dobiva ponudbe s strani uporabnikov.  
* **Neaktivni oglas**: ko oglas na seznamu s strani uporabnika ni dovoljen, dobi status neaktivni oglas, kar pomeni, da lastnik oglasa trenutno ne trži ter ne prejema ponudb s strani uporabnikov za ta oglas.
* **Iskalci**: uporabniki, ki iščejo izposojo domačih živali.
* **Skrbniki**: uporabniki, ki ponujajo izposojo domačih živali.
* **API**: aplikacijski programski vmesnik do zunanjih sistemov.
* **Všečkanje**: označiti uporabniško objavo kot všečno.

## 4. Diagram primerov uporabe
Na spodnji sliki vidimo diagram primerov uporabe v jeziku UML. Iz diagrama lahko razberemo interakcijo med akterji in funkcionalnostmi.

![Slika DUP](https://github.com/tpo-2020-2021/LP234-23/blob/d0b2e387ef193e4539a772871fe45697cd49554c/docs/img/DPU4.png)

## 5. Funkcionalne zahteve
V tem razdelku so opisane posamezne funkcionalnosti, ki jih aplikacija Pet Buddy ponuja.

----------------------------------------------------------------------------------------------------------------------------------------------------------------
### REGISTRACIJA

#### Povzetek funkcionalnosti

Neregistriran uporabnik se lahko registrira in s tem pridobi uporabniški račun in dostop do funkcionalnosti sistema. Pri registraciji izpolni obrazec s svojim uporabniškim imenom, e-poštnim naslovom in geslom. Registracijo novega uporabniškega računa lahko izvede tudi administrator.

#### Osnovni tok

1. Sistem neregistriranemu uporabniku ponudi možnost registracije novega uporabniškega računa.
2. Sistem neregistriranemu uporabniku ponudi registracijski obrazec.
3. Neregistriran uporabnik v registracijski obrazec vpiše svoje želeno uporabniško ime, e-poštni naslov in geslo, ki je dolgo vsaj 8 znakov.
4. Neregistriran uporabnik s klikom na gumb odda registracijski obrazec.
5. Sistem sprejme podatke o novem uporabniškem računu.
6. Sistem preveri veljavnost podatkov.
7. Sistem neregistriranemu uporabniku na e-poštni naslov pošlje sporočilo za potrditev registracije.
8. Neregistriran uporabnik na svojem e-poštnem naslovu sledi povezavi za potrditev registracije.
9. Sistem zazna potrditev s strani uporabnika.
10. Sistem novo dodanemu uporabniškem računu generira enolični identifikator in mu dodeli pravice, ki mu pripadajo.
11. Sistem neregistriranemu uporabniku prikaže sporočilo o uspešni registraciji.

#### Alternativni tok(ovi)

**Alternativni tok 1**

1. Sistem administratorju ponudi možnost registracije novega uporabniškega računa.
2. Sistem administratorju ponudi registracijski obrazec.
3. Administrator v registracijski obrazec vpiše želeno uporabniško ime, e-poštni naslov in geslo, ki je dolgo vsaj 8 znakov.
4. Administrator s klikom na gumb odda registracijski obrazec.
5. Sistem sprejme podatke o novem uporabniškem računu.
6. Sistem preveri veljavnost podatkov.
7. Sistem neregistriranemu uporabniku na e-poštni naslov pošlje sporočilo za potrditev registracije.
8. Neregistriran uporabnik na svojem e-poštnem naslovu sledi povezavi za potrditev registracije.
9. Sistem zazna potrditev s strani uporabnika.
10. Sistem novo dodanemu uporabniškem računu generira enolični identifikator in mu dodeli pravice, ki mu pripadajo.
11. Sistem neregistriranemu uporabniku prikaže sporočilo o uspešni registraciji.

**Izjemni tok 1**

Neregistriran uporabnik se je poskusil registrirati z e-poštnim naslovom, ki je že v uporabi. Sistem vrne obvestilo o zavrnjeni registraciji in uporabniku ponudi možnost spremembe e-poštnega naslova.

**Izjemni tok 2**

Neregistriran uporabnik se je poskusil registrirati z uporabniškim imenom, ki je že v uporabi. Sistem vrne obvestilo o zavrnjeni registraciji in uporabniku ponudi možnost spremembe uporabniškega imena.

**Izjemni tok 3**

Neregistriran uporabnik izpolni registracijski obrazec z geslom, ki je krajše od 8 znakov in ga poskuša oddati. Sistem vrne obvestilo o zavrnjeni registraciji in uporabniku ponudi možnost ponovne registracije.

**Izjemni tok 4**

Neregistriran uporabnik izpolni in odda registracijski obrazec, a ne potrdi svojega e-poštnega naslova. Postopek registracije ni dokončan, zato se neregistriran uporabnik ne more prijaviti v sistem.


#### Pogoji

* Neregistriran uporabnik ima veljaven e-poštni naslov.
* Želeno uporabniško ime in e-poštni naslov še nista v sistemu.
* Neregistriran uporabnik ne sme biti prijavljen v sistem.

#### Posledice

* Neregistriran uporabnik je po potrditvi svojega e-poštnega naslova uspešno registriran.
* Neregistriran uporabnik se sedaj lahko v sistem prijavi s svojimi podatki in sistem mu to dovoli.
* Neregistriran uporabnik dobi dostop do njemu namenjenih funkcionalnosti sistema.

#### Posebnosti

* Pri tej funkcionalnosti je neregistriran uporabnik hkrati tudi neprijavljen uporabnik. 
* Podatki o registraciji se pošiljajo po varni povezavi in so shranjeni z ustreznimi varnostnimi praksami.

#### Prioritete identificiranih funkcionalnosti

MUST HAVE

#### Sprejemni testi

* Osnovni tok: Neregistriran uporabnik izpolni obrazec za registracijo in sledi povezavi za potrditev registracije. Uporabnik se sedaj lahko prijavi v sistem.
* Alternativni tok 1: Administrator izpolni obrazec za registracijo in odda obrazec za registracijo. Neregistriran uporabnik na e-poštni naslov prejme sporočilo za potrditev registracije. Neregistriran uporabnik na svojem e-poštnem naslovu sledi povezavi za potrditev registracije. Uporabnik se sedaj lahko prijavi v sistem.
* Izjemni tok 1: Neregistriran uporabnik se poskuša registrirati z e-poštnim naslovom, ki je že v uporabi. Sistem mu ne dovoli registracije in mu prikaže obvestilo, da naj uporabi drug e-poštni naslov, ker je ta že v uporabi.
* Izjemni tok 2: Neregistriran uporabnik se poskuša registrirati z uporabniškim imenom, ki je že v uporabi. Sistem mu ne dovoli registracije in mu prikaže obvestilo, da naj si izbere drugo uporabniško ime, ki še ni v uporabi.
* Izjemni tok 3: Neregistriran uporabnik izpolni obrazec z geslom krajšim od 8-ih znakov. Sistem mu ne dovoli registracije in mu prikaže obvestilo, da naj vnese daljše geslo.
* Izjemni tok 4: Neregistriran uporabnik pravilno izpolni obrazec za registracijo in ga odda, vendar ne potrdi svojega e-poštnega naslova. Prijava v sistem mu je onemogočena. Sistem uporabniku ponudi možnost ponovne registracije.
----------------------------------------------------------------------------------------------------------------------------------------------------------------
### PRIJAVA

#### Povzetek funkcionalnosti

Uporabnik, moderator in administrator se lahko prijavijo v sistem. S tem pridobijo dostop do funkcionalnosti, ki so jim namenjene.

#### Osnovni tok

Za uporabnika:
1. Sistem uporabniku ponudi možnost prijave v sistem.
2. Uporabnik v prijavni obrazec vpiše e-poštni naslov in geslo, ki ju je vnesel pri registraciji.
3. Uporabnik klikne na gumb za prijavo v sistem.
4. Sistem sprejme podatke za prijavo v sistem.
5. Sistem preveri veljavnost podatkov.
6. Uporabnik je prijavljen v svoj profil.

Za moderatorja:
1. Sistem moderatorju ponudi možnost prijave v sistem.
2. Moderator v prijavni obrazec vpiše e-poštni naslov in geslo, ki ju je vnesel pri registraciji.
3. Moderator klikne na gumb za prijavo v sistem.
4. Sistem sprejme podatke za prijavo v sistem.
5. Sistem preveri veljavnost podatkov.
6. Moderator je prijavljen v svoj profil.

Za administratorja:
1. Sistem administratorju ponudi možnost prijave v sistem.
2. Administrator v prijavni obrazec vpiše e-poštni naslov in geslo.
3. Administrator klikne na gumb za prijavo v sistem.
4. Sistem sprejme podatke za prijavo v sistem.
5. Sistem preveri veljavnost podatkov.
6. Administrator je prijavljen v svoj profil.

#### Alternativni tok(ovi)

Za to funkcionalnost ne predvidevamo alternativnih tokov.

**Izjemni tok 1**

Uporabnik se je poskusil prijaviti z napačnimi podatki. Sistem zavrne prijavo in obvesti uporabnika naj vnese pravilne podatke.

**Izjemni tok 2**

Moderator se je poskusil prijaviti z napačnimi podatki. Sistem zavrne prijavo in obvesti uporabnika naj vnese pravilne podatke.

**Izjemni tok 3**

Administrator se je poskusil prijaviti z napačnimi podatki. Sistem zavrne prijavo in obvesti uporabnika naj vnese pravilne podatke.

#### Pogoji

* Uporabnik, moderator ali administrator ima veljaven uporabniški račun v sistemu.
* Uporabnik, moderator ali administrator je pravilno vpisal svoje uporabniško ime in geslo.
* Uporabnik, moderator ali administrator trenutno ni prijavljen v sistemu. 

#### Posledice

* Uporabnik je uspešno prijavljen v sistem in sistem mu dodeli pravice in funkcionalnosti, ki mu pripadajo.
* Moderator je uspešno prijavljen v sistem in sistem mu dodeli pravice in funkcionalnosti, ki mu pripadajo. 
* Administrator je uspešno prijavljen v sistem in sistem mu dodeli pravice in funkcionalnosti, ki mu pripadajo. 

#### Posebnosti

* Podatki o prijavi se pošiljajo po varni povezavi in z ustreznimi varnostnimi praksami. 
* Če so uporabnik, moderator ali adminnistrator že prijavljeni v sistem jim prijava ni na voljo.

#### Prioritete identificiranih funkcionalnosti

MUST HAVE

#### Sprejemni testi

* Osnovni tok 1: Uporabnik v prijavni obrazec vpiše pravilne podatke in ga odda s klikom na gumb vpiši se. Uporabnik je uspešno prijavljen v sistem in sistem mu je dodelil pripadajoče pravice in funkcionalnosti.
* Osnovni tok 2: Moderator v prijavni obrazec vpiše pravilne podatke in ga odda s klikom na gumb vpiši se. Moderator je je uspešno prijavljen v sistem in sistem mu je dodelil pripadajoče pravice in funkcionalnosti.
* Osnovni tok 3: Administrator v prijavni obrazec vpiše pravilne podatke in ga odda s klikom na gumb vpiši se. Administrator je uspešno prijavljen v sistem in sistem mu je dodelil pripadajoče pravice in funkcionalnosti.
* Izjemni tok 1: Uporabnik vpiše napačen e-poštni naslov in/ali geslo. Sistem je zavrnil prijavo in ga obvestil naj vnese pravilne podatke.
* Izjemni tok 2: Moderator vpiše napačen e-poštni naslov in/ali geslo. Sistem je zavrnil prijavo in ga obvestil naj vnese pravilne podatke.
* Izjemni tok 3: Administrator vpiše napačen e-poštni naslov in/ali geslo. Sistem je zavrnil prijavo in ga obvestil naj vnese pravilne podatke.

----------------------------------------------------------------------------------------------------------------------------------------------------------------
### OGLED UPORABNIŠKIH OBJAV

#### Povzetek funkcionalnosti

Vsak uporabnik in moderator z ustreznimi pravicami lahko na domači strani gleda uporabniške objave drugih uporabnikov.

#### Osnovni tok

Za uporabnika:
1. Sistem uporabniku ponudi možnost ogleda uporabniških objav uporabnikov, ki jim sledi.
2. Uporabnik se lahko premika po uporabniških objavh, ki so trenutno na voljo.

Za moderatorja:
1. Sistem moderatorju ponudi možnost ogleda uporabniških objav vseh uporabnikov.
2. Moderator se lahko premika po uporabniških objavah, ki so trenutno na voljo.

#### Alternativni tok(ovi)

Za to funkcionalnost ne predvidevamo alternativnih tokov.

**Izjemni tok 1**

Sistem uporabniku ponudi možnost ogleda uporabniških objav. Sistem trenutno ne vsebuje uporabniških objav uporabnikov, ki jim trenutno sledi. Sistem uporabniku posreduje sporočilo. "Uporabniške objave trenutno niso na voljo."

**Izjemni tok 2**

Sistem moderatorju ponudi možnost ogleda uporabniških objav. Sistem trenutno ne vsebuje uporabniških objav vseh uporabnikov. Sistem uporabniku posreduje sporočilo. "Uporabniške objave trenutno niso na voljo."

#### Pogoji

* Uporabnik ali moderator je prijavljen v sistem.
* Uporabnik ali moderator imata ustrezne pravice za ogled objav uporabnikov.

#### Posledice

* Uporabnik ali moderator se lahko premika po uporabniških objavah, ki so trenutno na voljo.

#### Posebnosti

Za to funkcionalnost ni predvidenih posebnosti.

#### Prioritete identificiranih funkcionalnosti

MUST HAVE

#### Sprejemni testi

* Osnovni tok 1: V sistem se prijavi kot uporabnik. Pojdi na domačo stran. Uporabnik se lahko premika po uporabniških objavah uporabnikov, ki jim trenutno sledi in so mu trenutno na voljo.
* Osnovni tok 2: V sistem se prijavi kot moderator. Pojdi na domačo stran. Moderator se lahko premika po vseh uporabniških objavah uporabnikov, ki so trenutno na voljo.
* Izjemni tok 1: V sistem se prijavi kot uporabnik, ki trenutno ne sledi nobenemu uporabniku oziroma ko njegovi sledilci še nimajo uporabniških objav. Pojdi na domačo stran. Uporabnik se prikaže sporočilo "Uporabniške objave trenutno niso na voljo".
* Izjemni tok 2: V sistem se prijavi kot moderator in ko v sistemu še ni uporabniških objav uporabnikov. Pojdi na domačo stran. Moderatorju se prikaže sporočilo "Uporabniške objave trenutno niso na voljo".
----------------------------------------------------------------------------------------------------------------------------------------------------------------
### VŠEČKANJE UPORABNIŠKIH OBJAV

#### Povzetek funkcionalnosti

Uporabnik lahko všečka uporabniške objave uporabnikov, ki jim sledi.

#### Osnovni tok

1. Sistem uporabniku ponudi možnost všečkati uporabniško objavo.
2. Uporabnik s klikom na ikono srčka všečka uporabniško objavo.
3. Sistem sprejme klik uporabnika na ikono srčka.
4. Sistem uspešno spremeni ikono srčka.

#### Alternativni tok(ovi)

Za to funkcionalnost ne obstajajo alternativni tokovi.

**Izjemni tok 1**

Uporabnik je že všečkal uporabniško objavo uporabnika, zato ne more še enkrat všečkati iste uporabniške objave. Sistem ne dovoli spremembe, vendar ne prikaže opozorilnega sporočila.

#### Pogoji

* Uporabnik je prijavljen v sistem.
* Uporabnik ima ustrezne pravice za všečkanje uporabniških objav.
* Uporabnik sledi uporabnikom, ki že imajo uporabniške objave.

#### Posledice

* Uporabnik je uspešno všečkal objavo uporabnika.
* Ikona s srčkom se uspešno spremeni.

#### Posebnosti

Za to funkcionalnost ni predvidenih posebnosti.

#### Prioritete identificiranih funkcionalnosti
COULD HAVE

#### Sprejemni testi

* Osnovni tok 1: V sistem se prijavi kot uporabnik. Pojdi na domačo stran. Izberi uporabniško objavo, ki je ta uporabnik še ni všečkal. Klikni na ikono srčka in všečkaj uporabniško objavo. Registriran uporabnik lahko vidi, da se ikona s srčkom uspešno spremeni.
* Izjemni tok 1: V sistem se prijavi kot uporabnik. Pojdi na domačo stran. Izberi uporabniško objavo, ki jo je ta uporabnik že všečkal. Klikni na ikono srčka in všečkaj uporabniško objavo. Registriran uporabnik ne vidi spremembe na ikoni srčka.
----------------------------------------------------------------------------------------------------------------------------------------------------------------

### KOMENTIRANJE UPORABNIŠKIH OBJAV

#### Povzetek funkcionalnosti

Uporabnik lahko komentira uporabniške objave uporabnikov, ki jim sledi.

#### Osnovni tok

1. Sistem uporabniku ponudi možnost komentiranja uporabniške objave.
2. Uporabnik v obrazec za pisanje komentarja napiše komentar.
3. Uporabnik s klikom na gumb potrdi, odda svoj komentar.
4. Sistem sprejme podatke.
5. Sistem preveri veljavnost podatkov.
6. Sistem prikaže komentar.

#### Alternativni tok(ovi)

**Alternativni tok 1**

1. Sistem uporabniku prikaže pretekle uporabniške objave.
2. Uporabnik v obrazec za pisanje komentarja napiše komentar.
3. Uporabnik s klikom na gumb potrdi, odda svoj komentar.
4. Sistem sprejme podatke.
5. Sistem preveri veljavnost podatkov.
6. Sistem prikaže komentar.

**Izjemni tok**

Za to funkcionalnost ni predvidenih izjemnih tokov.

#### Pogoji

* Uporabnik je prijavljen v sistem.
* Uporabnik ima ustrezne pravice za komentiranje uporabniških objav uporabnikov.
* Uporabnik sledi uporabnikom, ki že imajo uporabniške objave.

#### Posledice

* Uporabnik je uspešno komentiral uporabniško objavo uporabnika.
* Komentar uporabnika je uspešno prikazan.

#### Posebnosti

Za to funkcionalnost ni predvidenih posebnosti.

#### Prioritete identificiranih funkcionalnosti
COULD HAVE

#### Sprejemni testi

* Osnovni tok 1: V sistem se prijavi kot uporabnik. Pojdi na domačo stran. Izberi uporabniško objavo, ki je ta uporabnik še ni komentiral. Oddaj svoj komentar. Registriran uporabnik lahko vidi, da se je komentar uspešno oddal in prikazal na zaslonu.
* Alternativni 1: V sistem se prijavi kot uporabnik. Pojdi na domačo stran. Izberi uporabniško objavo, ki jo je ta uporabnik že komentiral. Oddaj svoj komentar. Uporabnik lahko vidi, da se je komentar uspešno oddal in prikazal na zaslonu.
----------------------------------------------------------------------------------------------------------------------------------------------------------------
### ISKANJE PO UPORABNIKIH

#### Povzetek funkcionalnosti

Uporabnik in moderator lahko uporabita iskalno funkcijo za iskanje uporabnikov po imenih, ki se nahaja v orodni vrstici.

#### Osnovni tok

Za uporabnika:
1. Sistem uporabniku ponudi možnost, da uporabi iskalno funkcijo za iskanje uporabnikov po imenih, ki se nahaja v orodni vrstici.
2. Uporabnik v iskalno vrstico vnese uporabniško ime uporabnika.
3. Uporabnik potrdi iskalni parameter s klikom na gumb.
4. Sistem sprejme podatke.
5. Sistem preveri veljavnost podatkov.
6. Sistem uporabniku prikaže profile uporabnikov, ki ustrezajo iskalnim parametrom.
7. Sistem uporabniku omogoči, da klikne na željen profil.
8. Sistem uporabnika preusmeri na željen uporabniški profil.

Za moderatorja:
1. Sistem moderatorju ponudi možnost, da uporabi iskalno funkcijo za iskanje uporabnikov po imenih, ki se nahaja v orodni vrstici.
2. Moderator v iskalno vrstico vnese uporabniško ime uporabnika.
3. Moderator potrdi iskalni parameter s klikom na gumb.
4. Sistem sprejme podatke.
5. Sistem preveri veljavnost podatkov.
6. Sistem moderatorju prikaže profile uporabnikov, ki ustrezajo iskalnim parametrom.
7. Sistem moderatorju omogoči, da klikne na željen profil.
8. Sistem moderatorja preusmeri na željen uporabniški profil.

#### Alternativni tok(ovi)

Za to funkcionalnost ne obstajajo alternativni tokovi.

**Izjemni tok 1**

Uporabnik v iskalno vrstico vrstico vpiše uporabniško ime, ki ne pripada nobenemu registriranemu uporabniku. Sistem ne prikaže profilov uporabnikov, saj ime ne ustreza nobenim iskalnim parametrom.

**Izjemni tok 2**

Moderator v iskalno vrstico vrstico vpiše uporabniško ime, ki ne pripada nobenemu uporabniku. Sistem ne prikaže profilov uporabnikov, saj ime ne ustreza nobenim iskalnim parametrom.

#### Pogoji

* Uporabnik je prijavljen v sistem.
* Uporabnik ima ustrezne pravice za uporabo iskalne vrstice.

#### Posledice

* Uporabniku ali moderatorju se uspešno prikažejo profili, ki ustrezajo iskalnim parametrom.
* Uporabnik ali moderator je uspešno preusmerjen na željen uporabniški profil.

#### Posebnosti

Za to funkcionalnost ni predvidenih posebnosti.

#### Prioritete identificiranih funkcionalnosti

SHOULD HAVE

#### Sprejemni testi

* Osnovni tok 1: V sistem se prijavi kot uporabnik. Pojdi v orodno vrstico in v iskalno vrstico vpiši veljaven uporabniški račun. Prikažejo se uporabniški profili, ki ustrezajo iskalnim parametrom. Ob kliku na željen profil je uporabnik preusmerjen na željen profil.
* Osnovni tok 2: V sistem se prijavi kot moderator. Pojdi v orodno vrstico in v iskalno vrstico vpiši veljaven uporabniški račun. Prikažejo se uporabniški profili, ki ustrezajo iskalnim parametrom. Ob kliku na željen profil je uporabnik preusmerjen na željen profil.
* Izjemni tok 1:  V sistem se prijavi kot uporabnik. Pojdi v orodno vrstico in v iskalno vrstico vpiši neveljaven uporabniški račun. Ne prikaže se noben uporabniški profili, saj uporabniško ime ne ustreza nobenim iskalnim parametrom.
* Izjemni tok 2: V sistem se prijavi kot moderator. Pojdi v orodno vrstico in v iskalno vrstico vpiši neveljaven uporabniški račun. Ne prikaže se noben uporabniški profili, saj uporabniško ime ne ustreza nobenim iskalnim parametrom.
----------------------------------------------------------------------------------------------------------------------------------------------------------------

### OGLED OGLASOV

#### Povzetek funkcionalnosti

Uporabnik lahko s klikom na spustni meni in izbiro "oglasi iskalcev" ali "oglasi skrbnikov" pridobi celosten pogled nad izbrano skupino oglasov.


#### Osnovni tok

Za uporabnika, ki želi *oglase skrbnikov*:
1. Sistem uporabniku prikaže oglase skrbnikov, ki so trenutno na voljo

Za uporabnika, ki želi *oglase iskalcev*:
1. Sistem uporabniku prikaže oglase iskalcev, ki so trenutno na voljo

#### Alternativni tok(ovi)

/

#### Izjemni tokovi

**Izjemni tok1**
1. Sistem ne vsebuje oglasov skrbnikov
2. Sistem uporabniku posreduje sporočilo "Oglasi skrbnikov niso na voljo"

**Izjemni tok2**
1. Sistem ne vsebuje oglasov iskalcev
2. Sistem uporabniku posreduje sporočilo "Oglasi iskalcev niso na voljo"

#### Pogoji

Uporabnik mora biti prijavljen v sistem.

#### Posledice

Uporabnik lahko vidi vse oglase iskalcev. 
Uporabnik lahko vidi vse oglase skrbnikov.

#### Posebnosti

/

#### Prioritete identificiranih funkcionalnosti

**MUST have**: funkcionalnost je ključna

#### Sprejemni testi

- Prijavi se kot uporabnik, klikni na drop-down menu, izberi *oglasi iskalcev* in prikazati bi se morali oglasi iskalcev
- Prijavi se kot uporabnik, klikni na drop-down menu, izberi *oglasi skrbnikov* in prikazati bi se morali oglasi skrbnikov
- V primeru, da oglasov ni na voljo, naj bi sistem to sporočil uporabniku

----------------------------------------------------------------------------------------------------------------------------------------------------------------

### FILTRIRANJE OGLASOV

#### Povzetek funkcionalnosti

Uporabnik lahko s klikom na gumb izbere določen filter in pridobi spremenjem pogled oglasov.

#### Osnovni tok

**Filter regije**

1. Sistem uporabniku prikaže vse oglase
2. Uporabnik izbere eno ali več regij pod filtrom *Regije*
3. Sistem uporabniku prikaže oglase z izbranim filtrom

**Filter živali**

1. Sistem uporabniku prikaže vse oglase
2. Uporabnik izbere eno ali več živali pod filtrom *Živali*
3. Sistem uporabniku prikaže oglase z izbranim filtrom

**Filter regije in živali**

1. Sistem uporabniku prikaže vse oglase
2. Uporabnik izbere eno ali več regij in živali pod filtrom *Regije* in pod filtrom *Živali*
3. Sistem uporabniku prikaže oglase z izbranim filtrom

#### Izjemni tok 

1. Sistem uporabniku prikaže vse oglase
2. Uporabnik izbere eno ali več regij in živali pod filtrom *Regije* in pod filtrom *Živali*
3. V sistemu ni oglasov z izbranimi filtri
4. Sistem uporabniku sporoči, da oglasov z izbranimi filtri ni na voljo

#### Pogoji

Uporabnik mora biti prijavljen v sistem.

#### Posledice

Uporabnik lahko vidi oglase z izbranim filtrom.

#### Posebnosti

/

#### Prioritete identificiranih funkcionalnosti

**COULD have**: funkcionalnost ni nujno potrebna, a izboljša uporabniško izkušnjo

#### Sprejemni testi

- Prijavi se kot uporabnik, klikni na drop-down menu, izberi vrsto oglasov, izberi filter pod kategorijo *Regija*. Prikazati bi se morali oglasi z označenim filtrom.
- Prijavi se kot uporabnik, klikni na drop-down menu, izberi vrsto oglasov, izberi filter pod kategorijo *Vrsta živali*. Prikazati bi se morali oglasi z označenim filtrom.
- Prijavi se kot uporabnik, klikni na drop-down menu, izberi vrsto oglasov, izberi filter pod kategorijo *Regija* in izberi filter pod kategorijo *Vrsta živali*. Prikazati bi se morali oglasi, ki so v preseku obeh izbranih filtrov iz različnih kategorij.
- V primeru, da sistem ne vsebuje oglasov po izbranih filtrih naj bi sistem uporabniku podal sporočilo "Oglasov s podanim filtrom ni na voljo"

----------------------------------------------------------------------------------------------------------------------------------------------------------------
### KONTAKTIRANJE OGLAŠEVALCA

#### Povzetek funkcionalnosti

Uporabnik s klikom na gumb zanima me, ki je del oglasnega okna, kontaktira oglaševalca. Uporabniku se odpre sporočilno okno, v katerega lahko uporabnik vpiše svoje sporočilo oglaševalcu.

#### Osnovni tok

1. Uporabniku sistem prikaže sporočilno okno
2. Uporabnik v sporočilno okno vpiše svoje sporočilo oglaševalcu
3. Uporabnik pritisne gumb pošlji
4. Sistem sporočilo pošlje oglaševalcu

#### Alternativni tokovi

**Alternativni tok1**

1. Uporabniku sistem prikaže sporočilno okno
2. Uporabnik pritisne gumb pošlji
3. Sistem pošlje zanimanje brez sporočila oglaševalcu

#### Pogoji

Uporabnik mora biti prijavljen v sistem.

#### Posledice

Oglaševalec pridobi zanimanje uporabnika za oglas in oglasno sporočilo. 

#### Posebnosti

/

#### Prioritete identificiranih funkcionalnosti

**COULD have**: funkcionalnost ni nujno potrebna, a izboljša uporabniško izkušnjo

#### Sprejemni testi

- Prijavi se kot uporabnik, klikni na drop-down menu in izberi vrsto oglasov, v oglasnem oknu pritisni gumb *zanima me*. Sistem naj bi odprl sporočilno okno. Vnesi sporočilo. Pritisni gumb pošlji, sistem naj bi sporočilo poslal oglaševalcu.

----------------------------------------------------------------------------------------------------------------------------------------------------------------
### UPRAVLJANJE PROŠENJ

#### Povzetek funkcionalnosti

Oglaševalec ima možnost sprejti ali zavrniti prošnjo uporabnika na oglas. 

#### Osnovni tok

**Sprejem:**
1. Sistem uporabniku prikaže vsa sporočila
2. Uporabnik klikne gumb za sprejem prošnje
3. Uporabnik dobi token
4. Sistem obvestilo o sprejemu posreduje uporabniku, ki je poslal prošnjo

**Zavrnitev:**
1. Sistem uporabniku prikaže vsa sporočila
2. Uporabnik klikne gumb za zavrnitev prošnje
3. Sistem obvestilo o zavrnitvni posreduje uporabniku, ki je poslal prošnjo

#### Alternativni tok(ovi)

/

#### Izjemni tok

1. Sistem uporabnika obvesti, da uporabnik nima sporočil 

#### Pogoji

Uporabnik mora biti prijavljen. Uporabniku mora biti poslana prošnja, kot odziv na oglas.

#### Posledice

Uporabnik zavrne ali sprejme poslano prošnjo, pošiljatelj prošnje dobi povratno informacijo o odločitvi.

#### Posebnosti

/

#### Prioritete identificiranih funkcionalnosti

**SHOULD have**: funkcionalnost ni nujno potrebna, a izboljša uporabniško izkušnjo


#### Sprejemni testi

- Prijavi se kot uporabnik, klikni na sporočila, sprejmi prošnjo uporabnika. Sistem naj bi poslal informacijo o sprejetju uporabniku, ki je sporočilo poslal.
- Prijavi se kot uporabnik, klikni na sporočila, zavrni prošnjo uporabnika. Sistem naj bi poslal informacijo o zavrnitvi uporabniki, ki je sporočilo poslal. 

----------------------------------------------------------------------------------------------------------------------------------------------------------------
### OGLED PROFILA IN UPORABNIŠKIH OBJAV

#### Povzetek funkcionalnosti

Uporabnik si lahko ogleduje profile ostalih uporabnikov. 

#### Osnovni tok

**Ogled profila iz pogleda obiskovalca:**
1. Sistem uporabniku prikaže profil uporabnika in njegove uporabniške objave
2. Razširitev *Odzivi*: uporabnik lahko pusti odziv in pregleda odzive drugih uporabnikov
3. Razširitev *Sledi uporabniku*: uporabnik lahko sledi profilu
4. Razširitev *Lokacija*: uporabnik lahko na zemljevidu vidi lokacijo drugega uporabnika
6. Razširitev *Oglasi*: uporabnik si lahko ogleda oglase uporabnika
7. Razširitev *Živali*: uporabnik si lahko ogleda živali uporabnika

**Ogled profila iz pogleda lastnika:**
1. Sistem uporabniku prikaže profil uporabnika in njegove uporabniške objave
5. Razširitev *Odzivi*: uporabnik lahko pregleda odzive drugih uporabnikov
6. Razširitev *Followers*: uporabnik lahko pregleda kdo sledi temu profilu
7. Razširitev *Following*: uporabnik lahko pregleda komu sledi ta uporabnik
8. Razširitev *Lokacija*: uporabnik lahko na zemljevidu vidi svojo lokacijo 
10. Razširitev *Uredi profil*: uporabnik lahko uredi svoj profil
11. Razširitev *Oglasi*: uporabnik si lahko ogleda svoje oglase
12. Razširitev *Živali*: uporabnik si lahko ogleda svoje živali

Za **neprijavljenega uporabnika**:
1. Sistem prikaže profil in uporabniške objave uporabnika
3. Razširitev *Oglasi*: neprijavljeni uporabnik si lahko ogleda oglase uporabnika
4. Razširitev *Živali*: neprijavljeni uporabnik si lahko ogleda živali uporabnika

**Ogled uporabniških objav:**
1. Sistem uporabniku prikaže uporabniško objavo
2. Razširitev *Uredi objavo*: uporabnik lahko uredi aktiven oglas
4. Razširitev *Zbriši objavo*: uporabnik lahko zbriše oglas

#### Alternativni tok(ovi)

/

#### Izredi tok 

1. Uporabnik izbere profil, katerega si želi ogledati
2. Sistem uporabniku posreduje sporočilo, da profil ne obstaja

#### Pogoji

Uporabnik mora biti prijavljen v sistem.

#### Posledice

Uporabnik si lahko ogleduje profil drugega uporabnika.

#### Posebnosti

/

#### Prioritete identificiranih funkcionalnosti

**MUST have**: to je glavna funkcionalnost sistema

#### Sprejemni testi

- Prijavi se kot uporabnik, izberi profil uporabnika. Sistem naj bi pokazal izbran profil uporabnika. 

----------------------------------------------------------------------------------------------------------------------------------------------------------------
### UREJANJE PROFILA UPORABNIKA

#### Povzetek funkcionalnosti

Uporabnik lahko ureja svoje osnovne podatke na profilu.

#### Osnovni tok

1. Sistem prikaže uporabniku polja, ki jih lahko uporabnik ureja
2. Uporabnik spremeni podatke na profilu
3. Uporabnik klikne gumb *shrani*
4. Sistem shrani spremenjene podatke

### Alternativni tok1:

1. Administrator izbere uporaniški račun izmed vseh uporabniških računov v sistemu
2. Administrator po izbiri profila klikne na gumb uredi
3. Odpre se vnosna maska s podatki uporabniškega računa, ki smo ga označili, katere lahko potem spreminjamo.
4. Spremenimo poljubno vnosno polje
5. S klikom na gumb ob vnosnem polju zahtevamo posodobitev danega podatka
6. Pojavi se potrditveno okno
7. Potrdimo spremembo prek potrditvenega okna

#### Pogoji

Uporabnik mora biti prijavljen v sistem.

#### Posledice

Sprememba uporabnikovih podatkov. 

#### Posebnosti

/

#### Prioritete identificiranih funkcionalnosti

**SHOULD have**

#### Sprejemni testi

- Prijavi se kot uporabnik, pojdi na svoj profil, klikni gumb *uredi profil*. Sistem naj bi prikazal polja s podatki, ki jih lahko urejaš. Spremeni podatek, klikni shrani. Sistem naj bi shranil spremenjen podatek.
- Prijavi se kot administrator, izberi uporabniški račun, izberi *uredi profil*. Sistem naj bi prikazal polja s podatki, ki jih lahko urejaš. Spremeni podatek, klikni shrani. Sistem naj bi shranil spremenjen podatek.

----------------------------------------------------------------------------------------------------------------------------------------------------------------
### DODAJANJE UPORABNIŠKE OBJAVE

#### Povzetek funkcionalnosti

Uporabnik lahko po izposoji živali na svoj profil obijavi fotografijo z besedilom, ki se navezuje na izposojo.

#### Osnovni tok

1. Uporabnik ustvari novo uporbaniško objavo
2. Uporabnik doda forografijo živali ob izposoji
3. Uporabnik doda opis fotografije
4. Uporabnik objavi uporabniško objavo
5. Sistem uporabniku odvzame token za objavo

#### Alternativni tok(ovi)

**Alternativni tok1**
1. Sistem uporabniku dodeli token za izposojo živali
2. Uporabnik ustvari novo uporabniško objavo
3. Uporabnik doda fotografijo živali ob izposoji
4. Uporabnik objavi uporabniško objavo
5. Sistem uporabniku odvzame token za objavo

#### Izjemni tok 

1. Uporabnik ustvari novo uporabniško objavo
2. Uporabnik doda opis uporabniške objave
3. Uporabnik objavi uporabniško objavo
4. Sistem uporabnika obvesti, da mora obvezno dodati fotografijo

#### Pogoji

Uporabnik mora biti prijavljen v sistem. 
Uporabnik mora imeti token, ki ga pridobi po izposoji živali.

#### Posledice

Uporabnik lahko objavi objavo o svoji izposoji. Objava postane del uporabnikovega profila.

#### Posebnosti

/

#### Prioritete identificiranih funkcionalnosti

**MUST have**

#### Sprejemni testi

- Prijavi se kot uporabnik, klikni na gumb nova objava, naloži fotografijo živali, dodaj opis fotografije. Klikni gumb objavi. Objava bi se morala prikazati na tvojemu profilu.
- Prijavi se kot uporabnik, klikni na gumb nova objava, dodaj opis. Klikni gumb objavi. Sistem bi te moral opozoriti, da je fotografija obvezna. 


----------------------------------------------------------------------------------------------------------------------------------------------------------------

### OBJAVA OGLASA

#### Povzetek funkcionalnosti

Uporabnik lahko objavi nov oglas, kjer išče skrbnika, ki bo skrbel za njegovo žival, ali pa ponuja skrb za tujo žival.

#### Osnovni tok

1. Sistem prikaže obrazec za objavo oglasa
2. Uporabnik napiše opis oglasa
3. Uporabnik izbere vrsto oglasa
4. Uporabnik izbere regijo oglasa
5. Uporabnik izbere vrsto živali
6. Uporabnik lahko naloži slike živali
7. Uporabnik potrdi oglas
8. Sistem prikaže obvestilo o uspešno objavljenem oglasu

#### Alternativni tok(ovi)

**Izjemni tok1**
1. Sistem prikaže obrazec za objavo oglasa
2. Uporabnik pozabi izpolniti kakšen zahtevan podatek
3. Sistem uporabniku prikaže obvestilo o napaki in ga opozori, naj izpolni zahtevana mesta

#### Pogoji

Uporabnik mora biti prijavljen v sistem.

#### Posledice

Uporabnik je objavil nov oglas. V njegovem profilu v razdelku *Oglasi* se na vrhu pojavi nov oglas. Ostali uporabniki lahko sedaj pošljejo odziv na novi oglas.

#### Posebnosti

/

#### Prioritete identificiranih funkcionalnosti

**MUST have**: to je glavna funkcionalnost sistema

#### Sprejemni testi

- Prijavi se kot uporabnik, izberi opcijo *Nov oglas*, vnesi vse potrebne podatke, izberi opcijo *Iščem*, potrdi oglas. Oglas bi se moral pojaviti na uporabnikovem profilu pod razdelkom *Oglasi* in pri iskanju oglasov v kategoriji *Oglasi iskalcev*.
- Prijavi se kot uporabnik, izberi opcijo *Nov oglas*, vnesi vse potrebne podatke, izberi opcijo *Ponujam*, potrdi oglas. Oglas bi se moral pojaviti na uporabnikovem profilu pod razdelkom *Oglasi* in pri iskanju oglasov v kategoriji *Oglasi skrbnikov*.
- Prijavi se kot uporabnik, izberi opcijo *Nov oglas*, ne vnesi vseh potrebnih podatkov, potrdi oglas. Sistem bi moral javit napako in uporabnika obvestiti, da naj izpolni zahtevana polja.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
### OBJAVA ŽIVALI

#### Povzetek funkcionalnosti

Uporabnik lahko objavi sliko svoje živali skupaj z njenimi podatki.

#### Osnovni tok

1. Sistem prikaže obrazec za objavo živali
2. Uporabnik napiše ime živali
3. Uporabnik napiše starost živali
4. Uporabnik izbere spol živali
5. Uporabnik izbere sliko živali
6. Uporabnik lahko napiše kratek opis živali
7. Uporabnik potrdi podatke
8. Sistem prikaže obvestilo o uspešno objavljeni živali

#### Alternativni tok(ovi)

**Izjemni tok1**
1. Sistem prikaže obrazec za objavo živali
2. Uporabnik pozabi izpolniti kakšen zahtevan podatek
3. Sistem uporabniku prikaže obvestilo o napaki in ga opozori, naj izpolni zahtevana mesta

#### Pogoji

Uporabnik mora biti prijavljen v sistem.

#### Posledice

Uporabnik je objavil novo žival. Na uporabnikovem profilu se pod razdelkom *Živali* na vrhu pokaže slika z opisom dodane živali, ki je na voljo na ogled lastniku ter drugim uporabnikom.

#### Posebnosti

/

#### Prioritete identificiranih funkcionalnosti

**COULD have**: funkcionalnost ni nujno potrebna, a izboljša uporabniško izkušnjo.

#### Sprejemni testi

- Prijavi se kot uporabnik, izberi opcijo *Nova žival*, vnesi vse potrebne podatke in potrdi. V profilu pod razdelkom *Živali* bi se morala prikazati slika z opisom živali.
- Prijavi se kot uporabnik, izberi opcijo *Nova žival*, ne vnesi vseh zahtevanih podatkov (npr. podatka o imenu). Sistem bi moral javiti napako in uporabnika obvestiti, naj vnese vse zahtevane podatke.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

### OGLED PROFILA - RAZDELEK *OGLASI*

#### Povzetek funkcionalnosti

Uporabnik lahko obišče svoj profil ali profil drugega uporabnika in pregleda njegove objavljene oglase.

#### Osnovni tok

Za **obiskovalca** profila:
1. Sistem prikaže oglase uporabnika
2. Uporabnik lahko pregleda aktivne in neaktivne oglase drugega uporabnika
3. Razširitev *Zanima me*: uporabnik se lahko odzove na oglas drugega uporabnika

Za **lastnika** profila:
1. Sistem prikaže oglase uporabnika
2. Uporabnik lahko pregleda svoje aktivne in neaktivne oglase
3. Razširitev *Uredi oglas*: uporabnik lahko uredi aktiven oglas
4. Razširitev *Zbriši oglas*: uporabnik lahko zbriše oglas

Za **neprijavljenega uporabnika**:
1. Sistem prikaže oglase uporabnika
2. Neprijavljeni uporabnik lahko pregleda aktivne in neaktivne oglase drugega uporabnika

#### Alternativni tok(ovi)

/

#### Pogoji

* Za obiskovalca profila:
  Uporabnik mora biti prijavljen v sistem. Tuji uporabnik mora biti registriran - torej mora imeti ustvarjen profil. Tuji uporabnik mora objaviti vsaj en oglas, da bo ta prikazan v njegovem profilu.

* Za lastnika profila:
  Uporabnik mora biti prijavljen v sistem. Objaviti mora vsaj en oglas, da bo ta prikazan v njegovem profilu.
  
* Za neprijavljenega uporabnika:
  Neprijavljeni uporabnik mora imeti povezavo do profila.

#### Posledice

* Posledice za **obiskovalca** profila: uporabnik bo lahko videl vse oglase tujega uporabnika, na aktivne oglase se bo lahko odzval.
* Posledice za **lastnika** profila: uporabnik bo lahko pregledal svoje objavljene oglase, lahko jih bo uredil ali zbrisal. 

#### Posebnosti

/

#### Prioritete identificiranih funkcionalnosti

**SHOULD have**: funkcionalnost je zelo pomembna

#### Sprejemni testi

- Prijavi se kot uporabnik, izberi svoj profil, izberi razdelek *Oglasi*. Prikazati bi se morali oglasi z opcijo urejanja in brisanja.
- Prijavi se kot uporabnik, izberi funkcionalnost *Oglasi iskalcev*/*Oglasi skrbnikov*, izberi tuji oglas, klikni na ime uporabnika, izberi razdelek *Oglasi*. Prikazati bi se morali oglasi tujega uporabnika z možnostjo odziva na oglas.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

### OGLED PROFILA - RAZDELEK *ŽIVALI*

#### Povzetek funkcionalnosti

Uporabnik lahko obišče svoj profil ali profil tujega uporabnika in si ogleda objave, na katerih so slike in opisi živali.

#### Osnovni tok

Za **obiskovalca** profila:
1. Sistem prikaže živali uporabnika
2. Uporabnik lahko pregleda živali drugega uporabnika
3. Razširitev *Ogled živali*: uporabnik lahko klikne na žival, si ogleda njene podatke ter slike z drugimi uporabniki

Za **lastnika** profila:
1. Sistem prikaže živali uporabnika
2. Uporabnik lahko pregleda svoje živali
3. Razširitev *Ogled živali*: uporabnik lahko klikne na žival, si ogleda njene podatke ter slike z drugimi uporabniki
4. Razširitev *Uredi žival*: uporabnik lahko uredi svojo žival

Za **neprijavljenega uporabnika**:
1. Sistem prikaže živali uporabnika
2. Neprijavljen uporabnik lahko pregleda živali uporabnika
3. Razširitev *Ogled živali*: neprijavljen uporabnik lahko klikne na žival, si ogleda njene podatke ter slike z drugimi uporabniki


#### Alternativni tok(ovi)

/

#### Pogoji

* Za obiskovalca profila:
  Uporabnik mora biti prijavljen v sistem. Tuji uporabnik mora objaviti vsaj eno žival, da bo ta prikazana v njegovem profilu.

* Za lastnika profila:
  Uporabnik mora biti prijavljen v sistem. Objaviti mora vsaj eno žival, da bo ta prikazana v njegovem profilu.
  
* Za neprijavljenega uporabnika:
  Neprijavljeni uporabnik mora imeti povezavo do profila.

#### Posledice

* Posledice za obiskovalca **tujega profila**: uporabnik bo lahko videl vse živali tujega uporabnika in podatke o njih.
* Posledice za **lastnika profila**: uporabnik bo lahko pregledal svoje objavljene živali, lahko jih bo uredil ali zbrisal. 

#### Posebnosti

/

#### Prioritete identificiranih funkcionalnosti

**COULD have**: funkcionalnost ni nujno potrebna, a izboljša uporabniško izkušnjo.

#### Sprejemni testi

- Prijavi se kot uporabnik, izberi svoj profil, izberi razdelek *Živali*. Prikazati bi se morale objave živali z opcijo urejanja.
- Prijavi se kot uporabnik, izberi funkcionalnost *Oglasi iskalcev*/*Oglasi skrbnikov*, izberi tuji oglas, klikni na ime uporabnika, izberi razdelek *Živali*. Prikazati bi se morale živali tujega uporabnika.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

### ODDAJA ODZIVA

#### Povzetek funkcionalnosti

Uporabnik lahko odda oceno in odziv o drugem uporabniku.

#### Osnovni tok

1. Sistem prikaže obrazec za oddajo odziva ter odzive drugih uporabnikov
2. Uporabnik izbere oceno uporabnika (od 1 do 5 zvezdic)
3. Uporabnik lahko napiše kratek odziv
4. Uporabnik potrdi podatke
5. Sistem prikaže obvestilo o uspešno oddanem odzivu

#### Alternativni tok(ovi)

**Izjemni tok1**

1. Sistem prikaže obrazec za oddajo odziva ter odzive drugih uporabnikov
2. Uporabnik ne izbere ocene uporabnika
3. Sistem prikaže obvestilo o napaki in uporabnika obvesti, da mora izpolniti zahtevana polja

#### Pogoji

**TO-DO**

Uporabnik mora biti prijavljen v sistem.

#### Posledice

Uporabnik pusti oceno in odziv ter lahko pregleda ocene ter odzive drugih uporabnikov. Ta odziv je sedaj viden na profilu uporabnika, katerega se je ocenilo. Ocena lahko zniža ali zviša uporabnikovo povprečno oceno, ki se izračuna glede na vse ocene tega uporabnika (povprečje).

#### Posebnosti

/

#### Prioritete identificiranih funkcionalnosti

**COULD have**

#### Sprejemni testi

- Prijavi se kot uporabnik, izberi drugega uporabnika, izberi funkcionalnost *Odzivi*, izpolni zahtevana polja, potrdi. Ocena bi se morala prikazati na uporabnikovem profilu, po možnosti bi se morala spremeniti tudi ocena uporabnika
- Prijavi se kot uporabnik, izberi drugega uporabnika, izberi funkcionalnost *Odzivi*, ne izpolni zahtevanih polj, potrdi. Sistem bi moral javiti napako in uporabnika obvestiti, da mora izpolniti zahtevana polja
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

### PRIKAZ LOKACIJE UPORABNIKA

#### Povzetek funkcionalnosti

Uporabnik lahko vidi svojo ali lokacijo drugega uporabnika prikazano na zemljevidu.

#### Osnovni tok

1. Sistem prikaže lokacijo uporabnika na zemljevidu
2. Uporabnik si lahko ogleda lokacijo

#### Alternativni tok(ovi)

/

#### Pogoji

Uporabnik mora biti prijavljen v sistem, uporabnik mora imeti podano lokacijo v profilu.

#### Posledice

Uporabnik in neprijavljeni uporabnik bo na zemljevidu videl lokacijo uporabnika, sistem bo prikazal zemljevid z izbrano lokacijo.

#### Posebnosti

/

#### Prioritete identificiranih funkcionalnosti

**COULD have**

#### Sprejemni testi

- Prijavi se kot uporabnik, klikni na funkcionalnost *Oglasi iskalcev*, izberi oglas, klikni na uporabniško ime, klikni na lokacijo. Sistem bi moral prikazati zemljevid lokacije uporabnika.
- Prejmi povezavo do nekega profila, odpri povezavo, klikni na lokacijo uporabnika. Sistem bi moral pokazati zemljevid lokacije uporabnika.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

### ODJAVA IZ PROFILA

#### Povzetek funkcionalnosti

Uporabnik se lahko odjavi iz trenutno prijavljenega profila.

#### Osnovni tok

1. Uporabnik izbere *Odjavo*
2. Uporabnik se odjavi iz sistema
3. Sistem prikaže vpisno stran

#### Alternativni tok(ovi)

/

#### Pogoji

Uporabnik mora biti prijavljen v sistem.

#### Posledice

Uporabnik se bo odjavil iz sistema, sistem mu bo prikazal vpisno stran.

#### Posebnosti

/

#### Prioritete identificiranih funkcionalnosti

**MUST have**

#### Sprejemni testi

- Prijavi se kot uporabnik, izberi funkcionalnost *Odjava*. Sistem bi moral prikazati vpisno stran in uporabnik nebi več smel imeti dostopa do funkcionalnosti registriranega uporabnika do ponovnega vpisa v sistem.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------


### BRISANJE UPORABNIŠKIH OBJAV

#### Povzetek funkcionalnosti

Uporabniki lahko brišejo svoje objave. Moderatorji lahko brišejo objave tujih uporabnikov.

#### Osnovni tok

1. Uporabnik na svojem profilu izbere objavo, ki jo želi izbrisati
2. Uporabnik klikne na gumb "Izbriši"
3. Sistem uporabniku prikaže potrditveno okno
4. Uporabnik s klikom na gumb na potrditvenem oknu potrdi svojo izbiro
5. Sistem izbriše objavo

#### Alternativni tok 1

1. Moderator na profilu poišče objavo, ki jo želi izbrisati in nanjo klikne
2. Sistem mu objavo prikaže
3. Moderator klikne na gumb "Izbriši"
4. Sistem Moderator prikaže potrditveno okno
5. Moderator s klikom na gumb na potrditvenem oknu potrdi svojo izbiro
6. Sistem izbriše objavo
7. lastnik objave je preko sporočila obveščen o izbrisu


#### Pogoji

* Uporabnik mora biti prijavljen v sistem
* Objava, ki jo želimo izbrisati obstaja v sistemu.
* Če želimo izbrisati objavo tujega računa, moramo imeti moderatorske pravice

#### Posledice

* Uporabnik ali moderator mora biti prijavljen v sistem
* Objava, njeni komentarji in ostali podatki objave so v celoti izbrisani iz sistema. Avtor objave je o tem obveščen preko sporočila.

#### Posebnosti

Ni posebnosti.

#### Prioritete identificiranih funkcionalnosti

SHOULD HAVE

#### Sprejemni testi
- osnovni tok: Z uporabniškim računom se prijavi v sistem, ter odpri svoj profil. Poišči objavo, ki jo želiš izbrisat in klikni nanjo. Ko sistem objavo pokaže, klikni na gumb izbriši. Ko sistem pokaže potrditveno okno, svojo izbiro potrdi s klikom na gumb.
- alternativni tok 1: Z moderatorskim računom se prijavi v sistem, ter poišči uporaniški profil na katerem je objavljena objava, ki jo želimo izbrisat. Ko jo najdeš, klikni nanjo. Ko sistem objavo pokaže, klikni na gumb izbriši. Ko sistem pokaže potrditveno okno, svojo izbiro potrdi s klikom na gumb.
- 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
### UREJANJE UPORABNIŠKIH OBJAV

#### Povzetek funkcionalnosti

Uporabniki lahko urejajo svoje objave.

#### Osnovni tok
1. Uporabnik na svojem profilu izbere objavo, ki jo želi izbrisati
2. Uporabnik klikne na gumb "Uredi"
3. Sistem na objavi priredi besedilo v vnosna polja
4. Uporabnik v vnosna polja vnese spremenjene elemente objave
5. Uporabnik s klikom na potrditveni gumb konča z urejanjem objave
6. Sistem uredi objavo, da prikaže nove elemente

#### Alternativni tok(ovi)


#### Pogoji

* Uporabnik, ki želi urejati objavo, je hkrati njen avtor.
* Uporabnik mora biti prijavljen v sistem

#### Posledice

* Elementi objave se posodobijo.

#### Posebnosti

Ni posebnosti.

#### Prioritete identificiranih funkcionalnosti

COULD HAVE

#### Sprejemni testi
-  Z uporabniškim računom se prijavi v sistem, ter odpri svoj profil. Poišči objavo, ki jo želiš urediti in klikni nanjo. Ko sistem objavo pokaže, klikni na gumb uredi. Uredi elemente objave in spremembe potrdi s klikom na potrditveni gumb

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

### DODAJANJE UPORABNIKA

#### Povzetek funkcionalnosti

Administrator lahko ustvarja uporabniške račune ter tako v sistem oz. podatkovno bazo doda nov uporabniški račun.

#### Osnovni tok

1. Administrator izbere možnost dodajanja novega uporabnika
2. Odpre se vnosna maska, kamor administrator vnese podatke o novo ustvarjenem računu
3. Ob kliku na gumb Ustvari uporabnika se pojavi potrditveno okno
4. Administrator potrdi ustvaritev novega uporabnika, ki se posledično doda v sistem

#### Alternativni tok(ovi)

**Izjemni tok 1**
1. Administrator izbere možnost dodajanja novega uporabnika
2. Odpre se vnosna maska, kamor administrator vnese podatke o novo ustvarjenem računu
3. Ob kliku na gumb Ustvari uporabnika se pojavi opozorilo, saj eden ali več od vnesenih podatkov ni ustreznih (neprimeren format emaila, itd.)
4. Administrator zapre opozorilno okno in proces se vrne na 2. točko

**Izjemni tok 2**

1. Administrator izbere možnost dodajanja novega uporabnika
2. Odpre se vnosna maska, kamor administrator vnese podatke o novo ustvarjenem računu
3. Ob kliku na gumb Ustvari uporabnika se pojavi opozorilo, saj uporabnik z navedenim emailom že obstaja
4. Administrator zapre opozorilno okno in proces se vrne na 2. točko

#### Pogoji

* Uporabnik, ki ga želimo dodati še ne obstaja v sistemu.
* Uporabnik, ki ga želimo dodati v sistem mora imeti veljaven email.
* Administrator mora biti prijavljen v sistem

#### Posledice

* V sistemu je ustvarjen nov uporabniški račun.

#### Posebnosti

Ni posebnosti.

#### Prioritete identificiranih funkcionalnosti

MUST HAVE

#### Sprejemni testi

* Osnovni tok: Z administratorskim računom se prijavi v administratorski portal. Izberi možnost Ustvari uporabniški račun. V vnosno masko, ki se ti odpre vnesi zahtevane podatke. Potrdi ustvarjanje računa in v sistemu bo ustvarjen omenjeni uporabniški račun.
* Izjemni tok 1: Z administratorskim računom se prijavi v administratorski portal. Izberi možnost Ustvari uporabniški račun. V vnosno masko, ki se ti odpre vnesi zahtevane podatke. Eden ali več vnesenih podatkov naj bo neprimernih, recimo email brez @, ipd. Prek potrditvenega okna potrdi ustvarjanje uporabnika. Sistem te bo opozoril in ti navedel neprimerne podatke katere je treba popraviti. Ponovno se bo odprla vnosna maska za ustvarjanje uporabnika.
* Izjemni tok 2: Z administratorskim računom se prijavi v administratorski portal. Izberi možnost Ustvari uporabniški račun. V vnosno masko, ki se ti odpre vnesi zahtevane podatke. Vnesi email, za katerega veš, da že obstaja v sistemu. Sistem te bo ob potrditvi ustvaritve uporabnika opozoril, da uporabnik z danim emailom že obstaja v sistemu in ponovno se bo odprla vnosna maska za ustvarjanje uporabnika.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

## DEAKTIVACIJA UPORABNIŠKEGA RAČUNA

#### Povzetek funkcionalnosti

Administrator lahko deaktivira račune drugih uporabnikov, če smatra, da uporabniki teh računov na kakršenkoli način zlorabljajo sistem ali pa se ne držijo pogojev, ki so jih sprejeli ob registraciji.


#### Osnovni tok


1. Administrator klikne na napis "deaktiviraj uporabnika"
2. Sistem prikaže okno z vnosnim poljem, kamor uporabnik vnese razlog za deaktivacijo profila
3. Uporabniški profil se deaktivira 


#### Pogoji

Uporabnik mora biti prijavljen v sistem in imeti administratorske pravice.

#### Posledice

Uporabniški profil se deaktivira. Njegove objave in oglasi niso več dostopni. Lastniku deaktiviranega računa se ob prijavi v sistem prikaže okno, ki mu posreduje informacije o deaktivaciji (datum in čas deaktivacije, razlog deaktivacije). 

#### Posebnosti

Za to funkcionalnost ni predvidenih posebnosti.

#### Prioritete identificiranih funkcionalnosti

MUST HAVE

#### Sprejemni testi

- Osnovni tok : V sistem se prijavi kot administrator. Pojdi v orodno vrstico in v iskalno vrstico vpiši veljaven uporabniški račun. Prikažejo se uporabniški profili, ki ustrezajo iskalnim parametrom. Ob kliku na željen profil je uporabnik preusmerjen na željen profil. Ob kliku na gumb se profil deaktivira.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

## SLEDENJE UPORABNIKOM

#### Povzetek funkcionalnosti

Uporabniki lahko sledijo drugim uporabnikom z namenom spremljanja njihovih novih oglasov oziroma objav.

#### Osnovni tok

1. Uporabnik izbere profil, ki mu želi slediti
2. Sistem administratorju prikaže profil uporabnika
3. Uporabnik klikne na follower ikono
4. Uporabnik sedaj sledi izbranemu uporabniku. Sistem spremeni follower ikono za sledenje uporabniku na tem profilu na drugo ikono, ki odraža, da je uporabnik že follower temu profilu

#### Alternativni tok


#### Pogoji

Uporabnik mora biti prijavljen v sistem.

#### Posledice

Prijavljen uporabnik postane follower drugemu uporabniku. Nove in aktualne objave oziroma oglasi uporabnika, ki mu sledi, se mu prikažejo na domači strani.

#### Posebnosti

Za to funkcionalnost ni predvidenih posebnosti.

#### Prioritete identificiranih funkcionalnosti

COULD HAVE

#### Sprejemni testi

- Osnovni tok : V sistem se prijavimo kot registriran uporabnik. Gremo na profil uporabniškega računa, ki mu še ne sledimo. . Ob kliku na gumb za sledenje začnemo s sledenjem uporabnika.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

## OGLED SEZNAMA FOLLOWERJEV

#### Povzetek funkcionalnosti

Uporabniki lahko vidijo kdo jim sledi.

#### Osnovni tok

1. Uporabnik na svojem profilu klikne na napis o followerjih
2. Sistem uporaniku v spustnem meniju prikaže imena tujih uporabnikov, ki mu sledijo (followerjev)


#### Izjemni tok
1. Uporabnik na svojem profilu klikne na napis o followerjih
2. Uporabniku ne sledi noben tuj uporabnik. Sistem ob napisu o sledilcih prikaže sporočilo "Nihče vam ne sledi".

#### Pogoji

Uporabnik mora biti prijavljen v sistem.

#### Posledice

Prijavljenem uporabniku se v spustnem meniju pokažejo imena tujih uporabnikov, ki mu sledijo. S klikom na ime se lahko uporabnik premakne na njihov profil.

#### Posebnosti

Za to funkcionalnost ni predvidenih posebnosti.

#### Prioritete identificiranih funkcionalnosti

SHOULD HAVE

#### Sprejemni testi

- Osnovni tok : V sistem se prijavimo kot registriran uporabnik. Gremo na svoj profil računa, ki mu sledi vsaj 1 tuj uporabnik. Kliknemo na napis o sledilcih.
- alternativni tok : V sistem se prijavimo kot registriran uporabnik. Gremo na svoj profil računa, ki mu ne sledi še nihče. Kliknemo na napis o sledilcih.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

## OGLED SEZNAMA UPORABNIKOV, KI JIM SLEDIMO

#### Povzetek funkcionalnosti

Uporabniki lahko vidijo katerim računom oz. uporabnikom sledijo.

#### Osnovni tok

1. Uporabnik na svojem profilu klikne na napis o računih, ki jim sledi.
2. Sistem uporabniku v spustnem meniju prikaže imena uporabnikov, ki jim uporabnik sledi


#### Izjemni tok
1. Uporabnik na svojem profilu klikne na napis o računih, ki jim sledi.
2. Uporabniku ne sledi nobenemu računu. Sistem ob napisu o sledilcih prikaže sporočilo "Ne sledite še nobenemu računu oz. uporabniku".

#### Pogoji

Uporabnik mora biti prijavljen v sistem.

#### Posledice

Prijavljenem uporabniku se v spustnem meniju pokažejo imena tujih uporabniških računov, ki jim sledijo. S klikom na ime se lahko uporabnik premakne na njihov profil.

#### Posebnosti

Za to funkcionalnost ni predvidenih posebnosti.

#### Prioritete identificiranih funkcionalnosti

SHOULD HAVE

#### Sprejemni testi

- Osnovni tok : V sistem se prijavimo kot registriran uporabnik. Gremo na svoj profil računa, ki sledi vsaj enemu uporabniku. Kliknemo na napis o računih, ki jim sledimo.
- alternativni tok : V sistem se prijavimo kot registriran uporabnik, ki še ne sledi nobenemu tujemu računu. Gremo na svoj profil računa. Kliknemo na napis o računih, ki jim sledimo.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------


## 6. Nefunkcionalne zahteve

### 1.Zahteve izdelka:

##### Uporabnost: 

-latenca sistema ob izvajanju uporabniških akcij, ki ne zahtevajo pridobivanja 			 rezultatov iskanja ( torej akcije klika gumba meni, prikaz drop-down menija...) mora biti <2s

 
-v 95% primerih mora biti primarni (prvotni, prvi) odzivni čas sistema ob izvajanju 		zahtevnejše uporabniške akcije (npr nalaganje vseh oglasov skrbnikov/iskalcev) manjši 		od 5s. 

-Nadaljno (sekundarno) nalaganje (npr če bi se v tem pogledu vseh iskalcev/skrbnikov uporabljal "infinite scroll" ali "multiple page" način prikaza ALI za filtriranje že dobljenih objav) pa mora biti manjše od 3s 

-Sistem mora omogočati sočasno delo najmanj 250 uporabnikom sistema 

#### Intuitivnost: 

-vmesnik mora biti uporabniku zelo hitro razuljiv in intuitiven. 85% uporabnikov mora ob 	prvem vstopu v sistem: 
* razumeti osnove sistema (torej morajo razumeti čemu je sistem sploh namenjen)  

* razumeti kako uporabljati osnovne funkcionalnosti sistema brez pomoči (torej brez branja dodatnih navodil ali iskanja odgovorov izven sistema (google ipd.)) 

 

Osnovne funkcionalnosti so iskanje skbnikov/iskalcev in kreiranje lastne objave (po 		registraciji) 

 

#### Nizka zaznana delovna obremenitev: 

-za uporabo osnovnih funkcionalnosti sistema je potreben en uporabnik. 

#### Varnost: 

 -vsak uporabnik lahko manipulira/upravlja (briše, ureja) le svoje objave.  

 -vsak uporabnik mora biti za iskanje drugih profilov prijavljen v sistem (torej iskanje profilov gostom ni mogoče) 

 -elektronski naslovi oz. telefonske številke registriranih uporabnikov morajo biti 	unikatne v okviru celostnega sistema (torej z nekim e-naslovom oz. tel. številko se lahko registrira največ en uporabnik) 


 #### Zanesljivost: 

-odstotek pravilno izvedenih operacij mora biti vsaj 95  

#### Razpoložljivost: 

-načrtovano vzdrževanje sistema mora biti izvedljivo v obdobjih, ko je aktivnih uporabnikov v sistemu manj kot 10% glede na povprečje (predevamo, da bi bilo to ponoči med 00:00 in 4:00)

#### Razširljivost: 

-sistem mora biti lahko razširljiv v smislu lahkega dodajanja zmogljivosti na strani strežnika (dodajanje ram-a, dodajanje prostora bazi podatkov) brez dolgotrajnega prekinjanja izvajanja sistema in brez izgube podatkov

 
### 2. Organizacijske zahteve		 

-procesni model temelji na RUP procesu 

-programska oprema mora biti razvita v skladu s standardi ISO/IEC/IEEE 12207:2017  

-tehnična dokumentacija sistema mora biti zaprta (znana samo zaposlenim) in skalabilna 	tudi v primeru med-projektne menjave avtorjev. 

-razvijalci pri pisanju kode uporabljajo camel case (CamelCase) način poimenovanja spremenljivk 

 

### 3. Zunanje zahteve  

-Sistem mora imeti implementirano primerno varovanje osebnih podatkov in s tem tudi ustrezati GDPR zakonodaji 

-sistem mora imeti dobro prepoznavanje in preprečevanje/odstranjevanje zlonamernih objav oz. drugih izkoriščanj sistema (najti mora objave, ki so namenjene čemu drugemu 	(mučenju živali, prodajanju izdelkov ali uslug), preprečiti njihovo širjenje in zaustaviti račune, ki so te objave naredili) 

-strežnik, na katerem teče aplikacija, mora za avtentikacijo in SSL zaščito uporabljati strežniški certifikat, ki je izdan s strani izdajatelja, priznanega v Sloveniji (npr. SI-TRUST, SIGEN-CA, SIGOV-CA...)

## 7. Prototipi vmesnikov

![TPO - zaslonske maske-1](https://user-images.githubusercontent.com/79209522/113325783-29390400-9319-11eb-9cde-9d88d92803aa.png)
Zaslonska maska prikazuje vpisno stran. Registrirani uporabnik se lahko vpiše z uporabniškim imenom in geslom. 

![TPO - zaslonske maske-2](https://user-images.githubusercontent.com/79209522/113325815-30f8a880-9319-11eb-87ad-4bc67413dc30.png)
Zaslonska maska prikazuje registracijsko stran. Neregistrirani uporabnik se lahko registrira z uporabniškim imenom, e-naslovom in geslom. 

![TPO - zaslonske maske-3](https://user-images.githubusercontent.com/79209522/113325816-31913f00-9319-11eb-9dbf-303cbde46714.png)
Zaslonska maska prikazuje domačo stran. Na njej si lahko uporabnik ogleduje svoje uporabniške objave ter uporabniške objave drugih uporabnikov, katerim sledi, in jih všečka ter komentira.

![TPO - zaslonske maske-4](https://user-images.githubusercontent.com/79209522/113325822-3229d580-9319-11eb-9e35-d082270b7b53.png)
Zaslonska maska prikazuje oglase. Na levi strani imamo možne filtre - filtriramo lahko glede na regijo in glede na vrsto živali. Možno je izbrati več filtrov skupaj. Z izbiro filtrov omejimo prikazane oglase.

![TPO - zaslonske maske-5](https://user-images.githubusercontent.com/79209522/113325824-3229d580-9319-11eb-92de-0de6327e569b.png)
Zaslonska maska prikazuje profil in uporabniške objave uporabnika. Tukaj vidimo profil iz vidika lastnika profila. Lastnik profila ima opcijo urejanja profila -  to zajema urejanje opisa, uporabniškega imena in lokacije,  urejanja in brisanja svojih uporabniških objav - uredi lahko opis in označeno žival. Poleg tega pa ima opcijo pregledovanja uporabnikov, ki mu sledijo, uporabnikov, katerim sledi, odzivov drugih uporabnikov ter ogleda svoje lokacije na zemljevidu. Poleg tega lahko uporablja orodno vrstico ter si ogleda še razdelka *Oglasi* in *Živali*.

![TPO - zaslonske maske-6](https://user-images.githubusercontent.com/79209522/113400091-942e1d80-93a1-11eb-82a6-cf92e0786115.png)
Zaslonska maska prikazuje profil in oglase uporabnika. Tukaj vidimo profil iz vidika obiskovalca. Uporabnik obiskovalec lahko pregleda oglase uporabnika ter se odzove na trenutno aktivne oglase. Uporabnik obiskovalec ima opcijo slediti uporabniku, če mu trenutno še ne sledi, lahko tudi pusti odziv in pregleda pretekle odzive. Poleg tega ima opcijo ogleda lokacije uporabnika in ogleda razdelkov *Objave* in *Živali*. Uporabnika lahko tudi prijavi, če ta objavlja neprimerno vsebino.

![TPO - zaslonske maske-7](https://user-images.githubusercontent.com/79209522/113325829-335b0280-9319-11eb-9b1d-2824e9df8f7b.png)
Zaslonska maska prikazuje profil in živali uprabnika, profil vidimo iz vidika obiskovalca. Uporabnik si lahko ogleda živali in njihove podatke. Uporabnik obiskovalec ima opcijo slediti uporabniku, če mu trenutno še ne sledi, lahko tudi pusti odziv in pregleda pretekle odzive. Poleg tega ima opcijo ogleda lokacije uporabnika in ogleda razdelkov *Objave* in *Živali*. Uporabnika lahko tudi prijavi, če ta objavlja neprimerno vsebino.

![TPO - zaslonske maske-8](https://user-images.githubusercontent.com/79209522/113325831-33f39900-9319-11eb-88ca-4654cb7a7cef.png)
Na zaslonski maski sta prikazani funkcionalnosti *Ogled Followers* in *Ogled Followed*. Lastnik profila si lahko ogleda seznam uporabnikov, katerim sledi in seznam uporabnikov, ki sledijo njemu.

![TPO - zaslonske maske-9](https://user-images.githubusercontent.com/79209522/113325836-348c2f80-9319-11eb-84e0-e18f0d25e9c3.png)
Na zaslonski maski je prikazana funkcionalnost *Orodna vrstica*, na kateri je združenih več funkcionalnosti. Levo zgoraj je meni za izbiro oglasov. Nato je napis *PetBuddy* (ime platforme), klik nanj uporabnika vrne na domačo stran. Za tem vidimo iskalno vrstico, kjer lahko iščemo uporabnike po njihovem uporabniškem imenu. Za tem je ikona za pregled sporočil/ponudb, kjer lahko sprejemamo in zavračamo prošnje ter pregledamo pretekle prošnje/sporočila. Desno zgoraj je uporabniška ikona, klik na katero nam omogoča objavo nove uporabniške objave, oglasa ali živali.

![TPO - zaslonske maske-10](https://user-images.githubusercontent.com/79209522/113325838-3524c600-9319-11eb-8f86-5ea09dbccdbf.png)
Zaslonska maska prikazuje profil uporabnika. Na zaslonski maski je uporabnikova slika profila, besedilo, število zvezdic, število tokenov, followers in followings. Zaslonska maska ima tri razdelke - objave, oglasi in živali. Na zaslonski maski lahko vidimo razdelek objave. 

![TPO - zaslonske maske-11](https://user-images.githubusercontent.com/79209522/113325840-35bd5c80-9319-11eb-8981-ebe446187fc9.png)
Zaslonska maska prikazuje objavo uporabnika po izposoji živali. Na zaslonski maski je napisano ime uporabnika, opis objave in fotografija. Zaslonska maska ima tudi tekstovno vnosno polje za dodajo komentarjev. Na zaslinski maski je tudi komentar, ki vsebuje ime uporabnika in njegov komentar. Zaslonska maska ima tudi možnost *Uredi* in *Izbriši*, ki je na voljo le avtorju objave.

![TPO - zaslonske maske-12](https://user-images.githubusercontent.com/79209522/113325841-3655f300-9319-11eb-8a8c-9407b7f4df73.png)
Zaslonska maska prikazuje profil posamezne domače živali s strani lastnika domače živali. Zaslonska maska prikazuje ime domače živali, starost, spol in opis. Zaslonska maska ima tudi fotografijo domače živali, ki jo dodal lastnik. Zaslonska maska ima tudi slike drugih uporabnikov, ki so domačo žival peljali na sprehod. Lastnik domače živali lahko profil svoje domače živali tudi uredi ali izbriše z gumbi *Uredi* in *Zbriši*.

![TPO - zaslonske maske-13](https://user-images.githubusercontent.com/79209522/113325845-36ee8980-9319-11eb-95b4-210d20375fc9.png)
Po opravljenem varstvu lahko uporabnik odda odziv. Zaslonska maska prikazuje odzivno okno. Zaslonska maska vsebuje zvezdice - 1-5 - ki jih uporabnik izbere s klikom na zvezdico. Zaslonska maska vsebuje tudi tekstovno polje, kjer lahko uporabnik podrobneje opiše svojo izkušnjo. Zaslonska maska vsebuje tudi gumb *Potrdi*, ki objavi odziv uporabnika. Na zaslonski maski so prikazani pretekli odzivi ostalih uporabnikov in dodeljenih zvezdic.

![TPO - zaslonske maske-14](https://user-images.githubusercontent.com/79209522/113325846-37872000-9319-11eb-9732-419ce75cf3c1.png)
Zaslonska maska prikazuje približno lokacijo lastnika hišnega ljubljenčka. 

![TPO - zaslonske maske-15](https://user-images.githubusercontent.com/79209522/113325848-381fb680-9319-11eb-84e0-ee3c412f8d40.png)
Zaslonska maska prikazuje sporočila (povpraševanja), ki jih uporabnik prejel. Zaslonska maska vsebuje dva tipa sporočil - tista, ki jih je uporabnik sprejel in tista, ki jih uporabnik še ni sprejel. Sporočila, ki jih je uporabnik sprejel imajo prikazana kontaktne podatke, token ikono, uporabniško ime, datum, uro in vsebino sporočila. Sporočila, ki jih uporabnik še ni sprejel ali zavrnil imajo prikazano sporočilo, uporabniško ime, datum, uro in gumba *Sprejmi*/*Zavrni*.

![TPO - zaslonske maske-16](https://user-images.githubusercontent.com/79209522/113325849-381fb680-9319-11eb-93cb-d79f2b4d9093.png)
Zaslonska maska prikazuje vnosna polja, ko želi uporabnik objaviti nov oglas. Zaslonska maska ima tekstnovno polje za *opis*. Polja za *vrsto oglasa*, *izberi regijo* in *izberi vrsto živali* so izbirni meni. Uporabnik lahko naloži tudi eno ali več fotografij s pritiskom na + gumb. Zaslonska maska vsebuje tudi gumb *Potrdi*, ki objavi uporabnikov oglas.

![TPO - zaslonske maske-17](https://user-images.githubusercontent.com/79209522/113325852-38b84d00-9319-11eb-8ee4-1b68ed8a4544.png)
Zaslonska maska prikazuje vnosna polja, ko želi uporabnik objaviti svojo objavo. Zaslonska maska prikazuje možnost dodajanja fotografije. Uporabnik lahko v tekstno polje doda tudi opis. Na zaslonski maski je gumb *Potrdi*, ki objavi uporabnikovo objavo.

![TPO - zaslonske maske-18](https://user-images.githubusercontent.com/79209522/113325854-38b84d00-9319-11eb-9901-6f435c07c250.png)
Zaslonska maska prikazuje vnosna polja, ko želi uporabnik dodati novo žival. Uporabnik lahko naloži fotografijo s pomočjo + gumba. Zaslonska maska vsebuje besedilna polja za ime, starost in opis. Zaslonska maska vsebuje tudi izbirni meni za izbiro spola živali. Uporabnik s pritiskom na gumb *Potrdi* objavi novo žival na svojemu profilu.  

![TPO - zaslonske maske-19](https://user-images.githubusercontent.com/79209522/113402077-c0976900-93a4-11eb-823e-5160dc4fc0b4.png)
Zaslonska maska prikazuje sporočilno okno za pošiljanje zanimanja za oglas. Uporabnik lahko svoje zanimanj za oglas sporoči preko sporočilnega okna, v katerega lahko vpiše besedilo (sporočilo). Uporabnik lahko s pritiskom na gumb *Potrdi* pošlje svoje zanimanje.

![TPO - zaslonske maske-20](https://user-images.githubusercontent.com/79209522/113556114-48c37b80-95fc-11eb-98e7-17c0147b9b5c.png)
Zaslonska maska prikazuje profil iz vidika administratorja. Ta ima opcijo deaktivacije uporabniškega računa.

![admin](https://user-images.githubusercontent.com/79209522/113591302-0322a500-9634-11eb-9238-946f9d12f00c.png)
Zaslonska maska prikazuje opcijo dodajanja uporabnika, ki je namenjena administratorju.


## 8. Vmesniki do zunanjih naprav

Za potrebe našega sistema bomo uporabili dva zunanja vmesnika in sicer:


**Sistem Geolokacija:**
- Vmesnik, ki nam bo prek geokodiranja omogočal pridobivanje lokacije uporabnika oz. oglasa, katera bo prikazana na zemljevidu:  
V ta namen bomo koristili funkcijo geocode(naslov), ki sprejme poštni naslov na katerem se nahaja uporabnik vrne pa nam zemljepisno širino in dolžino, s katerima bomo na zemljevidu označili lokacijo uporabnika oz. oglasa.


**Sistem E-pošta:**
- Vmesnik, prek katerega bojo uporabniki obveščeni o novih ponudbah:  
  - Opcija 1 (zahteva direktno na SMTP strežnik):  
  prek funkcije sendMail(host, port, auth, msg), ki sprejme naslov in vrata SMTP strežnika, avtorizacijske podatke, ter sporočilo, ki vsebuje pošiljatelja, prejemnika, zadevo in samo sporočilo in vrne status o tem ali je bilo sporočilo uspešno poslano.
  - Opicja 2 (zahteva na API za pošiljanje mailov):  
  Prek funkcije sendMail(recipient, sender, subject, msg), ki sprejme elektronski naslov prejemnika, elektronski naslov pošiljatelja, zadevo in samo sporočilo, ter vrne status o tem ali je bilo sporočilo uspešno poslano.
