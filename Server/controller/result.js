module.exports = (success, data) => {
    return {
        success,
        data: (success ? data : null),
        message: (success ? '' : data)
    }
}