function clr() {
document.getElementById("input").value = "";
    }
     function show(value) {
document.getElementById("input").value += value;
    }
     function result() {
var a = document.getElementById("input").value;
var b = eval(a);
document.getElementById("input").value = b;
    }
    function sin(){
        document.getElementById("input").value=Math.sin(document.getElementById("input").value);
        }
        function cos(){
            document.getElementById("input").value=Math.cos(document.getElementById("input").value);
            }
            function tan(){
                document.getElementById("input").value=Math.tan(document.getElementById("input").value);

                }
                function square(){
                    document.getElementById("input").value = Math.pow(document.getElementById("input").value, 2);
                    }
