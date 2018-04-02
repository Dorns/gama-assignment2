class TableView extends Views {

  constructor (element){
    super(element);
  }

  template (model){
    return `
      <table class="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>IP</th>
              <th>Persona</th>
              <th>Name</th>
              <th>E-mail</th>
            </tr>
          </thead>

          <tbody>
            ${Object.entries(model).map(data => `
              <tr>
                <td>${data[1]._currentdate}</td>
                <td>${data[1]._ip}</td>
                <td>${parseInt(data[1]._persona) === 1 ? 'CONTRATADO': 'CONTRATANTE'}</td>
                <td>${data[1]._name}</td>
                <td>${data[1]._email}</td>
              </tr>
            `).join('')}
          </tbody>

      </table>
    `
  }

}
