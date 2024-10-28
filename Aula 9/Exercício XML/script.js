const xmlString = /* xml */ `
    <frota>
      <informacoes>
        <nomeEmpresa>Transportes Rapidez</nomeEmpresa>
        <sede>
          <rua>Rua da Logística, 456</rua>
          <cidade>Rio de Janeiro</cidade>
          <estado>RJ</estado>
          <cep>20000-000</cep>
        </sede>
        <telefone>(21) 9876-5432</telefone>
      </informacoes>
      <veiculos>
        <veiculo>
          <modelo>Mercedes-Benz Sprinter</modelo>
          <ano>2020</ano>
          <placa>XYZ-1234</placa>
          <disponivel>true</disponivel>
        </veiculo>
        <veiculo>
          <modelo>Volkswagen Delivery</modelo>
          <ano>2018</ano>
          <placa>ABC-5678</placa>
          <disponivel>false</disponivel>
        </veiculo>
        <veiculo>
          <modelo>Ford Cargo</modelo>
          <ano>2021</ano>
          <placa>DEF-9101</placa>
          <disponivel>true</disponivel>
        </veiculo>
      </veiculos>
    </frota>
`;

function stringToXml(xmlString){
  let parser = new DOMParser();
  let xmlDoc = parser.parseFromString(xmlString, 'application/xml');
  return xmlDoc;
}

function updateCompanyInfo(xmlObj){
  let companyInfo = document.querySelector('.company-details');
  let companyInfoHtml =
  `
      <div>
          <p><strong>Nome da Empresa:</strong> ${xmlObj.getElementsByTagName('nomeEmpresa')[0]?.textContent}</p>
          <p><strong>Telefone:</strong> ${xmlObj.getElementsByTagName('telefone')[0]?.textContent}</p>
      </div>
      <div>
          <p><strong>Sede:</strong></p>
          <p>${xmlObj.getElementsByTagName('rua')[0]?.textContent}</p>
          <p>${xmlObj.getElementsByTagName('cidade')[0]?.textContent}, ${xmlObj.getElementsByTagName('estado')[0]?.textContent}</p>
          <p>CEP: ${xmlObj.getElementsByTagName('cep')[0]?.textContent}</p>
      </div>
  `;
  companyInfo.innerHTML = companyInfoHtml;
}

function updateVehiclesList(xmlObj){
  let vehiclesList = document.querySelector('#tbody');
  let vehicles = xmlObj.getElementsByTagName('veiculo');
  let vehiclesListHtml = '';
  for (let i = 0; i < vehicles.length; i++){
    vehiclesListHtml += `<tr>
        <td>${vehicles[i].getElementsByTagName('modelo')[0]?.textContent}</td>
        <td>${vehicles[i].getElementsByTagName('ano')[0]?.textContent}</td>
        <td>${vehicles[i].getElementsByTagName('placa')[0]?.textContent}</td>
        <td>${vehicles[i].getElementsByTagName('disponivel')[0]?.textContent}</td>
    </tr>`;
  }
  vehiclesList.innerHTML = vehiclesListHtml;
}

let obj = stringToXml(xmlString);
updateCompanyInfo(obj);
updateVehiclesList(obj);