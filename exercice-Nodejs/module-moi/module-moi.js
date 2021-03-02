const filterFilesExtension = require('./module-moi-2');

const [_node, _path, directoryPath, extension] = process.argv;


filterFilesExtension(directoryPath, extension, (err, list) => {
    if (err) { return console.log(err) }
    list.forEach(file => {
        console.log(file);
    })
})