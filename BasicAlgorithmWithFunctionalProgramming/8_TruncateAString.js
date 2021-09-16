function truncateString(str, num) {
    let truncated = str.substring(0,num)
    return str.length > num ? truncated+"..." : truncated;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
