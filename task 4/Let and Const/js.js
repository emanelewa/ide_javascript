function area() {
    const PI = Math.PI,
        r = 2.6;
    let areaValue = PI * r * r;
    document.write(areaValue);
    return areaValue
}
area();

function perimeter() {
    const PI = Math.PI,
        r = 2.6;
    let perimeterValue = 2 * PI * r;
    document.write('<br> <br>' + perimeterValue);
    return perimeterValue
}
perimeter();
