
function getArea(length, width){
    let area = length * width,
    result = document.getElementById("fun1").innerText = area;
    return area;
}
getArea(3, 4.5);

function getPerimeter(length, width) {
    let perimeter = 2*(length + width),
        result = document.getElementById("fun2").innerText = perimeter;
    return perimeter
}
getPerimeter(3, 4.5);

