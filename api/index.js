
const api = "https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817";

async function getapi(url) {
    const response = await fetch(url);

    const emp = await response.json();
    console.log(emp);

    if (response) {
        hideloader();

    }
    show(emp);
}

getapi(api);

function hideloader() {
    document.getElementById("loading").style.display = "none";
}

function show(emp) {
    let message = emp.message;
 

 
    let table =
        `<tr>
					<th>Name</th>
					<th>Office</th>
					<th>Position</th>
					<th>Salary</th>
					</tr>`;



    for (let i = 0; i < emp.data.length; i++) {
    let obj = emp.data[i];
    // console.log(obj);
   
        table += 
        `<tr>
                        <td>${obj.name} </td>
                        <td>${obj.office}</td>
                        <td>${obj.position}</td>
                        <td>${obj.salary}</td>		
                    </tr>`;

    }

    document.getElementById("table").innerHTML = table;
    document.getElementById("message").innerHTML = message;
}