const generatePdfButton = document.getElementById('btn');

generatePdfButton.addEventListener('click', async () => {
  const entirePage = document.querySelector('.container');

  const pdfOptions = {
    margin: 10,
    filename: 'teacher_review.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
  };

  // Convert the entire HTML page to PDF using html2pdf library
  await html2pdf().from(entirePage).set(pdfOptions).save();

});

function generateAPDF() {
  const generatePdfButton = document.getElementById('btn-pupet');

generatePdfButton.addEventListener('click', async () => {
  const entirePage = document.querySelector('.container');

  const pdfOptions = {
    margin: 10,
    filename: 'teacher_review_pupet.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
  };

  // Convert the entire HTML page to PDF using html2pdf library
  await html2pdf().from(entirePage).set(pdfOptions).save();

});    
  }    

function convertHTMLtoPDF() {
  const { jsPDF } = window.jspdf;
 
  let doc = new jsPDF('l', 'mm', [1500, 1400]);
  let pdfjs = document.querySelector('.container');
 
  doc.html(pdfjs, {
    callback: function(doc) {
      doc.save("teacher_review_data.pdf");
    },
    x: 15,
    y: 30
    });               
  }    

               
