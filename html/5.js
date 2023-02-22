window.addEventListener("load", () => {
    getStudents();
});

function showError(message) {
    document.querySelector("#error").innerHTML = message
    document.querySelector("#error").style.display = "block";
}

function cleanError() {
    document.querySelector("#error").innerHTML = ""
}

function showLoading() {
    document.querySelector("#loading").style.display = "block";
}

function hideLoading() {
    document.querySelector("#loading").style.display = "none";
}

async function onFormSubmit(event) {
    event.preventDefault();
    cleanError()
    let frm = event.target;
    if (!frm.elements.firstName.value) {
        showError("Enter First name")
        return;
    }
    if (!frm.elements.email.value) {
        showError("Enter Email")
        return;
    }
    if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(frm.elements.email.value)) {
        showError("Enter valid Email")
        return;
    }

    let obj = {
        firstName: frm.elements.firstName.value,
        lastName: frm.elements.lastName.value,
        email: frm.elements.email.value,
        marks: frm.elements.marks.value,
    }
    
    try {
        document.querySelector("#loadingAdd").style.display = "block"
        document.querySelector("#submit").style.display = "none"
        let response = await addStudent(obj)
        document.querySelector("form").reset()
        document.querySelector('#addForm').style.display = 'none'
        getStudents()
    }
    catch (ex) {
        showError(ex.message)
    }
    finally {
        document.querySelector("#loadingAdd").style.display = "none"
        document.querySelector("#submit").style.display = "block"
    }


}

async function getStudents() {
    showLoading()
    document.querySelector("#customers").style.display = "none";
    let data = await (
        await fetch("https://learnwithhmd-ce88.restdb.io/rest/students", {
            headers: {
                "x-api-key": "63f49b70478852088da68514",
            },
        })
    ).json();
    hideLoading();
    document.querySelector("#list").innerHTML = ""
    document.querySelector("#customers").style.display = "table";
    let list = document.querySelector("#list");
    for (let obj of data) {
        list.innerHTML += `<tr>
          <td>${obj.firstName}</td>
          <td>${obj.lastName}</td>
          <td>${obj.email}</td>
          <td>${obj.marks || "-"}</td>
        </tr>`;
    }
}

async function addStudent(obj) {
    let res1 = await fetch("https://learnwithhmd-ce88.restdb.io/rest/students", {
        headers: {
            "x-api-key": "63f49b70478852088da68514",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(obj),
    })
    // console.log(res1)
    let response = await res1.json();
    if (response.status === 400)
        throw new Error(`${convertErrorToString(response.list)}`)
    return response;
}

function convertErrorToString(list) {
    let str = ""
    for (let item of list) {
        str += `${item.field}: ${item.message[0]} <br />`
    }
    return str
}