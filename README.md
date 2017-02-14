# Zadanie JavaScript
Korzystając z ulubionego frameworka, stworzyć Plugin tworzący animację slajdów.
Slider powinien uruchamiać w konfigurowalnym interwale czasowym po kolei zdjęcia znajdujące
się na liście #baner.

### Sposób ukazywania się zdjęć:
- Każde zdjęcie zostaje podzielone pionowo na 8 jednakowych plastrów (każde z nich zatem
powinno mieć 100px szerokości i wysokość 500px). Animację można porównać do "pionowych 
żaluzji okiennych"
- Plastry pojawiają w niewielkim odstępie czasu, w dowolnej kolejności, 
stosując dowolną animację jednego rodzaju.

### Uwagi
- O ile pozwala na to framework, aplikację zaimplementuj jako Plugin.
- Zastosuj jak w największym stopniu architekturę obiektową, która uczyni kod zrozumiały
już na pierwszy rzut oka i prosty w utrzymaniu.
- Struktura elementów DOM w sekcji BODY nie może zostać ręcznie zmodyfikowana (Wszystkie
modyfikacje DOM, tylko za pomocą kodu JavaScript).

### Aby było prościej:
- Baner nie musi być dostosowany do urządzeń mobilnych.
- Nie trzeba stosować mechanizmów oczekujących na załadowanie wszystkich obrazków 
- Wszystkie obrazki mają takie same wymiary
- Nawigacja <poprzedni/nastepny> jest zbędna.
- Można zastosować do pionowych plastrów animację CSS, lecz wskazany jest JS.

### Przykłady
- http://wowslider.com/jquery-slider-flux-slices-demo.html
- http://wowslider.com/image-slider-zippy-louvers-demo.html
Oczywiście animacja może być prostsza, bez akrobacji.
