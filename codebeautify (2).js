﻿var contents = new Array()
contents[0] = '<h2 style="text-align: center;"><a href="https://docs.google.com/forms/d/1VgI4k7djzETVM-Ua4ib6FhuG6-wtw3HqvrPfEhUud4I/edit?usp=sharing" target="_blank" rel="noopener"><strong>IRENE</strong></a></h2>'
contents[1] = '<h2 style="text-align: center;"><a href="https://docs.google.com/forms/d/1-KAnVz73Qk2krMASPxHWPIy5kmFkff7Idzimspxldjg/edit?usp=sharing" target="_blank" rel="noopener">MIKEL</a></h2>'
contents[2] = '<h2 style="text-align: center;"><a href="https://docs.google.com/forms/d/1oT2_LlrEI2Kp1I61t3yFDv6KM8L5UT1FbcI-krcOo8o/" target="_blank" rel="noopener">&Aacute;LVARO</a></h2>'
contents[3] = '<h2 style="text-align: center;"><a href="https://docs.google.com/forms/d/1GGs5pLvDCuFtHV2U52d6bkTFplgVlNVBk5jxQQg28Zg/edit?usp=sharing" target="_blank" rel="noopener">MIRIAM</a></h2>'
contents[4] = '<h2 style="text-align: center;"><a href="https://docs.google.com/forms/d/16Ytex84EyU6Zv0z6gO_cYV2VuaXxzv19B1aJ5cMfRPs/edit?usp=sharing" target="_blank" rel="noopener">LUC&Iacute;A</a></h2>'
contents[5] = '<h2 style="text-align: center;"><a href="https://docs.google.com/forms/d/1LDff9Ow6yoy32ww58H39Rj20dnO59ysiFrmRtD7Gghk/edit?usp=sharing" target="_blank" rel="noopener">OIHANA</a></h2>'
contents[6] = '<h2 style="text-align: center;"><a href="https://docs.google.com/forms/d/1WoVJmYNcBalBFVOgC-rG6JE_CcIhE8SPAbB308NHsEc/edit?usp=sharing" target="_blank" rel="noopener">MANUEL JES&Uacute;S</a></h2>'
contents[7] = '<h2 style="text-align: center;"><a href="https://docs.google.com/forms/d/1LtZFNaXPXdg0986VK6NOQ2MNmEjV3EVWuIJLrrHa5xk/edit?usp=sharing" target="_blank" rel="noopener">JOSAN</a></h2>'
contents[8] = '<h2 style="text-align: center;"><a href="https://docs.google.com/forms/d/1WOGVk-prYWDUR1nxIJ4yicIZtVUyKGDGHOn13OUoLTE/edit?usp=sharing" target="_blank" rel="noopener">H&Eacute;CTOR</a></h2>'
contents[9] = '<h2 style="text-align: center;"><a href="https://docs.google.com/forms/d/1sqhTERIgdzrCZDw8hKT3R8aqhgTxgtjLBnpYptbO6VQ/edit?usp=sharing" target="_blank" rel="noopener">DAVID</a></h2>'

var i = 0
//variable used to contain controlled random number 
var random
var spacing = "<br>"
//while all of array elements haven't been cycled thru
while (i < contents.length) {
  //generate random num between 0 and arraylength-1
  random = Math.floor(Math.random() * contents.length)
  //if element hasn't been marked as "selected"
  if (contents[random] != "selected") {
    document.write(contents[random] + spacing)
    //mark element as selected
    contents[random] = "selected"
    i++
  }
}