const uploadInput = document.getElementById('templateFile');

uploadInput.addEventListener('input', (event) => {
    Array.prototype.forEach.call((event.target.files), (file,i) => {
        console.log("index",i);
        createFile(file.name,i);
    })
})

function removeFileFromFileList(index) {
    const fileListArr = Array.from(uploadInput.files)
    fileListArr.splice(index, 1)
    console.log(fileListArr)
  }

function createFile(name,index) {
    let files = document.getElementById('upload-files')
    let file = document.createElement('div');
    let fileName = document.createElement('span');
    fileName.innerHTML = name;
    let removeBtn = document.createElement('span');
    removeBtn.innerHTML = "remove"
    removeBtn.setAttribute('index',index);
    removeBtn.setAttribute('onclick',`removeFileFromFileList(${index})`);
    removeBtn.className = 'bg-danger text-white p-2 cursor-pointer';
    file.className = 'upload-file card p-2 d-flex flex-row justify-content-between align-items-center mb-2';
    file.appendChild(fileName);
    file.appendChild(removeBtn);
    files.appendChild(file);
}

function dropHandler(ev) {
    console.log("File(s) dropped");
    ev.preventDefault();
    if (ev.dataTransfer.items) {
        [...ev.dataTransfer.items].forEach((item, i) => {
            if (item.kind === "file") {
                const file = item.getAsFile();
                createFile(file.name,i);
                console.log(`file[${i}].name = ${file.name}`);
            }
        });
    } else {
        [...ev.dataTransfer.files].forEach((file, i) => {
            console.log(`file[${i}].name = ${file.name}`);
        });
    }
}

function dragOverHandler(ev) {
    console.log("File(s) in drop zone");
    ev.preventDefault();
}



