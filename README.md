Arboreal Del 1


Hejsan! 

Jag har skapat en hemsida f�r Arboreal som �r en prenumerationstj�nst f�r f�retag.
De hj�lper f�retag att dekorera sina kontor med fina v�xter som man sedan betalar varje m�nad f�r att f� in nya samt f�rnya det gamla, man f�r extra enheter beronde p� vilken abonemang man k�per.

Jag har skapat en HTML,CSS,JS fil samt lagt till ett par bilder f�r att snygga till det lite.
var god kolla igenom koden och se ifall du fann n�gra fel eller n�got jag kunde f�rb�ttra :).


Validering:

HTML:

Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.

    From line 142, column 2; to line 142, column 23

   (Anv�nder IMG h�r ist�llet f�r en heading)

CSS:

Gratulerar Inga fel hittades.

M.V.H
Ahmet Ordulu.

Feedback fr�n Arboreal Del 1


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


Jag anv�nder flexbox f�r att strukturera sidan samt g�ra det enklare f�r mig att anv�nda media queries n�r det kommer till tablet och mobila enheter.
jag anv�nder mig utav media-queries f�r samtliga bildsk�rmar(desktop, tablet, mobil) see css-filen.


BreakPoints:

1024px: g�r headern lite mindre samt font storleken och att container klassen inte kramar sidov�ggen.

900px: g�mmer huvudloggan och g�r navbar storleken lite mindre s� att den inte tar s� mycket plats

480px: g�r font storleken �nnu mindre f�r smalla sk�rmar liksom de �ldra versionerna av smartphones.

Responsiv M�nster:

Jag har utg�tt fr�n mostly fluid f�r att g�ra det s� mycket responsiv som m�jligt jag anv�nde desstuom ett par max-width breakpoint som g�r allt fr�n mobil anpassat till desktop sk�rmar, ett exempel kan vara att huvudloggan inte syns p� mobil anpassade enheter.

Feedback:

d� jag inte fick s� mycket kritik s� f�ljde jag den feedback jag fick n�r det handla om theme sektionen s� jag �ndrade lite och gav varje tema lite mer plats samt en bild om hur den ser ut n�r man hover. f�rutom det s� var det ochs� att jag hade b�de px p� vissa st�llen och inte rem men jag beh�vde de exakta v�rden f�r att h�lla alla p� b�ttre plats.


Fungerande Browsers:

Firefox
Chrome
Android
IOS
Microsoft Edge
Internet Explorer 11,10,9
