function show_details(id){
    document.getElementById(id)
    console.log(id)
    document.getElementById(id).classList.replace("model-info","model-infoDisplay")
   
}
function show_none(id){
    document.getElementById(id)
    document.getElementById(id).classList.replace("model-infoDisplay","model-info")
}