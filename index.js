const dict_text_to_dict = dict_text => {
    const lines = dict_text.split('\n');
    const arr = [];
    for (let i = 0; i < lines.length; i++) {
        let [left, right] = lines[i].split('=');
        
        left = left || '';
        right = right || '';
        arr.push([left, right]);
    }

    return arr;
};

const translate = () => {
    const dict_text = document.getElementById('dict').value;
    const input_text = document.getElementById('input').value;
    let output_text = input_text + '';

    // Generate dict
    const dict = dict_text_to_dict(dict_text);
    
    // Remove punctuation
    output_text = output_text.replaceAll('"', '');
    output_text = output_text.replaceAll('.', '');
    output_text = output_text.replaceAll(',', '');
    output_text = output_text.replaceAll('-', '');
    output_text = output_text.replaceAll('(', '');
    output_text = output_text.replaceAll(')', '');
    output_text = output_text.replaceAll('[', '');
    output_text = output_text.replaceAll(']', '');

    // Translate!
    dict.forEach(definition => {
        console.log(`Replacing '${definition[0]}' with '${definition[1]}'`);
        output_text = output_text.replaceAll(definition[0], definition[1]);
    });

    document.getElementById('output').value = output_text;
};

document.getElementById("translate").onclick = translate;

document.getElementById("dict-rtl").addEventListener('change', (event) => {
    const checked = event.currentTarget.checked;
    document.getElementById('dict').dir = checked ? "rtl" : "ltr";
});

document.getElementById("output-rtl").addEventListener('change', (event) => {
    const checked = event.currentTarget.checked;
    document.getElementById('output').dir = checked ? "rtl" : "ltr";
});

document.getElementById("input-rtl").addEventListener('change', (event) => {
    const checked = event.currentTarget.checked;
    document.getElementById('input').dir = checked ? "rtl" : "ltr";
});