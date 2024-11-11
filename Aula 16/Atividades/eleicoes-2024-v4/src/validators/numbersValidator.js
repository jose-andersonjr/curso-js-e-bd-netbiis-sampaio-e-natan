export default function validateNumberParam(numberParam) {
    if (!isNaN(numberParam) && parseInt(numberParam) >= 0) {
        return parseInt(numberParam);
    }
    return null;
}