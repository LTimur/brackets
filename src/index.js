module.exports = function check(str, bracketsConfig) {
    let bracketsList = bracketsConfig.map(item => {
        return item.join('');
    });
    for (let i = 0; i < bracketsList.length;) {
        if (str.indexOf(bracketsList[i]) !== -1) {
          str = str.replace(bracketsList[i], '');
          i = 0;
        } else {
          i++;
        }
    };
    return !str
}
