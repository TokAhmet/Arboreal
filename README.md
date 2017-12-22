Arboreal Del 1


Hejsan! 

Jag har skapat en hemsida får Arboreal som är en prenumerationstjänst för företag.
De hjälper företag att dekorera sina kontor med fina växter som man sedan betalar varje månad får att få in nya samt förnya det gamla, man får extra enheter beronde på vilken abonemang man köper.

Jag har skapat en HTML,CSS,JS fil samt lagt till ett par bilder får att snygga till det lite.
var god kolla igenom koden och se ifall du fann några fel eller något jag kunde fårbättra :).


Validering:

HTML:

Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.

    From line 142, column 2; to line 142, column 23

   (Använder IMG här istället för en heading)

CSS:

Gratulerar Inga fel hittades.

M.V.H
Ahmet Ordulu.

Feedback från Arboreal Del 1


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


Jag använder flexbox för att strukturera sidan samt göra det enklare för mig att använda media queries när det kommer till tablet och mobila enheter.
jag använder mig utav media-queries för samtliga bildskärmar(desktop, tablet, mobil) see css-filen.


BreakPoints:

1024px: gör headern lite mindre samt font storleken och att container klassen inte kramar sidoväggen.

900px: gömmer huvudloggan och gör navbar storleken lite mindre så att den inte tar så mycket plats

480px: gör font storleken ännu mindre för smalla skärmar liksom de äldra versionerna av smartphones.

Responsiv Mönster:

Jag har utgått från mostly fluid för att göra det så mycket responsiv som möjligt jag använde desstuom ett par max-width breakpoint som går allt från mobil anpassat till desktop skärmar, ett exempel kan vara att huvudloggan inte syns på mobil anpassade enheter.

Feedback:

då jag inte fick så mycket kritik så följde jag den feedback jag fick när det handla om theme sektionen så jag ändrade lite och gav varje tema lite mer plats samt en bild om hur den ser ut när man hover. förutom det så var det ochså att jag hade både px på vissa ställen och inte rem men jag behövde de exakta värden för att hålla alla på bättre plats.


Fungerande Browsers:

Firefox
Chrome
Android
IOS
Microsoft Edge
Internet Explorer 11,10,9
