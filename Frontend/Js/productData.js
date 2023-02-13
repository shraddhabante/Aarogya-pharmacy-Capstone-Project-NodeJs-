//view All products
//view Product data
async function viewAllProduct() {
    let res = await fetch("http://localhost:3000/api/product/showAllProduct");
    let data = await res.json();
    console.log(data);
    var tableTag = document.createElement("table");
    tableTag.setAttribute("class", "table ProdTable table-bordered border-primary");
    var firstRow = document.createElement("tr");
    firstRow.setAttribute("class","tr")

    var firstRowFirstColumn = document.createElement("th");
    var firstRowFirstColumnValue = document.createTextNode("_id");
    firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

    var firstRowSecondColumn = document.createElement("th");
    var firstRowSecondColumnValue = document.createTextNode("pname");
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);

    var firstRowThirdColumn = document.createElement("th");
    var firstRowThirdColumnValue = document.createTextNode("price");
    firstRowThirdColumn.appendChild(firstRowThirdColumnValue);

    var firstRowFourthColumn = document.createElement("th");
    var firstRowFourthColumnValue = document.createTextNode("quantity");
    firstRowFourthColumn.appendChild(firstRowFourthColumnValue);

    var firstRowFifthColumn = document.createElement("th");
    var firstRowFifthColumnValue = document.createTextNode("categoryId");
    firstRowFifthColumn.appendChild(firstRowFifthColumnValue);

    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);
    firstRow.appendChild(firstRowThirdColumn);
    firstRow.appendChild(firstRowFourthColumn);
    firstRow.appendChild(firstRowFifthColumn);

    tableTag.appendChild(firstRow);

    for (i = 0; i < data.length; i++) {
        var secondRow = document.createElement("tr");

        var secondRowFirstColumn = document.createElement("td");
        var secondRowFirstColumnValue = document.createTextNode(data[i]._id);
        secondRowFirstColumn.appendChild(secondRowFirstColumnValue);

        var secondRowSecondColumn = document.createElement("td");
        var secondRowSecondColumnValue = document.createTextNode(data[i].pname);
        secondRowSecondColumn.appendChild(secondRowSecondColumnValue);

        var secondRowThirdColumn = document.createElement("td");
        var secondRowThirdColumnValue = document.createTextNode(data[i].price);
        secondRowThirdColumn.appendChild(secondRowThirdColumnValue);

        var secondRowFourthColumn = document.createElement("td");
        var secondRowFourthColumnValue = document.createTextNode(data[i].quantity);
        secondRowFourthColumn.appendChild(secondRowFourthColumnValue);

        var secondRowFifthColumn = document.createElement("td");
        var secondRowFifthColumnValue = document.createTextNode(data[i].categoryId);
        secondRowFifthColumn.appendChild(secondRowFifthColumnValue);

        secondRow.appendChild(secondRowFirstColumn);
        secondRow.appendChild(secondRowSecondColumn);
        secondRow.appendChild(secondRowThirdColumn);
        secondRow.appendChild(secondRowFourthColumn);
        secondRow.appendChild(secondRowFifthColumn);

        tableTag.appendChild(secondRow);
    }
    document.getElementById("viewProduct").appendChild(tableTag)
}

//Add product Details
function addProduct() {
    var idValue = document.getElementById("id").value;
    var pnameVal = document.getElementById("pname").value;
    var priceVal = document.getElementById("price").value;
    var quantityVal = document.getElementById("quantity").value;
    var categoryIdVal = document.getElementById("categoryId").value;
    var product = { _id: idValue, pname: pnameVal, price: priceVal, quantity: quantityVal, categoryId: categoryIdVal };
    console.log(product);
    fetch("http://localhost:3000/api/product/storeProductData", {
        method: "post",
        body: JSON.stringify(product),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json()).then(result => {
        // document.getElementById("addProduct").innerHTML = result.msg;
        window.alert(result.msg)
        console.log(result);
    }).catch(err => console.log(err));
}

//find Product by name
function productName(){
    var productName=document.getElementById("pname").value;
    fetch("http://localhost:3000/api/product/findProductByName/"+productName,{
        method:"get",
    }).then(res=>res.json()).
    then(result=>{
        if(result.msg!=null){
            opData=document.getElementById("productName");
            opData.innerHTML=result.msg;
        }else{
            opData=document.getElementById("productName");
            opData.innerHTML="id : "+result._id+"<br>Product Name: "+result.pname+"<br>Price: "+result.price+"<br>Quantity: "+result.quantity+"<br>Category Id: "+result.categoryId;
        }
    }).catch(err=>console.log(err));
}

