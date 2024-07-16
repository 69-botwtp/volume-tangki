document.getElementById('jenisTangki').addEventListener('change', function () {
    var jenisTangki = document.getElementById('jenisTangki').value;
    if (jenisTangki === 'Silinder') {
        document.getElementById('inputSilinder').style.display = 'block';
        document.getElementById('inputPersegiPanjang').style.display = 'none';
    } else if (jenisTangki === 'Persegi Panjang') {
        document.getElementById('inputSilinder').style.display = 'none';
        document.getElementById('inputPersegiPanjang').style.display = 'block';
    }
});

function hitungVolume() {
    var jenisTangki = document.getElementById('jenisTangki').value;
    var volume;

    if (jenisTangki === 'Silinder') {
        var diameter = parseFloat(document.getElementById('diameter').value);
        var tinggi = parseFloat(document.getElementById('tinggi').value);
        volume = Math.PI * Math.pow(diameter / 2, 2) * tinggi;
    } else if (jenisTangki === 'Persegi Panjang') {
        var panjang = parseFloat(document.getElementById('panjang').value);
        var lebar = parseFloat(document.getElementById('lebar').value);
        var tinggiPersegi = parseFloat(document.getElementById('tinggiPersegi').value);
        volume = panjang * lebar * tinggiPersegi;
    }

    document.getElementById('hasilVolume').innerText = 'Volume: ' + volume.toFixed(2) + ' m³';
}
