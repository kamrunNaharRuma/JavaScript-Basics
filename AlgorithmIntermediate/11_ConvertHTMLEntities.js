function convertHTML(str) {
    let resultStr = str.replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;")
    return resultStr;
}

convertHTML('Stuff in "quotation marks"');
