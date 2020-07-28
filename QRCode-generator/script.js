const input = document.getElementById('data');
const placeholder = document.getElementById('placeHolder');

function generateQR(data)
{
    var qr = qrcode(0, 'L');
    qr.addData(data);
    qr.make();
    placeholder.innerHTML = qr.createSvgTag(8, 0);
    placeholder.classList.add('placeHolder');
}

input.addEventListener('change', () => {
    if (input.value == '')
    {
        placeholder.innerHTML = '';
        placeholder.classList.remove('placeHolder');
    }
    else generateQR(input.value);
});