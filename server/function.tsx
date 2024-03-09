import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const handleGenerateScreenshot = () => {
    const mapContainer = document.getElementById('pdf');

    if (mapContainer) {
      html2canvas(mapContainer, { allowTaint: true, useCORS: true }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('portrait', 'mm', 'a4');

        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        // const imgHeight = 297;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('mapScreenshot.pdf');
      });
    }
  };
  