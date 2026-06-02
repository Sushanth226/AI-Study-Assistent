require('dotenv').config();
const processPDF = require('./src/services/pdfProcessing');

const summarizeChunks = require('./src/services/summarizeService');

(async () => {
    try {
        const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
        const result = await processPDF(pdfUrl);
        console.log("Success processPDF:", Object.keys(result));
        const summary = await summarizeChunks(result.chunks);
        console.log("Success summarize:", summary);
    } catch (e) {
        console.error("Error occurred:");
        console.error(e);
    }
})();
