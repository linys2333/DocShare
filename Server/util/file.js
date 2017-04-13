const fs = require('fs')

class file {
    readdirSync2Json(path) {
        let arr = []

        fs.readdirSync(path)
            .forEach((file) => {
                let data = fs.readFileSync(path + file)
                arr.push(JSON.parse(data))
            })

        return arr
    }
}

module.exports = new file()