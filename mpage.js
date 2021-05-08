function ajax(){

   
    var xhttp=new XMLHttpRequest();
    console.log(xhttp);
    xhttp . onreadystatechange  =function(){
        if(this.readyState==4&&this.status==200){

            var items=JSON.parse(this.responseText);
            //todotable.innerHTML = "";
           // createItemTable(items);
            GenerateTable(items);

        }
    }


    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}


 function GenerateTable(items){
    const todotable = document.getElementById("table0")
 items.forEach(addtble);
    function addtble(item, index) {
      var row = document.createElement("TR");
     
      var cell1 = document.createElement("TD");
      var cell2 = document.createElement("TD");
      
      var celltext = document.createTextNode(items[index].title);
      var checktext = document.createTextNode(items[index].completed);
      if (items[index].completed === true) {
        var checkitem = document.createElement("INPUT");
        checkitem.setAttribute("type", "checkbox");
        checkitem.setAttribute("checked", true);
        checkitem.setAttribute("disabled", true);
        checkitem.setAttribute("id", "cb");
        
        cell1.appendChild(checkitem);
        
      } else {
        var checkitem = document.createElement("INPUT");
        checkitem.setAttribute("type", "checkbox");
        checkitem.setAttribute("id", "cb");
        cell1.appendChild(checkitem);
      }
      
     cell2.appendChild(celltext);

      
      row.appendChild(cell1);
      row.appendChild(cell2);
      todotable.appendChild(row);
    }
    
   
  
}
 