Hejsan! 

Jag har skapat en hemsida för Arboreal som är en prenumerationstjänst för företag.
De hjälper företag att dekorera sina kontor med fina växter som man sedan betalar varje måndad för att få in nya samt fräsha det gamla.

Jag har skapat en HTML,CSS,JS fil samt lagt till ett par bilder för att snygga till det lite.
var god kolla igenom koden och se ifall du fann några fel eller något jag kunde förbättra :).


Validering:

HTML:

Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.

    From line 142, column 2; to line 142, column 23

   (Anv�nder IMG h�r ist�llet f�r en heading)

CSS:

Gratulerar Inga fel hittades.

M.V.H
Ahmet Ordulu.


Förslag på feedbackpunkter:

Är HTMLen logiskt upplagd, korrekt indenterad och lättläst?
- HTML är bra skriven, går lätt att följa och varje DIV är bra namngiven.
- Möjligvis att det saknas någon märkning i FORM 142-169.
Klipper in lärarens exempel  <form>
  <label for="todo">Add Todo</label>
  <input type="text" name="todo" id="todo">


Är CSSen logiskt upplagd, korrekt indenterad och lättläst?
- JA, det är lätt att hänga med och vad som ska gå vart. Allt kommer i rätt ordning.

Tydlig namngivning av klasser så att man förstår vad det är som stylas? 
-JA,


Finns det överflödig CSS? För många selektorer eller för specifika selektorer? Upprepande av egenskaper i CSSen?
- Möjligen att H1-H3 har samma styling flera gånger.
- Tycker inte att de är överdivet många selektorer.
- Blandat PX och REM, tydligaste stället är 431 och 434.


Är gränssnittet (designen) tydligt indelad och lättanvänd?
- JA, Gillar mjuka bläddringen ner på sidan samt den exlusiva hover funktionen rad 257-279.


Finns det ändringar i designen som skulle kunna underlätta användandet av sidan?
- Jag skulle låta varje Theme får mer plats och ge dem chansen att visa vad som skiljer dem åt. Du fick priserna att skilja sig så låt theme göra det samma? 


Öka kontrasterna på sidan? Använd mer marginaler/padding för att göra saker luftigare? 
- Känns som samma fråga som åvan


Finns det element som är ojämnt centrerade etc.?
 - Ser ut som att loggan har tappat sin "form". Skall vara kvadratisk.


Övriga synpunkter
 - Funderar på om "About us" är mer för oss så vi förstår föreaget och vad de vill nå ut med än info för hemsidan.



Arboreal del 2

jag anv�nde mig utav media-queries f�r samtliga bildsk�rmar(desktop, tablet, mobil) see css-filen.


BreakPoints


1.css: rad 64 margin: auto;

jag valde margin: auto; f�r att det fungerar v�l med flexbox n�r man ska centrera divar eller bilder i din sida under alla sk�rmstorlekar vilket �ven g�r det responsivt.

2.css rad 113, 230, 251, 260, 268, 394 
background: url() no-repeat center center;

har gett samma v�rde f�r alla backrundsbilder jag anv�nder f�r att f� bilden att t�cka backrunden s� bra som m�jligt vilket ger anv�ndaren ett b�ttre blick om vilken section man �r i.


3.css: rad 211, 234, 298 padding-bottom: 1rem;

Anv�nde samma v�rde f�r att uppfylla samma krav som var att bli lite luftigare �n att krama nedre v�gen.

4.css rad 282 flex basis: 30%;

Eftersom Jag k�rde med en 3 column layout valde jag att g�ra 30% width p� mina wrapper and sedan l�gga till en 
justify-content: space around; som s�g till att alla f�r det samma bredd och flyter ifr�n varandra oavsett bredd.

5.css rad 649 @media all and (min-width: 1025px)

jag gav v�rdet 1025px f�r att de flesta desktop sk�rmar stiger �ver det v�rdet vilket det f�rhoppningsvis kommer att uppfylla s�l�nge det �r en desktop. 

Responsiv M�nster

Jag har utg�tt fr�n 3 column flexbox desktop m�nster f�r att de flesta sectioner handla om 3 olika teman samt priser och ville f� ut allt s� att de tar lika mycket plats n�r det g�ller desktop, f�r tablet/mobil s� tog jag bort flexbox och minskade m�tten de flesta v�rden till en viss pixlar d�r det passar b�st till beronde p� sk�rmstorleken.

