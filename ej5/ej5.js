function calcArea(){
    const ladoA = document.getElementById("ladoA").value
    const ladoB = document.getElementById("ladoB").value
    const ladoC = document.getElementById("ladoC").value

    let triang = (ladoB * (ladoA - ladoC )/ 2)
    let rect = ladoB * ladoC
    let area = triang + rect
    
    alert(area)
}
