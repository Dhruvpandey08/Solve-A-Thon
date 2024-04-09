function loadCoolerData() {
    var floor = document.getElementById('floorSelect').value;
    var coolerSelect = document.getElementById('coolerSelect');
    coolerSelect.innerHTML = '';
    if (floor) {
        coolerSelect.innerHTML = '<option value="">' + '--Select a cooler--' + '</option>' +
                                 '<option value="' + floor + 'A">' + 'Cooler ' + floor + 'A' + '</option>' +
                                 '<option value="' + floor + 'B">' + 'Cooler ' + floor + 'B' + '</option>';
        coolerSelect.disabled = false;
    } else {
        coolerSelect.disabled = true;
    }
}
