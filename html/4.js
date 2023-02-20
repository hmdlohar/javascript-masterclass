document.querySelector("#frm").addEventListener("submit", readValues)

function readValues(event) {
    event.preventDefault()
    console.log("it's clicked", event)
    // let frm = event.target;
    let frm = document.querySelector("#frm")
    let objDetail={
        name: frm.elements.name.value,
        email: frm.elements.email.value,
        gender: frm.elements.gender.value,
        language: frm.elements.language.value,
        detail: frm.elements.detail.value,
        isEnglish: frm.elements.english.checked,
    }
    console.log(objDetail)
}