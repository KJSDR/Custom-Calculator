document.addEventListener('DOMContentLoaded', function() {
    const shapeSelect = document.getElementById('shape');
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const areaResult = document.getElementById('areaResult');

    function calculateArea() {
        const shape = shapeSelect.value;
        const value1 = parseFloat(input1.value);
        const value2 = parseFloat(input2.value);

        let area = 0;

        if (shape === 'triangle') {
            area = 0.5 * value1 * value2; 
        } else if (shape === 'rectangle') {
            area = value1 * value2;
        } else if (shape === 'circle') {
            area = Math.PI * value1 * value1;
            input2.style.display = 'none';
        } else {
            input2.style.display = 'inline';
        }
        areaResult.textContent = area.toFixed(2);
    }

    shapeSelect.addEventListener('change', calculateArea);
    input1.addEventListener('input', calculateArea);
    input2.addEventListener('input', calculateArea);

    calculateArea();
});
