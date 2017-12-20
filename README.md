Hejsan! 

Jag har skapat en hemsida fÃ¶r Arboreal som Ã¤r en prenumerationstjÃ¤nst fÃ¶r fÃ¶retag.
De hjÃ¤lper fÃ¶retag att dekorera sina kontor med fina vÃ¤xter som man sedan betalar varje mÃ¥ndad fÃ¶r att fÃ¥ in nya samt frÃ¤sha det gamla.

Jag har skapat en HTML,CSS,JS fil samt lagt till ett par bilder fÃ¶r att snygga till det lite.
var god kolla igenom koden och se ifall du fann nÃ¥gra fel eller nÃ¥got jag kunde fÃ¶rbÃ¤ttra :).


Validering:

HTML:

Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.

    From line 142, column 2; to line 142, column 23

   (Använder IMG här istället för en heading)

CSS:

Gratulerar Inga fel hittades.

M.V.H
Ahmet Ordulu.


FÃ¶rslag pÃ¥ feedbackpunkter:

Ã„r HTMLen logiskt upplagd, korrekt indenterad och lÃ¤ttlÃ¤st?
- HTML Ã¤r bra skriven, gÃ¥r lÃ¤tt att fÃ¶lja och varje DIV Ã¤r bra namngiven.
- MÃ¶jligvis att det saknas nÃ¥gon mÃ¤rkning i FORM 142-169.
Klipper in lÃ¤rarens exempel  <form>
  <label for="todo">Add Todo</label>
  <input type="text" name="todo" id="todo">


Ã„r CSSen logiskt upplagd, korrekt indenterad och lÃ¤ttlÃ¤st?
- JA, det Ã¤r lÃ¤tt att hÃ¤nga med och vad som ska gÃ¥ vart. Allt kommer i rÃ¤tt ordning.

Tydlig namngivning av klasser sÃ¥ att man fÃ¶rstÃ¥r vad det Ã¤r som stylas? 
-JA,


Finns det Ã¶verflÃ¶dig CSS? FÃ¶r mÃ¥nga selektorer eller fÃ¶r specifika selektorer? Upprepande av egenskaper i CSSen?
- MÃ¶jligen att H1-H3 har samma styling flera gÃ¥nger.
- Tycker inte att de Ã¤r Ã¶verdivet mÃ¥nga selektorer.
- Blandat PX och REM, tydligaste stÃ¤llet Ã¤r 431 och 434.


Ã„r grÃ¤nssnittet (designen) tydligt indelad och lÃ¤ttanvÃ¤nd?
- JA, Gillar mjuka blÃ¤ddringen ner pÃ¥ sidan samt den exlusiva hover funktionen rad 257-279.


Finns det Ã¤ndringar i designen som skulle kunna underlÃ¤tta anvÃ¤ndandet av sidan?
- Jag skulle lÃ¥ta varje Theme fÃ¥r mer plats och ge dem chansen att visa vad som skiljer dem Ã¥t. Du fick priserna att skilja sig sÃ¥ lÃ¥t theme gÃ¶ra det samma? 


Ã–ka kontrasterna pÃ¥ sidan? AnvÃ¤nd mer marginaler/padding fÃ¶r att gÃ¶ra saker luftigare? 
- KÃ¤nns som samma frÃ¥ga som Ã¥van


Finns det element som Ã¤r ojÃ¤mnt centrerade etc.?
 - Ser ut som att loggan har tappat sin "form". Skall vara kvadratisk.


Ã–vriga synpunkter
 - Funderar pÃ¥ om "About us" Ã¤r mer fÃ¶r oss sÃ¥ vi fÃ¶rstÃ¥r fÃ¶reaget och vad de vill nÃ¥ ut med Ã¤n info fÃ¶r hemsidan.



Arboreal del 2

jag använde mig utav media-queries för samtliga bildskärmar(desktop, tablet, mobil) see css-filen.


BreakPoints


1.css: rad 64 margin: auto;

jag valde margin: auto; för att det fungerar väl med flexbox när man ska centrera divar eller bilder i din sida under alla skärmstorlekar vilket även gör det responsivt.

2.css rad 113, 230, 251, 260, 268, 394 
background: url() no-repeat center center;

har gett samma värde för alla backrundsbilder jag använder för att få bilden att täcka backrunden så bra som möjligt vilket ger användaren ett bättre blick om vilken section man är i.


3.css: rad 211, 234, 298 padding-bottom: 1rem;

Använde samma värde för att uppfylla samma krav som var att bli lite luftigare än att krama nedre vägen.

4.css rad 282 flex basis: 30%;

Eftersom Jag körde med en 3 column layout valde jag att göra 30% width på mina wrapper and sedan lägga till en 
justify-content: space around; som såg till att alla får det samma bredd och flyter ifrån varandra oavsett bredd.

5.css rad 649 @media all and (min-width: 1025px)

jag gav värdet 1025px för att de flesta desktop skärmar stiger över det värdet vilket det förhoppningsvis kommer att uppfylla sålänge det är en desktop. 

Responsiv Mönster

Jag har utgått från 3 column flexbox desktop mönster för att de flesta sectioner handla om 3 olika teman samt priser och ville få ut allt så att de tar lika mycket plats när det gäller desktop, för tablet/mobil så tog jag bort flexbox och minskade måtten de flesta värden till en viss pixlar där det passar bäst till beronde på skärmstorleken.

