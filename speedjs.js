const get = function (url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){
                if(xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr);
                }
            }
        }
        xhr.open('GET', url, true);
        xhr.send();
    });
}

const generateHtmlTag = ((tag,data,id=null,classe=null) => `<${tag} id="${id}" class="${classe}">${data}</${tag}>`);
const generateHtmlTagArray = ((tag,data=[],id=null,classe=null) => `<${tag} id="${id}" class='${classe}'>${data.map(i=> i=generateHtmlTag(tag,i,id,classe)).join('')}</${tag}>`);
const asyncawait = async (url) => await get(url);