let tab="<table class=\"table\" style=\"margin-top: 10px;\">"+
"<legend>"+
"    <h2 class=\"h2\">Tableau de Déclaration(s)</h2>" +
    "<p>Mois: --/----</p><p>Banque B1</p>"+
"</legend> <thead>"+
"<tr>"+
    "<th scope=\"col\">#</th>"+
    "<th scope=\"col\">Actif</th>"+
    "<th scope=\"col\">DIN. R.</th>"+
    "<th scope=\"col\">DIN. NR.</th>"+
    "<th scope=\"col\">DEV. R.</th>"+
    "<th scope=\"col\">DEV. NR.</th>"+
    "<th scope=\"col\">Tot</th>"+
"</tr>"+
"</thead>"+
"<tbody>"+
"<tr>"+
    "<td>A0100000</td>"+
    "<td>SYSTEME FINANCIER</td>"+
    "<td>270341</td>"+
    "<td></td>"+
    "<td>123591</td>"+
    "<td>11455</td>"+
    "<td>405387</td>"+
"</tr>"+
"</tbody>"
; 

function Afficher(){
    document.getElementById("Affichage").innerHTML= tab;
}