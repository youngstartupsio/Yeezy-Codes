"use strict";

var javascriptExample = new Editor("javascriptExample", "javascript");
javascriptExample.set_editor_text("\n// functions and varibles\nvar input = \"Hello, World!\"\nfunction(input) {\n    document.getElementById('helloworld').val() = input;\n}\n\n// arrays and loops\nvar newArray = [2, \"sup\"];\nnewArray.push(\" bro\");\n\nvar string = \"\";\nfor (var i = 0; i < newArray.length; i++) {\n    string = string + newArray[i]\n}\ndocument.getElementById('stringcombine').val() = string;\n");

s;