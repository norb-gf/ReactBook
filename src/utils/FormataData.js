
export default function formataData (wdata)  {
    let dataFormatada = "";
    if (wdata) {
      dataFormatada =
        wdata.substr(8, 2) + "-" + wdata.substr(5, 3) + wdata.substr(0, 4);
    }
    return dataFormatada;
  };